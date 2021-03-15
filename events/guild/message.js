const Discord = require('discord.js');
const config = require("../../config");
const prefix = config.prefix;

const tabPodarok = ['подарочки', 'подарок', 'подарки', 'подарочек', 'подарОчки'];
const tabBot = ['Бот', 'бот', 'БОТ', 'бота', 'Бота', 'боту', 'Боту'];
const tabDed = ['Дед', 'дед', 'ДЕД', 'Деда', 'деда', 'деду', 'Деду'];
const tabDedAnsw = ['Дед Балтики напился, вот валяется на диване.', 'С Днем Рождения Дедушку Инсайде.', 'Как ги ***ДЕД***?', 'Дед обиделся, дед без подарОчков.', 'Деда с Гадзой развлекается в соседней комнате.' , '***ДЕД***, Вставай! Хватит спать.'];
const tabBotAnsw = ['Сам ты Бот!', 'Бот твой Батя!', 'Ты кого Ботом назвал?', 'Кто Бот? я Бот?'];
const tabKakGi = ['как ги дуб', 'КАК ГИ ДУБ', 'как ги Дуб', 'Как ги Дуб', 'Как ги дуб', 'Как ги ДУБ'];
const tabBaltika = ['Балтику', 'балтику', 'балтики', 'Балтики', 'Балтика', 'балтика'];
const tabXoy = ['Хоурини'];

module.exports = async (client, message) => {
    try {
        let content = message.content.split(' ');
        const queue = new Map();
        if (message.author.bot) return;
        if (!message.guild) return;
        if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`Привет!`, message.guild.iconURL())
                .setColor('RANDOM')
                .setDescription("Я была призвана тобой, теперь я здесь - " + client.user.username + "! Мой prefix \`" + prefix + "\` Чтобы увидеть мои команды, пожалуйста пропиши: \`" + prefix + " помоги\` или будь дальше задушенным")
                .setTimestamp()
                .setFooter("Вызвал:" + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
            message.channel.send(embed);
        }
        try{
            let Xoy = message.mentions.members.first().user.username === 'Sandro'
            if(Xoy){
                return message.reply(`отвали от Хаврини`);
            }
        }catch (err) {
        }   

        for(var x = 0; x < content.length; x++){
            if(tabPodarok.includes(content[x])){
                return message.reply(`нема подарочков.. плохо себя вел.`);
            }

            if(tabXoy.includes(content[x])){
                return message.reply(`отвали от Хаврини`);
            }

            if(tabDed.includes(content[x])){
                if (message.author.username === 'Инсайде') {
                    return;
                } else {
                    var row = Math.floor(Math.random() * tabDedAnsw.length);
                    return message.reply(tabDedAnsw[row]);
                }
            }

            if(tabBot.includes(content[x])){
                var row = Math.floor(Math.random() * tabBotAnsw.length);
                var rowResp = Math.floor(Math.random() * 3);
                if (rowResp == 1){
                    return message.reply(tabBotAnsw[row]);
                } else {
                    return;
                }
            }
            
            if(tabBaltika.includes(content[x])){
                if (message.author.username === 'Инсайде') {
                    return message.reply(`Какая Балтика? Иди от сюда, Алкаш!`);
                } else {
                    return;
                }
            }
        }

        if (tabKakGi.indexOf(message.content) > -1){
            return message.reply(`Отстань от Дуба, Дуб чилит.`);
        } 

        if (!message.content.startsWith(prefix)) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if (cmd.length === 0) return;
        let command = client.commands.get(cmd);
        if (!command) command = client.commands.get(client.aliases.get(cmd));
        if (!command) {
        message.channel.send({embed: {
            color: 16734039,
            description:
            "Этой команды не существует, проверь команды " + `${prefix}` + " помоги!"
        }});
        }

        if (command) {
            command.run(client, message, args);
        }
    } catch (err) {
        console.log(err);
        message.channel.send({embed: {
            color: 16734039,
            description: "Этой команды не существует, проверь команды " + `${prefix}` + " помоги!"
        }});
    }
}
