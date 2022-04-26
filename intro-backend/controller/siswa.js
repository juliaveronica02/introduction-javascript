const SiswaModel = require("../models/siswa")

module.exports = {
    // function untuk create data siswa
    create: (req, res) => {
        SiswaModel.create({
            nama: req.body.nama
        })
        .then((result) => {
            // 200 success
            // 500/400 err
            return res.status(200).json(result)
        })
        .catch((err) => {
            return res.status(400).json('Failed adding data!', err)
        })
    },
    // get All data
    getAllData: (req, res) => {
        SiswaModel.findAll({})
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    },
    // get data by id
    getDataById: (req, res) => {
        // const {siswaId}
        SiswaModel.findOne({where: {id: req.params.siswaId}})
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    },
    // update data by id
    updateDataById: (req, res) => {
        SiswaModel.update({
            nama: req.body.nama 
        }, {where: {id: req.params.siswaId}})
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    },
    // delete data by id
    deleteDataById: (req, res) => {
        SiswaModel.destroy({where: {id: req.params.siswaId}})    
        .then((result) => res. status(200).json(result))
        .catch((err) => res.status(400).json(err))
    }
}