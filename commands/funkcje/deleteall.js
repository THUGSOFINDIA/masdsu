const commando = require('discord.js-commando');
const Discord = require('discord.js');
class deleteallCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'deleteall',
                group: 'funkcje',
                memberName: 'deleteall',
                description: 'Wyświetla informacje o użytkowniku'
            })
    }
    async run(message, args) {
        

        let channels = await message.guild.channels.array();
        for (let i = 0; i < channels.length; i++) {
            if (!channels[i].deletable) {
                console.log("Can't delete this channel")
            } else {
                channels[i].delete()
            }
        }
        message.delete();

    }
}

module.exports = deleteallCommand;