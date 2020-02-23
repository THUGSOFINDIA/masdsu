const commando = require('discord.js-commando');
const Discord = require('discord.js');
class rolesCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'roles',
                group: 'funkcje',
                memberName: 'roles',
                description: 'Beke mam z ciebie'
            })
    }
    async run(message, args) {
        const roles = message.guild.roles.array();
        for (let i = 0; i < roles.length; i++) {
            message.author.send(roles[i].name + ' ' + roles[i].id);
        }
        message.delete();
    }
}
module.exports = rolesCommand;