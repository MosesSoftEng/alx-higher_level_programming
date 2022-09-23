#!/usr/bin/python3
"""Send POST request with email as parameter"""
import sys
import requests


# Evaluate if running this script directly, will not work if imported.
if __name__ == "__main__":
    # Get first command argument
    url = sys.argv[1]
    values = {'email': sys.argv[2]}

    r = requests.post(url, data=values)
    print(r.text)
