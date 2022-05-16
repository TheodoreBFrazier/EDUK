DROP TABLE IF EXISTS mentors;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS resources;
DROP TABLE IF EXISTS user_resources;

CREATE TABLE mentors(
    mentor_id SERIAL PRIMARY KEY,
    mentor_fname VARCHAR(50),
    mentor_lname VARCHAR(50),
    bio TEXT,
    email TEXT,
    speciality TEXT
);

--users table

CREATE TABLE users(
    uid SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    email TEXT,
    mentor_id INTEGER REFERENCES mentors(mentor_id)
);

--resources

CREATE TABLE resources(
    resource_id SERIAL PRIMARY KEY,
    resource_name VARCHAR(100),
    description TEXT,
    resource_category VARCHAR(100),
    start_datetime TEXT,
    end_datetime TEXT,
    url TEXT NOT NULL,
    isVerified BOOLEAN DEFAULT FALSE
);

CREATE TABLE users_resources(
    uid INTEGER REFERENCES users(uid) ON DELETE CASCADE,
    resource_id INTEGER REFERENCES resources(resource_id) ON DELETE CASCADE
);



