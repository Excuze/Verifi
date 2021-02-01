const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'setremovalrole',
  cooldown: 15,
  args: true,
  usage: '<@role> OR disable',
  description: 'Allows you to set the role that will be removed from users after they complete verification successfully.',
  execute(msg, args) {

if (args == 'disable') {

  verifi.delete(`verifi_remrole_${msg.guild.id}`)
  msg.channel.send(`Users will no longer lose a role once they complete verification.`)


} else {

  if (!msg.mentions.roles.first()) return msg.channel.send("You need to mention the role you'd like to remove from users once they complete verification in the command usage! Additionally, you can add `disable` in the command usage instead to disable removing a role at all.")
  var remRole = msg.mentions.roles.first().id

  verifi.set(`verifi_remrole_${msg.guild.id}`, remRole)
  msg.channel.send(`Set the verification removal role to ${msg.mentions.roles.first()}!`)
  msg.channel.send(`If you would like to stop removing roles on verification completion, run \`v!>setremovalrole disable\``)




}




  }
}
