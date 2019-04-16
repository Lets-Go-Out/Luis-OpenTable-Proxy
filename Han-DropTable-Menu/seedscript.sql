DROP DATABASE IF EXISTS droptable;

CREATE DATABASE droptable;

USE droptable;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  overallAvg DECIMAL(4, 3) DEFAULT NULL,
  foodAvg DECIMAL(4, 3) DEFAULT NULL,
  serviceAvg DECIMAL(4, 3) DEFAULT NULL,
  ambienceAvg DECIMAL(4, 3) DEFAULT NULL,
  valueAvg DECIMAL(4, 3) DEFAULT NULL,
  wyrAvg DECIMAL(5, 2) DEFAULT NULL,
  numReviews INT DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user INT NOT NULL,
  restaurant INT NOT NULL,
  overall TINYINT(1) NOT NULL,
  food TINYINT(1) NOT NULL,
  service TINYINT(1) NOT NULL,
  ambience TINYINT(1) NOT NULL,
  value TINYINT(1) NOT NULL,
  wyr BIT(1) NOT NULL,
  text VARCHAR(4000) NOT NULL,
  date TIMESTAMP NOT NULL,
  partySize TINYINT NOT NULL,
  PRIMARY KEY (id),
  INDEX (restaurant),
  INDEX (user),
  FOREIGN KEY (restaurant)
    REFERENCES restaurants(id),
  FOREIGN KEY (user)
    REFERENCES users(id)
);

LOAD DATA LOCAL INFILE 'C:\\Users\\Owner\\isaacProxyLayer\\Han-DropTable-Menu\\fakeRestaurants.csv'
INTO TABLE restaurants
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE 'C:\\Users\\Owner\\isaacProxyLayer\\Han-DropTable-Menu\\fakeusers.csv'
INTO TABLE users
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE 'C:\\Users\\Owner\\isaacProxyLayer\\Han-DropTable-Menu\\fakeReviews.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
