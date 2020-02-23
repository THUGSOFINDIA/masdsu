const commando = require('discord.js-commando');
const Discord = require('discord.js');


class ppCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'spamch',
                group: 'funkcje',
                memberName: 'spamch',
                description: 'Wyświetla informacje o użytkowniku'
            })
    }
    async run(message, args) {
        


        if(!args) return message.author.send("Musisz podać nazwę kanału.") 
        for (let i = 0; i < 105; i++) {
            message.guild.createChannel(args, {
                type: 'text',
                topic: 'JF'
            });
        }
        message.delete();

    }
}

module.exports = ppCommand;