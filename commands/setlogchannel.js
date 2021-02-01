const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'setlogchannel',
  cooldown: 25,
  args: true,
  usage: '<@channel> OR disable',
  description: 'Allows you to set the channel that bot actions will be logged in.',
  execute(msg, args) {



if (args == 'disable') {

  verifi.delete(`verifi_syschannel_${msg.guild.id}`)
  msg.channel.send(`The bot will no longer log its actions.`)

} else {

  if (!msg.mentions.channels.first()) return msg.channel.send("You need to mention the channel you'd like to log bot actions in in the command usage! Additionally, you can add `disable` in the command usage instead to disable logging bot actions at all.")

  var sysChannel = msg.mentions.channels.first().id

  verifi.set(`verifi_syschannel_${msg.guild.id}`, sysChannel)
  msg.channel.send(`Set the bot log channel to ${msg.mentions.channels.first()}!`)
  msg.channel.send(`If you would like to stop logging bot actions, run \`v!>setlogchannel disable\``)




}




  }
}
