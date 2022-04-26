var express = require('express');
const multer = require("multer")
var router = express.Router();
const guruController = require("../controller/guru")

const storage = multer.diskStorage({ // storage dari user ketika upload image
    destination: (req, res, cb) => {
     cb(null, 'public/images/guru'); // simpan foto ke dalam public - images - guru
    },
    filename: (req, file, cb) => {
     cb(null, `${Date.now()}-${file.originalname}`); // nama asli ketika upload 
     // cb -> callback
    },
   });

   const upload = multer({
    storage: storage,
   });

router.post("/create", upload.single('image'), guruController.create) // karena kita cuman upload 1 foto.
router.get("/show", guruController.getAllData)
router.get("/show/:guruId", guruController.getDataById)

module.exports = router