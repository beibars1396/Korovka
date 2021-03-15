module.exports = {
    name: "кикни",
    aliases: ["h", "commands"],
    category: "Стандартные",
    description: "Кикает участника канала",
    usage: "кикни @ник",
    run: async (client, message, args) => {
        const member = message.mentions.members.first();

        if (!member) {
            return message.reply(`Кого ты хочешь кикнуть? Ты даже не указал ник.`);
        }

        if (!member.kickable) {
            return message.reply(`Я не могу кикнуть Кума!`);
        }

        return member
        .kick()
        .then(() => message.reply(`${member.user.tag} был исключен из нашего Царства.`))
        .catch(error => message.reply(`Извини, произошла ошибка.`));
    }       
};