const Discord = require("discord.js");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
    name: "монетка",
    aliases: [],
    description: "Кинуть монетку",
    category: "Фан",
    usage: "flipcoin",
    run: async (client, message, args) => {
        try {
            const answers = ["Орёл", "Решка"]
            const answer = answers[Math.floor(Math.random()*answers.length)];
            const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`Результат: ${answer}`)
                .setFooter("Запрошено: " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
                .setTimestamp()
            message.channel.send(embed);
        } catch (err) {
            message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
        }
    }
}