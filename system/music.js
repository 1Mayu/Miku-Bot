//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const Discord = require("discord.js");
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      message.client.queue.delete(message.guild.id)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("THIS VIDEO CONTAINS COPYRIGHT CONTENT")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    
    
    
        const sing = new Discord.MessageEmbed()
      .setDescription(`<a:Fire:718810829197279323>${song.title}  **Added To Queue** \`(${queue.songs.length})\``)
    .setColor('#461a9b')
    queue.textChannel.send(sing)
    
    
  }
}
