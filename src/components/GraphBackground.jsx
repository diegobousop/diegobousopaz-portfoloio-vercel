import { useEffect, useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import * as echarts from 'echarts';
import * as defaultGraphData from '../data/portfolioGraph';

// Función para convertir hex a HSL
const hexToHSL = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { h: 0, s: 50, l: 50 };
  
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;
  
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

// Función para generar paleta de colores derivados del color temático
const generateColorPalette = (themeColor) => {
  const { h, s, l } = hexToHSL(themeColor);
  
  return [
    `hsl(${h}, ${s}%, ${l}%)`,           // 0: Centro - color principal
    `hsl(${(h + 15) % 360}, ${s}%, ${l + 5}%)`,   // 1: Categoría - ligeramente más claro
    `hsl(${(h + 30) % 360}, ${s - 10}%, ${l}%)`,  // 2: Frontend/Diseño - rotación
    `hsl(${(h + 45) % 360}, ${s - 15}%, ${l + 10}%)`, // 3: Backend/Research - más rotación
    `hsl(${(h + 180) % 360}, ${s - 20}%, ${l}%)`, // 4: Herramientas - complementario
    `hsl(${(h - 30 + 360) % 360}, ${s}%, ${l - 5}%)`, // 5: Proyectos - rotación inversa
    `hsl(${(h + 60) % 360}, ${s - 10}%, ${l + 5}%)`,  // 6: Experiencia - análogo
    `hsl(${(h + 150) % 360}, ${s - 15}%, ${l}%)`, // 7: Formación - split complementario
    `hsl(${(h - 15 + 360) % 360}, ${s + 5}%, ${l + 5}%)`, // 8: Aprendiendo - vibrante
    `hsl(${h}, ${s - 40}%, ${l + 15}%)`,   // 9: Conceptos - desaturado
  ];
};

const GraphBackground = forwardRef(({ interactive, onNodeClick, graphData, themeColor = '#FE4F51', isLightTheme = false }, ref) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  // Usar graphData si se pasa, sino usar los datos por defecto
  const { nodes, edges, categories } = graphData || defaultGraphData;
  
  // Generar paleta de colores basada en el themeColor
  const categoryColors = useMemo(() => generateColorPalette(themeColor), [themeColor]);

  // Exponer métodos de control del chart
  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      if (chartInstance.current) {
        const option = chartInstance.current.getOption();
        const currentZoom = option.series[0].zoom || 1;
        chartInstance.current.setOption({
          series: [{ zoom: Math.min(currentZoom * 1.3, 4) }]
        });
      }
    },
    zoomOut: () => {
      if (chartInstance.current) {
        const option = chartInstance.current.getOption();
        const currentZoom = option.series[0].zoom || 1;
        chartInstance.current.setOption({
          series: [{ zoom: Math.max(currentZoom / 1.3, 0.3) }]
        });
      }
    },
    shake: () => {
      if (chartInstance.current) {
        // Agitar: cambiar repulsión temporalmente para crear movimiento
        chartInstance.current.setOption({
          series: [{
            force: {
              repulsion: 3500,
              edgeLength: [50, 150],
            }
          }]
        });
        // Restaurar después de un momento
        setTimeout(() => {
          chartInstance.current.setOption({
            series: [{
              force: {
                repulsion: 1800,
                edgeLength: [80, 250],
              }
            }]
          });
        }, 800);
      }
    },
    explode: () => {
      if (chartInstance.current) {
        // Explotar: aumentar repulsión mucho
        chartInstance.current.setOption({
          series: [{
            force: {
              repulsion: 8000,
              gravity: 0.02,
            }
          }]
        });
        // Restaurar después
        setTimeout(() => {
          chartInstance.current.setOption({
            series: [{
              force: {
                repulsion: 1800,
                gravity: 0.15,
              }
            }]
          });
        }, 1500);
      }
    },
  }));

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, 'dark');
    chartInstance.current = chart;
    let pinchStartDistance = null;
    let pinchStartZoom = null;

    // Preparar categorías para ECharts
    const echartsCategories = categories.map((name, index) => ({
      name,
      itemStyle: { color: categoryColors[index] },
    }));

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const legendSizes = isMobile
      ? {
          left: 10,
          top: 148,
          fontSize: 12,
          itemGap: 12,
          itemWidth: 42,
          itemHeight: 22,
        }
      : {
          left: 20,
          top: 108,
          fontSize: 20,
          itemGap: 30,
          itemWidth: 52,
          itemHeight: 26,
        };

    // Procesar nodos con tamaños escalados
    const processedNodes = nodes.map((node, index) => ({
      id: `node_${index}`,
      name: node.name,
      value: node.value,
      category: node.category,
      symbolSize: Math.max(15, Math.sqrt(node.value / 3)),
      label: {
        show: true,
      },
    }));

    // Procesar edges con source/target como índices
    const processedEdges = edges.map((edge) => ({
      source: `node_${edge.source}`,
      target: `node_${edge.target}`,
    }));

    // SVG path para icono de switch toggle real con track y knob
    // Track: píldora con borde, Knob: círculo sólido blanco
    const switchOnIcon = 'path://M10,2 L30,2 C35.523,2 40,6.477 40,12 C40,17.523 35.523,22 30,22 L10,22 C4.477,22 0,17.523 0,12 C0,6.477 4.477,2 10,2 Z M10,4 C5.582,4 2,7.582 2,12 C2,16.418 5.582,20 10,20 L30,20 C34.418,20 38,16.418 38,12 C38,7.582 34.418,4 30,4 L10,4 Z M29,5 C32.866,5 36,8.134 36,12 C36,15.866 32.866,19 29,19 C25.134,19 22,15.866 22,12 C22,8.134 25.134,5 29,5 Z';
    const switchOffIcon = 'path://M10,2 L30,2 C35.523,2 40,6.477 40,12 C40,17.523 35.523,22 30,22 L10,22 C4.477,22 0,17.523 0,12 C0,6.477 4.477,2 10,2 Z M10,4 C5.582,4 2,7.582 2,12 C2,16.418 5.582,20 10,20 L30,20 C34.418,20 38,16.418 38,12 C38,7.582 34.418,4 30,4 L10,4 Z M11,5 C14.866,5 18,8.134 18,12 C18,15.866 14.866,19 11,19 C7.134,19 4,15.866 4,12 C4,8.134 7.134,5 11,5 Z';

    const option = {
      backgroundColor: isLightTheme ? '#f5f5f5' : '#000',
      legend: interactive
        ? {
            data: echartsCategories.map((c, index) => ({
              name: c.name,
              icon: switchOnIcon,
              itemStyle: {
                color: categoryColors[index],
                borderColor: categoryColors[index],
                borderWidth: 2,
              },
            })),
            orient: 'vertical',
            left: legendSizes.left,
            top: legendSizes.top,
            textStyle: {
              color: isLightTheme ? '#1a1a1a' : '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: legendSizes.fontSize,
            },
            itemGap: legendSizes.itemGap,
            itemWidth: legendSizes.itemWidth,
            itemHeight: legendSizes.itemHeight,
            inactiveColor: isLightTheme ? '#bbb' : '#555',
            inactiveBorderColor: isLightTheme ? '#ccc' : '#666',
            inactiveBorderWidth: 2,
            selectedMode: true,
            selector: false,
          }
        : undefined,
      tooltip: {
        trigger: 'item',
        backgroundColor: isLightTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
        borderColor: themeColor,
        borderWidth: 1,
        textStyle: { color: isLightTheme ? '#1a1a1a' : '#fff' },
        formatter: (params) => {
          if (params.dataType === 'node') {
            const nodeData = params.data;
            const categoryName = categories[nodeData.category] || 'Sin categoría';
            const categoryColor = categoryColors[nodeData.category] || themeColor;
            const textColor = isLightTheme ? '#1a1a1a' : '#fff';
            const borderColor = isLightTheme ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)';

            return `
              <div style="padding: 12px; min-width: 180px; border-radius: 8px;">
                <div style="margin-bottom: 10px; border-bottom: 1px solid ${borderColor}; padding-bottom: 8px;">
                  <strong style="color: ${categoryColor}; font-size: 15px; font-family: 'Syncopate', sans-serif;">${params.name}</strong>
                </div>
                <div style="margin-bottom: 8px;">
                  <span style="color: #9ca3af; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Categoría</span><br/>
                  <span style="display: inline-block; margin-top: 4px; background: ${categoryColor}22; border: 1px solid ${categoryColor}66; border-radius: 4px; padding: 3px 8px; font-size: 11px; color: ${categoryColor};">${categoryName}</span>
                </div>
                <div>
                  <span style="color: #9ca3af; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Relevancia</span><br/>
                  <span style="font-size: 13px; color: ${textColor}; margin-top: 2px; display: inline-block;">${nodeData.value}</span>
                </div>
              </div>
            `;
          }
          // Para edges/links
          return `
            <div style="padding: 8px; border-radius: 6px;">
              <span style="color: ${themeColor}; font-size: 12px;">Conexión</span>
            </div>
          `;
        },
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          nodes: processedNodes,
          links: processedEdges,
          categories: echartsCategories,
          roam: true,
          draggable: true,
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
            color: isLightTheme ? '#1a1a1a' : '#fff',
            fontSize: 11,
            fontFamily: 'Inter, sans-serif',
          },
          lineStyle: {
            color: 'source',
            opacity: 0.4,
            curveness: 0.1,
          },
          force: {
            repulsion: 1800,
            edgeLength: [80, 250],
            gravity: 0.15,
            friction: 0.6,
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 6,
              opacity: 0.8,
            },
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold',
              color: isLightTheme ? '#000' : '#fff',
            },
          },
          blur: {
            itemStyle: {
              opacity: 0.15,
            },
            lineStyle: {
              opacity: 0.05,
            },
          },
          scaleLimit: {
            min: 0.5,
            max: 4,
          },
          zoom: 1.2,
          center: ['50%', '50%'],
        },
      ],
    };

    chart.setOption(option);

    // Pinch-to-zoom manual para móvil, evitando que el navegador capture el gesto.
    const getTouchDistance = (touches) => {
      if (touches.length < 2) return 0;
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    };

    const handleTouchStart = (event) => {
      if (event.touches.length !== 2 || !chartInstance.current) return;
      pinchStartDistance = getTouchDistance(event.touches);
      const currentOption = chartInstance.current.getOption();
      pinchStartZoom = currentOption?.series?.[0]?.zoom || 1;
    };

    const handleTouchMove = (event) => {
      if (
        event.touches.length !== 2
        || !chartInstance.current
        || !pinchStartDistance
        || !pinchStartZoom
      ) {
        return;
      }

      event.preventDefault();
      const distance = getTouchDistance(event.touches);
      if (!distance) return;

      const nextZoom = Math.max(0.3, Math.min(4, pinchStartZoom * (distance / pinchStartDistance)));
      chartInstance.current.setOption({
        series: [{ zoom: nextZoom }],
      });
    };

    const handleTouchEnd = () => {
      pinchStartDistance = null;
      pinchStartZoom = null;
    };

    const chartDom = chart.getDom();
    chartDom.addEventListener('touchstart', handleTouchStart, { passive: true });
    chartDom.addEventListener('touchmove', handleTouchMove, { passive: false });
    chartDom.addEventListener('touchend', handleTouchEnd, { passive: true });
    chartDom.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // Evento de cambio en leyenda - actualizar iconos de switch
    chart.on('legendselectchanged', (params) => {
      const newLegendData = echartsCategories.map((c, index) => ({
        name: c.name,
        icon: params.selected[c.name] ? switchOnIcon : switchOffIcon,
        itemStyle: {
          color: params.selected[c.name] ? categoryColors[index] : '#555',
          borderColor: params.selected[c.name] ? categoryColors[index] : '#666',
          borderWidth: 2,
        },
      }));
      
      chart.setOption({
        legend: {
          data: newLegendData,
        },
      });
    });

    // Evento de click en nodos - mantener selección
    chart.on('click', (params) => {
      if (params.dataType === 'node') {
        const nodeData = params.data;
        
        // Disparar acción de focus en el nodo seleccionado
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
        chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
        
        if (onNodeClick) {
          onNodeClick(nodeData);
        }
      } else {
        // Click fuera de nodo - deseleccionar
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
        });
      }
    });

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartDom.removeEventListener('touchstart', handleTouchStart);
      chartDom.removeEventListener('touchmove', handleTouchMove);
      chartDom.removeEventListener('touchend', handleTouchEnd);
      chartDom.removeEventListener('touchcancel', handleTouchEnd);
      chart.off('click');
      chart.off('legendselectchanged');
      chart.dispose();
    };
  }, [interactive, onNodeClick, nodes, edges, categories, categoryColors, themeColor, isLightTheme]);

  return (
    <div
      ref={chartRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: interactive ? 'auto' : 'none',
        touchAction: interactive ? 'none' : 'auto',
      }}
    />
  );
});

GraphBackground.displayName = 'GraphBackground';

export default GraphBackground;
