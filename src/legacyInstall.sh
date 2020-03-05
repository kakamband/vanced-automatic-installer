#!/bin/bash

DEVICE_DETECTED="No"
COMMAND="adb install-multiple youtube.apk config.x86.apk config.xxxhdpi.apk "
LANGUAGES=$(echo $1 | tr "," "\n")

adb get-state 1>/dev/null 2>&1 && DEVICE_DETECTED="Yes" || DEVICE_DETECTED="No"

if [ $DEVICE_DETECTED == "Yes" ]
then
   echo 'Device Detected'
   echo 'Continuing install'
   cd $(dirname $0)
   cd youtube
   for LANG in $LANGUAGES
   do
    CONFIG="split_config.${LANG}.apk "
    COMMAND+=$CONFIG
   done
   $COMMAND
else
   echo 'No Device Detected'
   echo 'Please connect your device and enable usb debugging'
fi