CREATE TABLE customers(
    id serial,
    name character varying(50)
);

CREATE TABLE actions(
    id serial,
    name character varying(50),
    type character varying(50),
    points int
);

CREATE TABLE transactions(
    customer character varying(50),
    action character varying(50)
);

INSERT INTO customers(name)
VALUES
('anderson'),
('xav'),
('jerome');

INSERT INTO actions(name, type, points)
VALUES
('reward', 'earn', 100),
('competition', 'spent', 70),
('reward', 'spent', 30),
('competition', 'earn', 10);

INSERT INTO transactions(customer, action)
VALUES
('anderson', 'reward'),
('xav', 'competition');