const userInfo = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.user.nameUser} I am at the ${userInfo.user.campus} ${userInfo.user.city} campus`,
    e : "**",
    T : "U"
}))

