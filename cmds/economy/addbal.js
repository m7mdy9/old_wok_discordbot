const economy = require('../../economy')

module.exports = {
  ownerOnly: true,
  aliases: ['addbalance'],
  cooldown: '30s',
  minArgs: 1,
  maxArgs: 2,
  category: 'Economy',
  expectedArgs: "<The target's @> <coin amount>",
  callback: async ({ message, args }) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add coins to.')
      return
    }

    const coins = args[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid numnber of coins.')
      return
    }

    const userId = mention.id

    const newCoins = await economy.addCoins(userId, coins)

    message.reply(
      `You have given <@${userId}> ${coins} coins. They now have ${newCoins} coins!`
    )
  },
}