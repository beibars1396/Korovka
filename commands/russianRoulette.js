const Discord = require("discord.js");
const config = require("../config");

module.exports = {
    name: "рулетка",
    aliases: ["users"],
    description: "Сыграть в Русскую Рулетку",
    category: "Фан",
    usage: "задушен",
    run: async (client, message, args) => {
        message.channel.send('Если ты настолько храб, давай сыграем в Русскую рулетку!');
        var row = Math.floor(Math.random() * 6);
        if(row === 1){
            message.reply(' ***БАХХ!*** <:gun:503659704950587412>\n\nЗадушен посмертно');
        } else {
            message.reply(' повезло!');
        }
    }
}