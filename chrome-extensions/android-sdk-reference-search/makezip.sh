#!/bin/sh
rm -rf extension.zip
cd extension/
zip -qr ../extension.zip .
cd ..
zipinfo -l extension.zip
