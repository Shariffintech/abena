CREATE TABLE IF NOT EXISTS blogger
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS blogpost
(
    id SERIAL PRIMARY KEY NOT NULL,
    blogger_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    body VARCHAR(255) NOT NULL,


    CONSTRAINT fk_blogpost_blogger_id FOREIGN KEY (blogger_id) REFERENCES blogpost(id)
);