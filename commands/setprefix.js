const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'setprefix',
  cooldown: 10,
  args: true,
  usage: '<prefix>',
  description: 'Allows you to set a custom prefix for Verifi in your server.',
  execute(msg, args) {

    if (args == 'default') {
      verifi.delete(`verifi_customprefix_${msg.guild.id}`)
      return msg.channel.send("Verifi's prefix has been reset to `v!>`.")
    } else {
      if (args.length > 8) return msg.channel.send("Sorry, please keep your custom prefix below 8 characters long.")
      verifi.set(`verifi_customprefix_${msg.guild.id}`, args)
      return msg.channel.send(`Successfully set your server's prefix to "${args}"`)
    }

    //verifi.set(`verifi_customprefix_${msg.guild.id}`, 'default')

  }
}
