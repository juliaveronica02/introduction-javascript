const Sequelize = require("sequelize")

// nama database, username database, password database local.
const db = new Sequelize('batch-1', 'root', 'Hallo123$', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db