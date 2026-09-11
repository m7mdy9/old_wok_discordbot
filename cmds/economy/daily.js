const economy = require('../../economy')
const { MessageEmbed } = require('discord.js');

module.exports = {
    cooldown: '1d',
    category: 'Economy',
    callback: async ({ message }) => {
        
        const coins = Math.floor(Math.random() * 500) + 1; 
                
        const userId = message.author.id
        
        const newCoins = await economy.addCoins(userId, coins)
        const coins2 = await economy.getCoins(userId)
        const embed = new MessageEmbed();
        embed.setColor('RANDOM')
        embed.setTitle('Daily')
        embed.setDescription(`You got ${coins}+ \n\n You now have ${coins2}`)
        
        
        
        message.channel.send(embed)
    }
}