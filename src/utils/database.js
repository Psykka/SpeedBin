const db = require('better-sqlite3')('speedbin.db')

db.exec(`
CREATE TABLE IF NOT EXISTS document(
    id VARCHAR(10),
    data MEDIUMTEXT NOT null,
    PRIMARY KEY (id)
)
`)

module.exports = db