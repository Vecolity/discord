const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('dnd');
    client.user.setActivity('holy ba moly is this in devolopment')
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === prefix + 'friendsondiscord') {
    	message.reply('tuan, tito, mary, peter, ben, jose, maxwell, dylan, mohammed and evan');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
