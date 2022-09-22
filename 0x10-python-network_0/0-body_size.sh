#!/bin/bash
# Displays the size of the body of the response in bytes

# Size of body is saved in Content-Length of HTTP server response header
#   message in bytes
#
# $1  first command argument
# curl -I   Show document info only
# curl -s   Silent mode, disable progression display
# grep 'Content-Length'   Get line with the string Content-Length
# |   pipe redirection, Redirect from one command to another.
# cut -d ' '    split string by whitespace delimiter
# ......-f 2     get second split

curl -Is "$1" | grep 'Content-Length' | cut -d ' ' -f 2
