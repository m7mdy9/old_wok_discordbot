const quiz = require('../../quiz.json');
const Discord = require('discord.js')
const economy = require('../../economy');

module.exports = {
    category: 'Economy',
    cooldown: '30s',
    callback: async ({ message, args, client }) => {
        const userId = message.author.id
        const coins = 20;
        
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        }
        message.channel.send(item.question).then(() => {
                message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                    
                    economy.addCoins(userId, coins)
                    message.channel.send(`You got the correct answer added 20+ Coins in your balance`)

                    })
                    .catch (collected => {
                    message.channel.send('No correct answers');

                })
            })
        }
      }
