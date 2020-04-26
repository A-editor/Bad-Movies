-- SET UP SCHEMA HERE
CREATE DATABASE badmovies;

USE badmovies;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS favorites;


CREATE TABLE favorites
(
    id INT(20) NOT NULL,
    title varchar(200),
    vote_average INT(20),
    vote_count INT(20),
    poster_path varchar(200),
    backdrop_path varchar(200),
    overview varchar(1000),
    release_date varchar(200),
    PRIMARY KEY (id)
);

