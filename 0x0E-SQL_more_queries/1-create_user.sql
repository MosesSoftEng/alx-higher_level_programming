-- Script that creates the MySQL server user user_0d_1. 

-- Create user and set password
CREATE USER
    IF NOT EXISTS 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';
-- Give user all privellages
GRANT ALL PRIVILEGES
    ON *.* TO 'user_0d_1'@'localhost';
-- For changes to take effect immediatelY
FLUSH PRIVILEGES;
