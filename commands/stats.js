const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;

const client = handler.realclient;

module.exports = {
  name: 'stats',
  cooldown: 25,
  usage: '',
  description: 'View some global statistics on the Verifi bot!',
  execute(msg, args) {





    const statEmbed = new Discord.MessageEmbed()
    .setColor('#87ceeb')
    .setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
    .setTitle("Quick Stats (Global)")
    .setDescription("Some basic statistics about Verifi's usage!")
    .addField("Total attempts verified with Verifi:", verifi.get(`verifi_totalver`))
    .addField("Total attempts blocked with Verifi:", verifi.get(`verifi_totalstop`))
  //  .addField("Number of servers Verifi is guarding:", client.guilds.size)
    .addField('Current version:', '2.0')
    .addField('Server Count:', client.guilds.cache.size)
    .setFooter("Thanks for using Verifi. Seriously. It means a lot to me.")
    msg.channel.send(statEmbed)





  }
}
