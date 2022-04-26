const siswaController = require("../controller/siswa")
var express = require('express');
var router = express.Router();

router.post("/create", siswaController.create)
router.get("/show", siswaController.getAllData)
router.get("/show/:siswaId", siswaController.getDataById)
router.put("/edit/:siswaId", siswaController.updateDataById)
// jika editnya berhasil dia akan tampilkan '1', jika gagal '0' -> boolean.
router.delete("/delete/:siswaId", siswaController.deleteDataById)
module.exports = router