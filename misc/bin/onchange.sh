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

if [[ -z "$1" || -z "$2" ]]; then
  echo "Usage: $0 <directory> <script>" >&2
  exit
fi

if [[ ! -e "$1" ]]; then
  echo "The file or directory is not valid." >&2
  exit
fi

WATCHDIR="$1"
shift
SCRIPT="$*"
HASH=""

function updatehash() {
  HASH=`find $WATCHDIR -not -iname ".*" -exec stat -f "%N %z %m" -L {} \; | md5`
}

updatehash
while true; do
  OLDHASH=$HASH
  updatehash
  if [ "$HASH" != "$OLDHASH" ]; then
    echo `date -j "+%Y-%m-%d %r"` $SCRIPT
    $SCRIPT
    tput bel
    updatehash
  fi
  sleep 0.2
done
