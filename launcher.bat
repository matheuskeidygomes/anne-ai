@echo off
start /b "" "C:\Program Files\Docker\Docker\Docker Desktop.exe" && ping -n 5 localhost >nul
start cmd /c "docker-compose up --wait && exit"
start http://localhost:3000 