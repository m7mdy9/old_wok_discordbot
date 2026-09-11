module.exports = {
  cooldown: '30s',
  category: 'info',
  description: 'Shows the bot ping',
  callback: ({ message, client }) => {
    message.reply(`🏓pong: ${client.ws.ping}ms`)
  }
}