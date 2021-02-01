const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'setmessage',
  cooldown: 25,
  args: true,
  usage: '<message>',
  description: 'Allows you to set a custom message that new members will be sent during the verification process.',
  execute(msg, args) {

if (args.length > 180) return msg.channel.send("Please keep your custom message below 180 characters.")

if (args == "disable") {
  verifi.delete(`verifi_message_${msg.guild.id}`)
  return msg.channel.send("New members will no longer recieve a custom message during the verification process.")
}

verifi.set(`verifi_message_${msg.guild.id}`, args.join(" "))

msg.channel.send(`New members will now be sent the following message, in addition to the regular ones, when they begin verification: "${args.join(" ")}"`)



//verifi.set(`verifi_role_${msg.guild.id}`, role)
//msg.channel.send(`Set the verification role to ${msg.mentions.roles.first()}!`)

  }
}
