-- CREATE DATABASE 
CREATE DATABASE client_db //check database /l
-- CREATE TABLE         // check table
create table client_tb(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    job VARCHAR(50),                   
    rate NUMERIC(10, 2) DEFAULT 100.00,
    isActive BOOLEAN DEFAULT TRUE
)