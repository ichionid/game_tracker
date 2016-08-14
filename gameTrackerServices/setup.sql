drop table games;
CREATE TABLE games
(
gamesid INT NOT NULL AUTO_INCREMENT,
home_team_name varchar(255),
away_team_name varchar(255),
home_team_final_score varchar(255),
away_team_final_score varchar(255),
PRIMARY KEY (gamesid)
);
CREATE TABLE squads
(
id int NOT NULL,
players VARCHAR(255) NOT NULL,
entry_timestamp TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
home_team_score varchar(255) NOT NULL,
away_team_score varchar(255) NOT NULL,
gamesid int NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (gamesid) REFERENCES games(gamesid)
);
