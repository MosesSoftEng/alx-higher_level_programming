#!/bin/bash
# Displays all HTTP methods the server will accept for a giben URL
curl -sILX OPTIONS eiwriter.com | grep -i 'Allow:' | cut -f2- -d' '
