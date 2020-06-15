module.exports = {
  name: "queue",
  description: "get list of added songs",
  aliases:"qu",
  execute: (client, message, args) => {
    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("<a:Warn:657996732654813214>You Need To Be In My Voice Channel");
    }
const converter = require("number-to-words");
const Discord = require("discord.js");
let active = new Map();
    let queue = active.get(message.guild.id);

    if (!serverQueue)
      return message.channel.send(
        "<a:Warn:657996732654813214>There must be music playing to use that!"
      );

    let embed = new Discord.MessageEmbed()
    .setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < serverQueue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = converter.toWords(st[0]);
        let n2 = converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${serverQueue.songs[i].title}\n`;
    }
    embed.setDescription(`${message.guild.name} Queue\n\n ${text}`);
    embed.setColor('#461a9b')
    message.channel.send(embed);
  }
}