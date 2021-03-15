const Discord = require('discord.js');
const config = require("../../config");
const prefix = config.prefix;

module.exports = (client, member) => {
    try {
        const channel = member.guild.channels.cache.find(channel => channel.name.includes('hi-or-bye'));
        if (!channel) return;
        let embed = new Discord.MessageEmbed()
        .setDescription(`**${member.displayName}#${member.user.discriminator}** вступил в наше Душное Царство! Не забудь открыть форточку.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Число Пользователей: ${member.guild.memberCount} | ${prefix} помоги`);
        channel.send((embed = embed));
       } catch(err) {
        console.log(err);
    }
    member.send(
      `Добро Пожаловать в Душное Царство!`
    );
};