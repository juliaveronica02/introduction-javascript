const Sequelize = require('sequelize')
const db = require("../config/config")

const Siswa = db.define(
    "siswa",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: Sequelize.STRING,
            allowNull: false, 
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

module.exports = Siswa