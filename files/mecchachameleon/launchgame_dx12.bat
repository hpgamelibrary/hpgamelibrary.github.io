@echo off
cd ..
title MECCHA CHAMELEON up-to-date launcher
echo MECCHA CHAMELEON launcher by GAMEDEEP. Always up-to-date.
timeout /t 1 >NUL
echo Based on STEAMCMD and OFME
timeout /t 3 >NUL
steamcmd.exe +login ydtdo32097 PzIf3P1GXw2dEJ +force_install_dir .\game\ +app_update 4704690 validate +logout +quit
rmdir /s /q ".\logs"
rmdir /s /q ".\appcache"
rmdir /s /q ".\userdata"
rmdir /s /q ".\depotcache"
del steamcmd.exe.old
del crashhandler64.dll.old
del steamcmd.exe.1.delete
xcopy ".\crack\*" ".\game\" /s /e /h /y /i
timeout /t 1 >NUL
echo GAME IS RUNNING
echo DO NOT CLOSE THIS WINDOW
cd game
cd Chameleon
cd Binaries
cd Win64
PenguinHotel-Win64-Shipping.exe
exit
