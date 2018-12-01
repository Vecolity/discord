const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'r!'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ game: { name: 'in like crazy devolopment', type: 'STREAMING' }, status: 'do not disturb' });
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'pi') {
    	message.reply('pong');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
