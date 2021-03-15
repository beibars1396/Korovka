const Discord = require("discord.js");
const config = require("../config");

module.exports = {
    name: "задушен",
    aliases: ["users"],
    description: "Показывает задушенного",
    category: "Фан",
    usage: "задушен",
    run: async (client, message, args) => {
        try {
            let mentioned = await message.mentions.members.first();
            // let dushka = await message.mentions.members.last();
            // let author = await message.mentions.members.second();
            const embed = new Discord.MessageEmbed()
            .setAuthor(mentioned.displayName + " БЫЛ ЗАДУШЕН!", message.guild.iconURL)
            .setColor("RED")
            // .addField(dushka.displayName + " задушил перед: ", message.guild.memberCount + " членами Гильдии")
            .setTimestamp()
            .setFooter("Кто нибудь откройте форточку! 🪟")
            message.channel.send(embed);
        } catch (err) {
            message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
        }
    }
}