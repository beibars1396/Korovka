const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
    name: "киска",
    aliases: [],
    description: "Отправляет рандомную картинку с котятами в чат",
    category: "Фан",
    usage: "cat",
    run: async (client, message, args) => {
        (async () => {
            try {
                const response = await fetch("https://nekos.life/api/v2/img/meow")
                const body = await response.json();
                const embed = new Discord.MessageEmbed()
                .setTitle("Рандомная Киса", message.guild.iconURL({ dynamic: true, format: 'png'}))
                .setImage(body.url)
                .setColor("RANDOM")
                .setFooter("Запрошено: " + `${message.author.username}` + " • (=＾´• ⋏ •`＾=)", message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
                .setTimestamp()
                .setURL(body.url);
                message.channel.send(embed);
            } catch(err) {
                message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
                }})
            }
        })();
    }
}