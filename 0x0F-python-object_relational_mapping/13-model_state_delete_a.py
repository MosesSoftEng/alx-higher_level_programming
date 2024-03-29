#!/usr/bin/python3
""" Deletes all State objects whose name contains the letter a from the
database hbtn_0e_6_usa.

Usage: ./13-model_state_delete_a.py <mysql username>
                                    <mysql password>
                                    <database name>
"""
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import State

# Check if we are running this script at top level
if __name__ == "__main__":
    engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}"
                           .format(sys.argv[1], sys.argv[2], sys.argv[3]))

    Session = sessionmaker(bind=engine)
    session = Session()

    states = session.query(State).filter(State.name.contains('a'))
    for state in states:
        session.delete(state)
    session.commit()
