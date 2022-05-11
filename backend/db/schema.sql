DROP DATABASE IF EXISTS data_dev;
CREATE DATABASE data_dev;
\c data_dev;
--/users/1/resources  all the resources associated with user 1
--/resources/1/users  all users associated withe resource 1

--users table
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    email TEXT,
    mentor_id INTEGER REFERENCES mentors(mentor_id)
);

--JOIN TABLE
--users_resources
-- 1 2 5
-- 2 2 7 
CREATE TABLE users_resources(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    resource_id INTEGER REFERENCES resources(resource_id) ON DELETE CASCADE
);

--resources
CREATE TABLE resources(
    resource_id SERIAL PRIMARY KEY,
    resource_name VARCHAR(100),
    description TEXT,
    resource_category VARCHAR(100),
    start_datetime TEXT NOT NULL,
    end_datetime TEXT NOT NULL,
    url TEXT NOT NULL,
    isVerified BOOLEAN DEFAULT FALSE
);
--mentors/1/users
--mentors
CREATE TABLE mentors(
    mentor_id SERIAL PRIMARY KEY,
    mentor_fname VARCHAR(50),
    mentor_lname VARCHAR(50),
    bio TEXT,
    email TEXT,
    speciality TEXT,
    
);

--reviews



