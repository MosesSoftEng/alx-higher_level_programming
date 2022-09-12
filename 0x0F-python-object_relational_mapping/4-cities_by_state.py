#!/usr/bin/python3
"""Lists all cities of the database hbtn_0e_4_usa, sorted in ascending and
order by cities.id.

Usage: ./4-cities_by_state.py <mysql username> \
                              <mysql password> \
                              <database name>
"""
import MySQLdb
import sys

# Check if we are running this script at top level.
if __name__ == "__main__":
    # Create db connection.
    db = MySQLdb.connect(
      host='localhost', user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3],
      port=3306)

    c = db.cursor()
    c.execute("""
      SELECT
         cities.id,
         cities.name,
         states.name
      FROM
         cities
         INNER JOIN
            states
            ON cities.state_id = states.id
      ORDER BY
         cities.id ASC
      """)
    # Output
    for row in c.fetchall():
        print(row)
