
const sqlite3 = require('sqlite3').verbose();

// Open a database connection
const db = new sqlite3.Database('mydb.sqlite');

// Create a table
db.run('CREATE TABLE users (id INT, name TEXT)');

// Close the database connection
db.close();