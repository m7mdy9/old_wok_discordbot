const economy = require('../../economy')

module.exports = {
  aliases: ['balance'],
  maxArgs: 1,
  category: 'Economy',
  expectedArgs: "[Target user's @]",
  callback: async ({ message }) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const userId = target.id

    const coins = await economy.getCoins(userId)

    message.reply(`That user has ${coins} coins!`)
  },
}