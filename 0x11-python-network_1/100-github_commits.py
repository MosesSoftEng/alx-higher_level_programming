#!/usr/bin/python3
"""
List 10 commits (from the most recent to oldest) of the repository “rails” by
    the user “rails”

Usage: ./10-my_github.py <username> <repository name>

Reference: https://docs.github.com/en/rest/commits/commits
"""
import sys
import requests

# Evaluate if running this script directly, will not work if imported.
if __name__ == "__main__":
    repo_owner = sys.argv[1]
    repo_name = sys.argv[2]
    url = "https://api.github.com/repos/{}/{}/commits".format(repo_owner,
                                                              repo_name)

    response = requests.get(url)

    commits = response.json()

    for i in range(10):
        print("{}: {}".format(
            commits[i].get("sha"),
            commits[i].get("commit").get("author").get("name")))
