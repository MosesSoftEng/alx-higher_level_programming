#!/bin/bash
# GET request with a header variable "X-School-User-Id", with the value 98
curl -sLH "X-School-User-Id: 98" "$1"
