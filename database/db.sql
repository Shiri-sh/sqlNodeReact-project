
!---DROP DATABASE IF EXISTS social_Life;

!---CREATE DATABASE social_Life;

USE social_Life;

CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20),
  user_name VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(50)
);

CREATE TABLE Passwords (
 user_id INT,
 password VARCHAR(20) NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE Addresses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  street VARCHAR(50) NOT NULL,
  city VARCHAR(20) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

create table Posts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(20),
    body TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

create table Comments(
    id INT PRIMARY KEY AUTO_INCREMENT,  
    post_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,  
    body TEXT,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

create table Todos(
    id INT PRIMARY KEY AUTO_INCREMENT,  
    user_id INT NOT NULL,
    title VARCHAR(20),  
    completed VARCHAR(15),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO Users (name, user_name, email, phone)
VALUES 
('Sarah Levi', 'slevi', 'sarah@example.com', '052-0000000'),
('Leanne Graham', 'Bret', 'Sincere@april.biz', '1-770-736-8031 x56442'),
('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125'),
('Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', '1-463-123-4447'),
('Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', '493-170-9623 x156');

INSERT INTO todos ( user_id, title, completed)
VALUES ( 1, 'Buy fruits', 'false'),
 ( 1, 'Buy groceries', 'false'),
 ( 2, 'Buy clothes', 'true'),
 ( 3, 'Buy gloves', 'true'),
 ( 1, 'Buy coats', 'false'),
 ( 2, 'Buy milk', 'true'),
 ( 2, 'Buy shirt', 'true'),
 ( 3, 'Buy pants', 'false');

INSERT INTO posts (user_id, title, body)
VALUES (1, 'My first post', 'Just testing the API'),
 (2, 'sunday', 'Just testing the API'),
 (3, 'My first post', 'Just testing the API');

INSERT INTO comments (post_id, title, email, body)
VALUES (1, 'Someone', 'Nathan@yesenia.net', 'Nice post!'),
 (1, 'Someone2', 'Nathan@yesenia.net', 'Nice title!'),
 (2, 'Someone3', 'Shanna@melissa.tv', 'Nice words!'),
 (2, 'hii', 'Shanna@melissa.tv', 'good words!'),
 (3, 'hello', 'sarah@example.com', 'lovely words!');

select *
from users;

select *
from todos




