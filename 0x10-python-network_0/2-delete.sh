#!/bin/bash
# Script to send a DELETE request to a URL then display the http response message body.
curl -sX DELETE "$1"
