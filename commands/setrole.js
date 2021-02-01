const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'setrole',
  cooldown: 15,
  args: true,
  usage: '<@role>',
  description: 'Allows you to set the role that users will be given after completing verification successfully.',
  execute(msg, args) {

if (args.length > 0) {
if (args == 'disable') {
verifi.delete(`verifi_role_${msg.guild.id}`)
msg.channel.send(`The verification will no longer give new members a role.`)

return;
}
}
if (!msg.mentions.roles.first()) return msg.channel.send("You need to mention the role you'd like users to be given after completing verification in the command usage!")

var role = msg.mentions.roles.first().id

verifi.set(`verifi_role_${msg.guild.id}`, role)
msg.channel.send(`Set the verification role to ${msg.mentions.roles.first()}!`)

  }
}
