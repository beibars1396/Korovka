const Discord = module.require("discord.js");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
    name: "dice",
    aliases: [],
    description: "Кинуть кубик",
    category: "Фан",
    usage: "dice",
    run: async (client, message, args) => {
        try {
            const answers = ["1", "2", "3", "4", "5", "6"]
            const dice =  answers[Math.floor(Math.random()*answers.length)];
            const embed = new Discord.MessageEmbed()
                .setDescription(":game_die: The dice rolled " + `${dice}` + "! :game_die:")
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter("Запрошено: " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
            message.channel.send(esmbed);
        } catch (err) {
            message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
        }
    }
}