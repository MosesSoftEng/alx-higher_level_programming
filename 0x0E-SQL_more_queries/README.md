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