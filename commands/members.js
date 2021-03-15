const Discord = require("discord.js");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
    name: "участники",
    aliases: ["users"],
    description: "Показывает количество участников этого сервера",
    category: "Полезные",
    usage: "участники",
    run: async (client, message, args) => {
        try {
            const embed = new Discord.MessageEmbed()
            // .setAuthor("Total members", message.guild.iconURL)
            .setColor("RANDOM")
            .addField("Число участников: ", message.guild.memberCount)
            .setTimestamp()
            .setFooter("Запрошено: " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
            message.channel.send(embed);
        } catch (err) {
            message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
        }
    }
}