module.exports = {
  name: "pause",
  description: "pause the song",
  aliases:"pu",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
     const Discord = require("discord.js");
           const sing = new Discord.MessageEmbed()
          .setDescription("You Need To Be In A Voice Channel :/")
          .setColor('#461a9b')
           return message.channel.send(sing)
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      const Discord = require("discord.js");
               const sing = new Discord.MessageEmbed()
          .setDescription("There Is Nothing Playing That I Could Pause")
          .setColor('#461a9b')
           return message.channel.send(sing)
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      const Discord = require("discord.js");
           const sing = new Discord.MessageEmbed()
          .setDescription(`<a:PR:718813594023755776>Paused **${serverQueue.songs[0].title}**`)
          .setColor('#461a9b')
           return message.channel.send(sing)
  }  
  }
}
