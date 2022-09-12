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

pycodestyle 2-my_filter_states.py; chmod +x 2-my_filter_states.py; sudo ./2-my_filter_states.py root root hbtn_0e_0_usa 'Arizona'

## 3. SQL Injection
Write a script that takes in arguments and displays all values in the states table of hbtn_0e_0_usa where name matches the argument. But this time, write one that is safe from MySQL injections!

pycodestyle 3-my_safe_filter_states.py; chmod +x 3-my_safe_filter_states.py; sudo ./3-my_safe_filter_states.py root root hbtn_0e_0_usa 'Arizona'

## 4. Cities by states
Write a script that lists all cities from the database hbtn_0e_4_usa.

cat tests/4-cities_by_state.sql | sudo mysql -uroot -p

pycodestyle 4-cities_by_state.py; chmod +x 4-cities_by_state.py; sudo ./4-cities_by_state.py root root hbtn_0e_4_usa

## 5. All cities by state
Write a script that takes in the name of a state as an argument and lists all cities of that state, using the database hbtn_0e_4_usa. Results must be sorted in ascending order by cities.id

pycodestyle 5-filter_cities.py; chmod +x 5-filter_cities.py; sudo ./5-filter_cities.py root root hbtn_0e_4_usa Texas

## 6. First state model
Write a python file that contains the class definition of a State and an instance Base = declarative_base():

cat tests/6-model_state.sql | sudo mysql -uroot -p
sudo ./6-model_state.py root root hbtn_0e_6_usa

pycodestyle model_state.py; chmod +x model_state.py; sudo ./model_state.py root root hbtn_0e_6_usa

## 7. All states via SQLAlchemy
Write a script that lists all State objects from the database hbtn_0e_6_usa using SQLAlchemy.

cat tests/7-model_state_fetch_all.sql | sudo mysql -uroot -p hbtn_0e_6_usa

pycodestyle 7-model_state_fetch_all.py; chmod +x 7-model_state_fetch_all.py; sudo ./7-model_state_fetch_all.py root root hbtn_0e_0_usa 'Arizona'

## 8. First state
Write a script that prints the first State object from the database hbtn_0e_6_usa. 

pycodestyle 8-model_state_fetch_first.py; chmod +x 8-model_state_fetch_first.py; sudo ./8-model_state_fetch_first.py root root hbtn_0e_0_usa 'Arizona'

## 9. Contains `a`
Write a script that lists all State objects that contain the letter a from the database hbtn_0e_6_usa.

pycodestyle 9-model_state_filter_a.py; chmod +x 9-model_state_filter_a.py; sudo ./9-model_state_filter_a.py root root hbtn_0e_0_usa 'Arizona'

## 10. Get a state
Write a script that prints the State object with the name passed as argument from the database hbtn_0e_6_usa.

pycodestyle 10-model_state_my_get.py; chmod +x 10-model_state_my_get.py; sudo ./10-model_state_my_get.py root root hbtn_0e_0_usa 'Arizona'


## 11. Add a new state
Write a script that adds the State object “Louisiana” to the database hbtn_0e_6_usa

pycodestyle 11-model_state_insert.py; chmod +x 11-model_state_insert.py; sudo ./11-model_state_insert.py root root hbtn_0e_0_usa 'Arizona'













