#!/usr/bin/python3
"""Display value of X-Request-Id variable found in the header of a response."""
import sys
import urllib.request
import urllib.error


# Evaluate if running this script directly, will not work if imported.
if __name__ == "__main__":
    # Get first command argument
    url = sys.argv[1]

    try:
        with urllib.request.urlopen(url) as response:
            # Get response headers
            body = response.read()

            print(body.decode('utf-8'))
    except urllib.error.HTTPError as e:
        print("Error code: {}".format(e.code))
