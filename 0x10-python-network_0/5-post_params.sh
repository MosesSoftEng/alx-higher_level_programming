#!/bin/bash
# Send POST request with given variables to a given URL.
curl -s -X POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
