@echo off
taskkill /im grafana-server.exe 2> nul
taskkill /im influxd.exe 2> nul
taskkill /im telegraf.exe 2> nul
taskkill /im chronograf.exe 2> nul
set dir=%cd%
cd %dir%\influxdb-1.7.9-1
start influxd --config influxdb.conf
ping -n 6 127.0.0.1 > nul
cd %dir%\grafana-6.5.0\bin
start grafana-server
cd %dir%\telegraf
start telegraf --config telegraf.conf
cd %dir%\chronograf
start chronograf