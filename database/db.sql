create database socialLife;
show databases;
create table users(
    Id INT PRIMARY KEY,  
    FullName VARCHAR(20),
    UserName VARCHAR(20) NOT NULL,
    Email VARCHAR(100) NOT NULL,  
    Phone VARCHAR(15),
    MyPassword VARCHAR(20)
);
create table posts(
    Id INT PRIMARY KEY,  
    AgentName VARCHAR(20),
    CompanyName VARCHAR(100) NOT NULL,  
    NumberPhone VARCHAR(15)
);
create table comments(
    Id INT PRIMARY KEY,  
    AgentName VARCHAR(20),
    CompanyName VARCHAR(100) NOT NULL,  
    NumberPhone VARCHAR(15)
);
create table todos(
    Id INT PRIMARY KEY,  
    UserId INT,
    title VARCHAR(20),  
    Comleted VARCHAR(15)
)
