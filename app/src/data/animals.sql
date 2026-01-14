CREATE TABLE animals (
    id INTEGER PRIMARY KEY,
    animals_name TEXT NOT NULL,
    age INT NOT NULL,
    breed TEXT NOT NULL,
    type_id INTEGER,
    city_id INTEGER,
    description TEXT,
    created_at DATETIME,

    FOREIGN KEY (type_id) REFERENCES types(id),
    FOREIGN KEY (city_id) REFERENCES city(id)
);

CREATE TABLE types (
    id INTEGER PRIMARY KEY,
    types TEXT NOT NULL
);

CREATE TABLE volunteers (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    birth_date DATE,
    created_at DATETIME,
    disponibilites ENUM ('morning', 'afternoon', 'evening'),
    city_id BIGINT,

    FOREIGN KEY (city_id) REFERENCES city(id)


);