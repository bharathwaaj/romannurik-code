#!/bin/sh

# Copyright 2012 Roman Nurik
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/bin/bash

APKS=()
COMMAND=i

if [[ -z "$1" ]]; then
  echo "Usage: $0 [-u] APK..." >&2
fi

adb devices >/dev/null

while [[ -n "$1" ]]
do
  if [[ "$1" == "-u" ]]; then
    COMMAND=u
  else
    APKS=("${APKS[@]}" "$1")
  fi
  shift
done

for APK in "${APKS[@]}"; do
  case $COMMAND in
    i)
      echo "Installing $APK..."
      ninja-adb.sh install -r "$APK"
      ;;

    u)
      PACKAGE="$APK"
      if [[ -f "$PACKAGE" ]]; then
        PACKAGE=`apk-pkgname "$PACKAGE"`
        echo "Uninstalling $APK ($PACKAGE)..."
      else
        echo "Uninstalling $APK..."
      fi
      ninja-adb.sh uninstall "$PACKAGE"
      ;;
  esac

  echo
