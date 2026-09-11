const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'clear',
    aliases: ['purge'],
    description: 'Clear cmd',
    category: 'Moderation',
    run: async ({ client, message, args }) => {
        await message.delete()
        
        if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.channel.send(
                `You do not have correct permissions to do this action, ${message.author.username}`
            );
        if (!args[0]) {
            return message.channel.send(`Please enter a amount 1 to 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`successfully deleted ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#32CD32')
    }
}