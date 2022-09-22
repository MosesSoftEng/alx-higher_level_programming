#!/bin/bash
# Displays all HTTP methods the server will accept for a giben URL
curl -sILX OPTIONS "$1" | grep -i 'Allow:' | cut -f2- -d' '
