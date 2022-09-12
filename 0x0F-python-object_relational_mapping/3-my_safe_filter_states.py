#!/usr/bin/python3
"""Displays all values in the states table of the database hbtn_0e_0_usa
whose name matches that supplied as argument.

Usage: ./3-my_safe_filter_states.py <mysql username>
                                    <mysql password>
                                    <database name>
                                    <state name>
"""
import sys
import MySQLdb

if __name__ == "__main__":
    state = sys.argv[4]

    # Create db connection.
    db = MySQLdb.connect(
      host='localhost', user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3],
      port=3306)

    c = db.cursor()
    c.execute("SELECT * FROM states")

    for row in c.fetchall():
        if row[1] == state:
            print(row)
