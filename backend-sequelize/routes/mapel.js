const express = require('express')
const router = express.Router()
const MapelController = require("../controllers/mapel")

router.post("/create", MapelController.create)
router.get("/show", MapelController.getAllData)
router.get("/show/:mapelId", MapelController.getDataById)
router.put("/edit/:mapelId", MapelController.updateDataById)
router.delete("/delete/:mapelId", MapelController.deleteDataById)

module.exports = router