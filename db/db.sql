-- Active: 1716834324141@@127.0.0.1@5432@sghi_db_demo


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    hasSubscription BOOLEAN DEFAULT FALSE
);

-- insert 3 users
INSERT INTO users (name, hasSubscription) VALUES ('Jayr', TRUE);
INSERT INTO users (name, hasSubscription) VALUES ('Nori', FALSE);
INSERT INTO users (name, hasSubscription) VALUES ('Charlie', TRUE);



CREATE TABLE stories(
    story_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(64),
    description VARCHAR(128),
    isPublic BOOLEAN DEFAULT FALSE,
    diagram JSONB,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO stories (user_id, title, description, isPublic, diagram) 
VALUES (1, 'Jayr s story', 'This is the Jayr s story description .', TRUE, '{}');

INSERT INTO stories (user_id, title, description, isPublic, diagram) 
VALUES (2, 'Nori s story', 'This is the Nori s story description .', TRUE, '{}');

INSERT INTO stories (user_id, title, description, isPublic, diagram) 
VALUES (3, 'Charlie s story', 'This is the Charlie s story description .', TRUE, '{}');


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



INSERT INTO scenes (story_id, title, text_, image, video, audio, option_a, option_b) 
VALUES (1, 'Scene Title', 'This is a description of the scene.', 'image.jpg', 'video.mp4', 'audio.mp3', 2, 3);

SELECT * FROM users;
SELECT * FROM stories;
SELECT * FROM scenes;


