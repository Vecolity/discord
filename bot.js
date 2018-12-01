const commando = require('discord.js-commando');
const client = new commando.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.regristry.registerGroup('random', 'Random');
bot.regristry.registerDefaults();
bot.regristry.registerCommandsIn(__dirname = "/commands")

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
