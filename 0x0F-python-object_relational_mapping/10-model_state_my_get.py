#!/usr/bin/python3
"""Lists the State object with the name passed as argument from the database
hbtn_0e_6_usa.

Usage: ./10-model_state_my_get.py <mysql username>
                                  <mysql password>
                                  <database name>
                                  <state name>
"""
from model_state import State
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys

# Check if we are running this script at top level.
if __name__ == "__main__":
    state_search = sys.argv[4]
    state_found = False

    engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}"
                           .format(sys.argv[1], sys.argv[2], sys.argv[3]),
                           pool_pre_ping=True)

    Session = sessionmaker(bind=engine)
    session = Session()

    for state in session.query(State):
        if state.name is state:
            state_found = True
            print("{}".format(state.id))
            break

    # if state_found is False:
    #     print("Not found")
