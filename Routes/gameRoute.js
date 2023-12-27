const express = require("express")
const gameController = require("../Controllers/gameController")

const router = express.Router()

router.post("/CreateGame", gameController.createGame)

module.exports = router