const express = require("express")
const { commonErrors } = require("../errors/error")
const { getNftListController } = require("../controller/nft.controller")
const router = express.Router()

router.get("/", getNftListController)


router.use(commonErrors)

module.exports = router