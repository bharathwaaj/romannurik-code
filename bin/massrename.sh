#!/bin/bash

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

if [[ -z "$1" || -z "$2" || -z "$3" ]]; then
  echo "Usage: $0 <path> <find-regex> <replace-regex>" >&2
  exit
fi

DIR="$1"
FIND="$2"
REPLACE="$3"

# We can't do renames on the entire file path, we can only do it on the
# file name, so we must walk the directory tree (directory renames are done
# post-order).

function do_rename() {
  cd "$1"
  # Rename directories
  ls -A | while read FILE; do
    if [ -d ${FILE} ]; then
      # Visit subdirectory
      do_rename ${FILE}
    fi
    RENAMED=$(echo ${FILE} | sed -E "s@${FIND}@${REPLACE}@g")
    if [[ ${FILE} == ${RENAMED} ]]; then
      continue
    fi
    # Post-order rename directory or file
    mv ${FILE} ${RENAMED}
  done
  cd ..
}

do_rename ${DIR}