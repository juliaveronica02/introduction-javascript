const {Mapel} = require("../models")

module.exports = {
    create: (req, res) => {
        Mapel.create({
            nama: req.body.nama
        })
        .then((result)=> res.json(result))
        .catch((err)=> {
            throw err
        })
    },
    // get all data
    getAllData: (req, res) => {
        Mapel.findAll()
        .then((result)=> res.json(result))
        .catch((err)=> {
            throw err
        })
    },
    // get data byId
    getDataById: (req, res) => {
        Mapel.findOne({where: {id: req.params.mapelId}})
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    },
    // update data by id
    updateDataById: (req, res) => {
        Mapel.update({
            nama: req.body.nama
        }, {where: {id: req.params.mapelId}})
        .then((result)=> res.json(result))
        .catch((err)=> {
            throw err
        })
    },
    // delete data by id
    deleteDataById: (req, res) => {
        Mapel.destroy({where: {id: req.params.mapelId}})
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    }
}