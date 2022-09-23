#!/usr/bin/python3
"""Send POST request with email as parameter"""
import sys
import urllib.request


# Evaluate if running this script directly, will not work if imported.
if __name__ == "__main__":
    # Get first command argument
    url = sys.argv[1]
    values = {'email': sys.argv[2]}

    # Prepare request
    data = urllib.parse.urlencode(values)
    data = data.encode('ascii') 
    request = urllib.request.Request(url, data)

    with urllib.request.urlopen(request) as response:
        # Get response body
        body = response.read()

        # Decode in utf-8 and print
        print(body.decode("utf-8"))
