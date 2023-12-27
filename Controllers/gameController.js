
const gameModel  = require("../Models/gameModel")

function generateRandomId() { 
    const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const randomString = randomNumber.toString();
    return randomString
    }
const createGame = (reg, res) =>{
    const id = generateRandomId()
    let game = new gameModel(id)
    res.status(200).json({'id':game.id, 'size':game.maxPlayer})
}

module.exports = { createGame }