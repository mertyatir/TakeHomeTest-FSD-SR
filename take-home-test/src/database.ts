import sqlite3 from "sqlite3"

// Open the SQLite database connection
const openDatabase = () => {
  return new sqlite3.Database("./database.db") // Replace with the path to your SQLite database file
}

// Create the "emails" table
const createEmailTable = () => {
  const db = openDatabase()
  db.run(`
    CREATE TABLE IF NOT EXISTS emails (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender TEXT,
      subject TEXT,
      receivedAt DATETIME
    )
  `)
  db.close()
}

// Initialize the database with mock data
const initializeDatabase = () => {
  const db = openDatabase()
  db.serialize(() => {
    db.run(`
      INSERT INTO emails (sender, subject, receivedAt)
      VALUES ('John Doe', 'Hello', 'May 4')
    `)
    db.run(`
      INSERT INTO emails (sender, subject, receivedAt)
      VALUES ('Jane Smith', 'Greetings', 'April 29')
    `)
  })
  db.close()
}

// get all emails
const getEmails = (): Promise<Email[]> => {
  const db = openDatabase()
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM emails"

    db.all(query, (error, rows: Email[]) => {
      if (error) {
        reject(error)
      } else {
        resolve(rows)
      }
    })
  })
}

type Email = {
  id: number
  sender: string
  subject: string
  receivedAt: string
}

export type { Email }

export { createEmailTable, initializeDatabase, getEmails }
