const Sequelize = require('sequelize')
const db = require("../config/config")

const Guru = db.define(
    'guru',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        guru: {
            type: Sequelize.STRING,
            required: true
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        } 
    },
    {freezeTableName: true}
)

module.exports = Guru