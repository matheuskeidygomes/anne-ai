@echo off
start cmd /c "docker-compose up --build --force-recreate --wait && exit"
start http://localhost:3000 