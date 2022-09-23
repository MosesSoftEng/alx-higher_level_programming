#!/usr/bin/python3
"""
Send POST request with letter as parameter

Usage: ./8-json_api.py <letter>
"""
import sys
import requests


# Evaluate if running this script directly, will not work if imported.
if __name__ == "__main__":
    # Get first command argument
    url = "http://0.0.0.0:5000/search_user"
    letter = ""

    if len(sys.argv) > 1:
        letter = sys.argv[1]

    response = requests.post(url, data={'q': letter})
    try:
        data = response.json()

        if data == {}:
            print("No result")
        else:
            print("[{}] {}".format(data.get("id"), data.get("name")))
    except ValueError:
        print("Not a valid JSON")
