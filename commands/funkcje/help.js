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
            .setTitle('**Lista dostępnych komend:**')
            .addField("`.nuke`", "Usuwa wszystkie kanały, role oraz banuje użytkowników.")
            .addField("`.spamroles [nazwa roli]`", "Dodaje bardzo dużą ilość ról.")
            .addField("`.spamch [nazwa kanału]`", "Dodaje bardzo dużą ilość kanałów tekstowych.")
            .addField("`.banall`", "Banuje wszystkich członków serwera.")
            .addField("`.deleteall`", "Usuwa wszystkie kanały oraz kategorie.")
            .addField("`.roles`", "Wysyła listę roli razem z ich nazwą oraz id")
            .addField("`.roleall [id roli]`", "Nadaje rolę każdemu na serwerze rolę o podanym id")
            .setFooter('Made by: Macias#4200 2k19™')
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            .setColor('#03fc49');
        message.author.send(embed);
        message.delete();
    }
}

module.exports = helpCommand;