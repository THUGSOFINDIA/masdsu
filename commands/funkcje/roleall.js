const commando = require('discord.js-commando');
const Discord = require('discord.js');
class roleallCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'roleall',
                group: 'funkcje',
                memberName: 'roleall',
                description: 'Beke mam z ciebie'
            })
    }
    async run(message, args) {
        const members = message.guild.members.array();
        let role = message.guild.roles.find((role) => role.id == args);
        if (!role.editable) return message.author.send("Nie mam odpowiednich permisji aby nadać tę rolę, spróbuj podnieść rangę bota w hierarchii jak najwyżej jest to możliwe.")
        else {
            members.forEach(element => {
                element.addRole(args);
            });
        }
        message.delete();
    }
}
module.exports = roleallCommand;