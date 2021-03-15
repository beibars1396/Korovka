const Discord = require('discord.js');
const config = require("./config");
const fs = require("fs");

const client = new Discord.Client();
const token = config.token;

if(token){
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.queue = new Map(); 

    ['command', 'event'].forEach(handler => {
        require(`./handlers/${handler}`)(client);
    });

    client.login(token)
} else {
    console.log("Нету Бот Nокена!");
}

process.on("unhandledRejection", (err) => {
    console.error(err);
});