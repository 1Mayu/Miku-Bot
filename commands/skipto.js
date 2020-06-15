module.exports = {
  name: "skipto",
  description: "Skip to a specific song in the queue",
  async execute(client ,message, args) {
    const queue = message.client.queue.get(message.guild.id);
    const serverQueue = message.client.queue.get(message.guild.id);
    
    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").catch(console.error);
    if (!serverQueue)
      return message.reply("There is nothing playing that I could skip for you.").catch(console.error);
    
    if (!args || args < 1 || isNaN(args) || args >= serverQueue.songs.length) return message.reply('Please enter a valid song number');
    
    serverQueue.songs.splice(0, args - 1);
    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send().catch(console.error);
  }
}