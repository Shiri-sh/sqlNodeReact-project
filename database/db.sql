CREATE DATABASE social_Life;
SHOW DATABASES;
CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20),
  user_name VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(50),
  website VARCHAR(20)
);

CREATE TABLE Passwords (
 user_id INT,
 password VARCHAR(20) NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE Addresses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  street VARCHAR(50),
  suite VARCHAR(30),
  city VARCHAR(20),
  zipcode VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE Geos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  address_id INT,
  lat VARCHAR(20),
  lng VARCHAR(20),
  FOREIGN KEY (address_id) REFERENCES addresses(id)
);

CREATE TABLE Companies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  name VARCHAR(20),
  catch_phrase VARCHAR(50),
  bs VARCHAR(50),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

create table Posts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(20),
    body TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

create table Comments(
    id INT PRIMARY KEY,  
    post_id INT,
    name VARCHAR(50),
    email VARCHAR(50),  
    body TEXT,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

create table Todos(
    id INT PRIMARY KEY,  
    user_id INT,
    title VARCHAR(20),  
    completed VARCHAR(15),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO Users (name, user_name, email, phone, website)
VALUES 
('Sarah Levi', 'slevi', 'sarah@example.com', '052-0000000', 'slevi.me'),
('Leanne Graham', 'Bret', 'Sincere@april.biz', '1-770-736-8031 x56442', 'hildegard.org'),
('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net'),
('Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', '1-463-123-4447', 'ramiro.info'),
('Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', '493-170-9623 x156', 'kale.biz');

INSERT INTO posts (user_id, title, body)
VALUES (1, 'My first post', 'Just testing the API');

INSERT INTO todos (id, user_id, title, completed)
VALUES (1, 1, 'Buy groceries', 'false');

INSERT INTO comments (id, post_id, name, email, body)
VALUES (1, 1, 'Someone', 'someone@example.com', 'Nice post!');
select * from Users;
select name 
from Users
where id=21;





