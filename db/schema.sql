DROP DATABASE IF EXISTS animals_db;
CREATE DATABASE animals_db;
USE animals_db;

CREATE TABLE animals (
  id INT NOT NULL AUTO_INCREMENT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  PRIMARY KEY  (id)
  );