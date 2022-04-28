const express = require('express')
const router = express.Router()
const MapelController = require("../controllers/mapel")

router.post("/create", MapelController.create)
router.get("/show", MapelController.getAllData)
router.put("/edit/:mapelId", MapelController.updateDataById)

module.exports = router