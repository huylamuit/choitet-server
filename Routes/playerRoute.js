const express = require("express")
const playerController = require("../Controllers/playerController")

const router = express.Router()

router.post("/CreatePlayer", playerController.createPlayer)

module.exports = router