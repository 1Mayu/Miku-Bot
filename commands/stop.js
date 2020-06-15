const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the music",
  aliases:"sp",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      const Discord = require("discord.js");
      
                               const sing = new Discord.MessageEmbed()
          .setDescription("<a:Warn:657996732654813214>You Need To Be In Vice Channel")
          .setColor('#461a9b')
           return message.channel.send(sing)
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      const Discord = require("discord.js");
                               const sing = new Discord.MessageEmbed()
          .setDescription("<a:false:658743450107117568>There Is Nothing Playing That I Could Stop")
          .setColor('#461a9b')
           return message.channel.send(sing)
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

   const Discord = require("discord.js");
                             const sing = new Discord.MessageEmbed()
          .setDescription("**<a:Done1:688509182634360948>Music Has Been Stoped And The Queue Has Been Cleard**")
         .setColor('#461a9b')
            serverQueue.textChannel.send(sing)
  }
};
