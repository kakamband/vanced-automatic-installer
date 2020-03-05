#!/bin/bash

DEVICE_DETECTED="No"

adb get-state 1>/dev/null 2>&1 && DEVICE_DETECTED="Yes" || DEVICE_DETECTED="No"

if [ $DEVICE_DETECTED == "Yes" ]
then
   echo 'Device Detected'
   echo 'Continuing install'
   cd $(dirname $0)
   cd youtube
   adb install-multiple youtube.apk config.arm64_v8a.apk config.xxxhdpi.apk split_config.en.apk
else
   echo 'No Device Detected'
   echo 'Please connect your device and enable usb debugging'
fi

