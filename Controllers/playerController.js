
const playerModel  = require("../Models/playerModel")

const createPlayer = (reg, res) =>{
    const {name, avt} = reg.body
    let user = new playerModel(name, avt)
    res.status(200).json({'id':user.id,'name':user.name, 'avt':user.avt})
}

module.exports = { createPlayer }