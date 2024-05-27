-- Active: 1716834324141@@127.0.0.1@5432@sghi_db_demo


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    hasSubscription BOOLEAN DEFAULT FALSE
);

CREATE TABLE stories(
    story_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(64),
    description VARCHAR(128),
    isPublic BOOLEAN DEFAULT FALSE,
    diagram JSONB,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE scenes(
    scene_id SERIAL PRIMARY KEY,
    story_id INT NOT NULL,
    title VARCHAR(64),
    text_  VARCHAR(255),
    image VARCHAR(255),
    video VARCHAR(255),
    audio VARCHAR(255),
    option_a INT NULL,
    option_b INT NULL,
    FOREIGN KEY (story_id) REFERENCES stories(story_id)
);

SELECT * FROM users;
SELECT * FROM stories;
SELECT * FROM scenes;


