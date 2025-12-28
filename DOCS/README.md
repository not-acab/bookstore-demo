Objective: Create a relational database to be queried by SQL to better answer customer and store owner’s concerns. Such as, “Do you have this book title in stock?” or “Do you have any books by this author?” 

Considerations: Future-proofing, should be able to be seamlessly integrated into a webpage.

Front-end: React / JS
Back-end: SQLite / JS

Database Design:
Table books {
  id integer [primary key]
  title varchar
  author varchar
  isbn integer
  genre varchar
  price float


  indexes {
    title [name: 'title_index']
    author [name: 'author_index']
    isbn [name: 'isbn_index']
  }
}


Table locations {
  id integer [primary key]
  desc varchar
}


Table inventory {
  id integer [primary key]
  book_id integer [ref: > books.id]
  location_id integer [ref: > locations.id]
  count integer
  condition varchar
}
Or view as SVG: