BEGIN;
DROP TABLE IF EXISTS user, product, comments, CASCADE;

CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    email VARCHAR(500) UNIQUE,
    username VARCHAR(500) UNIQUE,
    password VARCHAR(100) NOT NULL,
    product_id INTEGER REFERENCES product(id) ON DELETE CASCADE,
    quantity INTEGER DEFAULT 1
);

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    description TEXT,
    img TEXT NOT NULL,
    comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    product_id INTEGER REFERENCES product(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES user(id) ON DELETE CASCADE
);

COMMIT;