const player = {
    id:String,
    name: String,
    avt: String
}
function generateRandomId() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter1 = letters[Math.floor(Math.random() * letters.length)];
    const randomLetter2 = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Số ngẫu nhiên từ 1000 đến 9999
  
    const randomId = `${randomLetter1}${randomLetter2}${randomNumber}`;
    return randomId;
}
  
function Player(name, avt) {
    this.id = generateRandomId()
    this.name = name;
    this.avt = avt;
}
  
  module.exports = Player;