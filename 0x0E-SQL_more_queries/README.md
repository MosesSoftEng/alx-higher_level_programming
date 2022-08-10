# 0x0E. SQL - More queries 

# Tasks
## 0. My privileges!
Script that lists all privileges of the MySQL users user_0d_1 and user_0d_2 on your server (in localhost).

[0-privileges.sql](0-privileges.sql)



## 1. Root user
Script that creates the MySQL server user user_0d_1.

chmod +x 1-create_user.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/1-create_user.sql

[1-create_user.sql](1-create_user.sql)

## 2. Read user 
Script that creates the database hbtn_0d_2 and the user user_0d_2.

chmod +x 2-create_read_user.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/2-create_read_user.sql

[2-create_read_user.sql](2-create_read_user.sql)

## 3. Always a name
Script that creates the table force_name on your MySQL server.

chmod +x 3-force_name.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/3-force_name.sql

[3-force_name.sql](3-force_name.sql)

## 4. ID can't be null 
Script that creates the table id_not_null on your MySQL server.

chmod +x 4-never_empty.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/4-never_empty.sql

[4-never_empty.sql](4-never_empty.sql)

## 5. Unique ID 

chmod +x 5-unique_id.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/5-unique_id.sql

[5-unique_id.sql](5-unique_id.sql)

## 6. States table
Script that creates the database hbtn_0d_usa and the table states (in the database hbtn_0d_usa) on your MySQL server.

chmod +x 6-states.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/6-states.sql

[6-states.sql](6-states.sql)

## 7. Cities table
Script that creates the database hbtn_0d_usa and the table cities (in the database hbtn_0d_usa) on your MySQL server.

chmod +x 7-cities.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/7-cities.sql

[7-cities.sql](7-cities.sql)


## 8. Cities of California
Script that lists all the cities of California that can be found in the database hbtn_0d_usa.

chmod +x 8-cities_of_california_subquery.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/8-cities_of_california_subquery.sql

[8-cities_of_california_subquery.sql](8-cities_of_california_subquery.sql)

## 9. Cities by States 
Script that lists all cities contained in the database hbtn_0d_usa.

chmod +x 9-cities_by_state_join.sql; 
sudo mysql -u root < /home/moses_soft_eng/alx-higher_level_programming/0x0E-SQL_more_queries/9-cities_by_state_join.sql

[9-cities_by_state_join.sql](9-cities_by_state_join.sql)

