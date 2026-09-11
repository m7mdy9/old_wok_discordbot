const economy = require('../../economy')

module.exports = {
  ownerOnly: true,
  aliases: ['removebal'],
  cooldown: '30s',
  minArgs: 1,
  maxArgs: 2,
  category: 'Economy',
  expectedArgs: "<The target's @> <coin amount>",
  callback: async ({ message, args }) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to remove coins from')
      return
    }
    const userId = mention.id

    const coins = args[1] * -1
    if (isNaN(coins)) {
      message.reply('Please provide a valid numnber of coins.')
      return
    }

        const newCoins = await economy.addCoins(userId, coins)

    message.reply(
      `You have removed <@${userId}> ${coins} coins. They now have ${newCoins} coins!`
    )
  },
}