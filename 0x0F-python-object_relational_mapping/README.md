# 0x0F. Python - Object-relational mapping

# Tasks
## 0. Get all states
Write a script that lists all states from the database hbtn_0e_0_usa.

cat tests/0-select_states.sql | sudo mysql -uroot -p

pycodestyle 0-select_states.py; chmod +x 0-select_states.py; sudo ./0-select_states.py root root hbtn_0e_0_usa

## 1. Filter states
Write a script that lists all states with a name starting with N (upper N) from the database hbtn_0e_0_usa.

pycodestyle 1-filter_states.py; chmod +x 1-filter_states.py; sudo ./1-filter_states.py root root hbtn_0e_0_usa

## 2. Filter states by user input
Write a script that takes in an argument and displays all values in the states table of hbtn_0e_0_usa where name matches the argument.



