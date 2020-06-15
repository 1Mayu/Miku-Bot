module.exports = {
  name: "skip",
  aliases:"sk",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;
const Discord = require("discord.js");
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
     
                         const sing = new Discord.MessageEmbed()
          .setDescription("<a:Warn:657996732654813214>You Need To Be In A Voice Channel")
          .setColor('#461a9b')
           return message.channel.send(sing)
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      
                   const sing = new Discord.MessageEmbed()
          .setDescription("<a:false:658743450107117568>There Is Nothing Playing That I Could Skip")
          .setColor('#461a9b')
           return message.channel.send(sing)
    }

    serverQueue.connection.dispatcher.end();
   
             const sing = new Discord.MessageEmbed()
          .setDescription(`<a:Right:657996403490160650>Skipped **${serverQueue.songs[0].title}**`)
          .setColor('#461a9b')
           return message.channel.send(sing)
  }
};
