import Database from 'better-sqlite3'

const db = new Database('./src/bookstore.db');

//SQL statement to create all tables & indexes
const sql = `
    CREATE TABLE books (
        id INT PRIMARY KEY,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        isbn INT NOT NULL,
        genre TEXT,
        price REAL
    );

    CREATE INDEX title_index
    ON books(title);

    CREATE INDEX author_index
    ON books(author);

    CREATE INDEX isbn_index
    ON books(isbn);

    CREATE TABLE locations (
        id INT PRIMARY KEY,
        desc TEXT NOT NULL
    );

    CREATE TABLE inventory (
        id INT PRIMARY KEY,
        book_id INT NOT NULL,
        location_id INT NOT NULL,
        count INT NOT NULL,
        condition TEXT,
        FOREIGN KEY (book_id) REFERENCES books(id),
        FOREIGN KEY (location_id) REFERENCES locations(id)
    );
`;

db.exec(sql);