const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTI0MzUxMzczNjQ3Njc1Mzk1.Dvm4Og.xTngj6pHQDt2NEU1VTeQytUS_o0);
