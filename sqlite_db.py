import sqlite3


connection = sqlite3.connect("my_database.db")
cursor = connection.cursor()

statement = """
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    email TEXT UNIQUE
)
"""

cursor.execute(statement)
connection.commit()

users = [("Kimmo", 34, "Kimmo@mail.com"), ("Minna", 39, "Minna@mail.com")]
cursor.executemany(
    "INSERT OR IGNORE INTO users (name, age, email) VALUES (?, ?, ?)", users
)

connection.commit()