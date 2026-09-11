const economy = require('../../economy')
const { MessageEmbed } = require("discord.js")

module.exports = {
    cooldown: '30m',
    category: 'Economy',
    callback: async ({ message }) => {
        const jobs = [
        'Programmer',
        'Night guard',
        'Streamer',
        'Youtuber',
        'Gangaster',
        'Discord Staff',
        'Company manager',
        'Singer',
        'Actor',
        'Enginner',
        'Discord bot maker',
        'Discord Moderator',
        'Discord Partner',
        'Hacker',
        'Manager',
        'Alien',
        'Gamer',
        'Videos Editor',
        'Programmer',
        'an async function in code',
        'Voice Actor',
        'Game maker',
        'Designer'
        ]
        
        const job = Math.floor((Math.random() * jobs.length));
        const coins = Math.floor(Math.random() * 100) + 1;
        const userId = message.author.id
        const newCoins = await economy.addCoins(userId, coins)
        const balance = await economy.getCoins(userId)
        const embed = new MessageEmbed();
        embed.setColor('#73CC58')
        embed.setTitle('Work')
        embed.setDescription(`---------------------\n\nYou Worked as ${jobs[job]} \nAnd you got ${coins}+ \n\n\n You now have ${balance} 💵`)

message.channel.send(embed)
    }
}