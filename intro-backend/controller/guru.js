const GuruModel = require("../models/guru")

module.exports = {
    // function create data guru.
    create: (req, res) => {
        GuruModel.create({
            guru: req.body.guru,
            image: req.file && req.file.path,
        })
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    },
    // get All data
    getAllData: (req, res) => {
        GuruModel.findAll({})
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    },
    // get data by id
    getDataById: (req, res) => {
        GuruModel.findOne({where: {id: req.params.guruId}})
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    }
}