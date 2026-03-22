import React, { useEffect, useRef, useState } from 'react'

const PopUpItem = ({ name, rotation = 0, initialLeft = 10, size = 128, containerRef = null, onClick = () => {}, onReveal = () => {}, revealed = false }) => {
  const ref = useRef(null)
  const [y, setY] = useState(-50) // start slightly above container

  useEffect(() => {
    let raf = null
    let last = null
    let vy = 0
    const g = 2000 // px/s^2

    const tick = (ts) => {
      if (last == null) last = ts
      const dt = (ts - last) / 1000
      last = ts

      vy += g * dt
      setY((prev) => {
        const el = ref.current
        const elH = el ? el.getBoundingClientRect().height : size
        const container = containerRef && containerRef.current ? containerRef.current : null
        const floor = container ? (container.clientHeight - elH) : (window.innerHeight - elH)
        const next = prev + vy * dt
        if (next >= floor) {
          // land and stop
          vy = 0
          cancelAnimationFrame(raf)
          return floor
        }
        return next
      })

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef])

  const style = {
    ['--popup-rot']: `${rotation}deg`,
    left: `${initialLeft}%`,
    top: `${y}px`,
    width: `${size}px`,
    height: 'auto',
    transform: `scale(0.92) rotate(${rotation}deg)`,
    opacity: revealed ? 1 : undefined,
  }

  return (
    <div
      ref={ref}
      className="popup-item absolute"
      style={style}
      aria-hidden={false}
    >
      <img
        src={`/items-inicio/${name}.png`}
        alt={name}
        className="w-full h-auto cursor-pointer"
        onClick={() => onClick({ name })}
        onMouseEnter={() => onReveal({ name })}
      />
    </div>
  )
}

export default PopUpItem