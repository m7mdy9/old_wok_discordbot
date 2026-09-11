module.exports = {
    ownerOnly: true,
    minArgs: 1,
    maxArgs: -1,
    syntaxError: 'wrong Usage \n usage: `{PREFIX}send <channelid> <msg>`',
    category: 'Owner',
    callback: ({ message, client, args, prefix }) =>{
        
        const channel = client.channels.cache.get(args[0])
        const mm = args.slice(1).join(" ")
        try {  
        channel.send(mm);
        }catch(e) {
            return message.reply('there is an error')
        }
    }
}