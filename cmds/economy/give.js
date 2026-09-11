const economy = require('../../economy')

module.exports = {
    cooldown: '30s',
    minArgs: 1,
    maxArgs: 2,
    category: 'Economy',
    expectedArgs: "<The target's @> <coin amount>",
    callback: async ({ message, args }) => {
    const { guild, member } = message

    const target = message.mentions.users.first()


    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of coins to give.')
      return
    }

    const coinsOwned = await economy.getCoins(member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`You do not have ${coinsToGive} coins!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(target.id, coinsToGive)

    message.reply(
      `You have given <@${target.id}> ${coinsToGive} coins! They now have ${newBalance} coins and you have ${remainingCoins} coins!`
    )
    },
}