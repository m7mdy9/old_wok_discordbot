const Discord = require("discord.js");
const mongo = require("./mongo");
const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION'],
})
const WOKcommands = require('wokcommands');
require('dotenv').config()

client.on('ready', async() => {
    console.log('pingo boy is ready');
    client.user.setActivity("Pinging people", {type: "STREAMING"});
    
    
  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })

  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

    const wok = new WOKcommands(client,{
        commandsDir: 'cmds',
        featureDir: 'features',
        showWarns: true,
        dbOptions
    })
    .setDefaultPrefix('$')
    .setMongoPath(process.env.DBURI)
    .setColor('#73CC58')
    .setBotOwner(["715466982123765822"])
    .setCategorySettings([
    {
        name: 'Configuration',
        emoji: '🚧',
        hidden: false,
    },
    {
        name: 'Owner',
        emoji: '👑',
        hidden: true,
    },
    {
        name: 'info',
        emoji: 'ℹ️',
    },
    {
        name: 'Fun',
        emoji: '😄',
    },
    {
        name: 'Economy',
        emoji: '💰',
    },
    {
        name: 'Moderation',
        emoji: '👮',
    },
  ])
});

client.on('message', message => {
    if (message.content.startsWith('+gstart') || message.content.startsWith('+gstart')) {
    if (message.channel.id === "745886526612963338") return message.channel.send('<@&762258329132990545>');
    if (message.channel.id === "795292142297546772") return message.channel.send('<@&795293068931891210>');
    console.log('bruh')
   }
});

client.login(process.env.TOKEN);