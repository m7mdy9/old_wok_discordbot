const Discord = require('discord.js')

module.exports ={
    name: '8ball',
    category: 'Fun',
    aliases: ["ask"],
    description: 'you ask yes or no Question and it gives you an Answer',
    run: async ({ client, message, args }) => {
      if(!args[2]) return message.reply("please type a full Question");
      let replies = ["Yes.","No.","I don't know🤔","Ask again later I'm Busy","Well yes but Actually No.","Well No but Actually Yes.","how should i know ?","Yes...,Sorry I mean No."];
      
      let result = Math.floor((Math.random() * replies.length));
      let question = args.slice(1).join(" ");
      
      const emb = new Discord.MessageEmbed()
    .setTitle("My Answer is")
    .setColor('RANDOM')
    .setDescription(`${replies[result]}`)
      
message.channel.send(message.author, emb);
    }
}