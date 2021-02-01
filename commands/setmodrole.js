const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'setmodrole',
  cooldown: 25,
  args: true,
  usage: '<@role> OR default',
  description: 'Allows you to set what role is allowed to change the bot\'s settings. Alternatively, you can put `default` at the end to reset it to requiring the person to have administrator permission.',
  execute(msg, args) {

if (args == 'default') {

  verifi.delete(`verifi_modrole_${msg.guild.id}`)
    msg.channel.send(`Users will need the **ADMINISTRATOR** permission to change bot settings from now on. (Reset to default.)`)

} else {

  if (!msg.mentions.roles.first()) return msg.channel.send("You need to mention the role that you'd like users to have to have before editing bot settings in the command usage.")

  var modRole = msg.mentions.roles.first().id

  verifi.set(`verifi_modrole_${msg.guild.id}`, modRole)
    msg.channel.send(`Users will need the ${msg.mentions.roles.first()} role to change bot settings from now on.`)



}







  }
}
