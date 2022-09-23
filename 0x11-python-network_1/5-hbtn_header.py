#!/usr/bin/python3
"""Display value of X-Request-Id variable found in the header of a response."""
import sys
import requests


# Evaluate if running this script directly, will not work if imported.
if __name__ == "__main__":
    # Get first command argument
    url = sys.argv[1]

    response = requests.get(url)

    # Get specific response headers and ouput
    print(response.headers.get("X-Request-Id"))
