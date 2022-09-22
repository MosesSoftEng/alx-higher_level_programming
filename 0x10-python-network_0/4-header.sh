#!/bin/bash
# Sends a GET request with a header variable "X-School-User-Id", with the value 98
curl -s -H "X-School-User-Id: 98" "$1"
