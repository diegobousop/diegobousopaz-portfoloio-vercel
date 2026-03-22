# Start Digital Brain Demo
# This script starts all required services for the Digital Brain demo

Write-Host "Starting Digital Brain Demo..." -ForegroundColor Cyan
Write-Host ""

# Check if Python is available
$pythonCmd = $null
if (Get-Command python -ErrorAction SilentlyContinue) {
    $pythonCmd = "python"
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    $pythonCmd = "python3"
}

if (-not $pythonCmd) {
    Write-Host "ERROR: Python is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

# Start Backend (FastAPI)
Write-Host "Starting Digital Brain Backend (FastAPI on port 8000)..." -ForegroundColor Yellow
$backendPath = Join-Path $PSScriptRoot "digital-brain-core"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; $pythonCmd -m uvicorn main:app --reload --host 0.0.0.0 --port 8000"

# Wait a bit for backend to start
Start-Sleep -Seconds 2

# Start Digital Brain Frontend (Vite on port 5175)
Write-Host "Starting Digital Brain Frontend (Vite on port 5175)..." -ForegroundColor Yellow
$frontendPath = Join-Path $PSScriptRoot "digital-brain-app"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$frontendPath'; npm run dev"

# Wait a bit for frontend to start
Start-Sleep -Seconds 2

# Start Main Portfolio (Vite on port 4000)
Write-Host "Starting Portfolio (Vite on port 4000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm run dev"

Write-Host ""
Write-Host "All services started!" -ForegroundColor Green
Write-Host ""
Write-Host "Access points:" -ForegroundColor Cyan
Write-Host "  Portfolio:           http://localhost:4000" -ForegroundColor White
Write-Host "  Digital Brain Demo:  http://localhost:4000/digital-brain" -ForegroundColor White
Write-Host "  Digital Brain API:   http://localhost:8000/docs" -ForegroundColor White
Write-Host "  Digital Brain App:   http://localhost:5175" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit this script (services will keep running)..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
