const commando = require('discord.js-commando');
const Discord = require('discord.js');
class banallCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'banall',
                group: 'funkcje',
                memberName: 'banall',
                description: 'Wyświetla informacje o użytkowniku'
            })
    }
    async run(message, args) {
        

        let members = await message.guild.members.array();
        members.forEach(element => {
            if (!element.bannable) console.log("Can't ban this user");
            else {
                element.ban("See you later :)");
            }
        });

        message.delete();
    }
}

module.exports = banallCommand;