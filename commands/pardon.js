const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'pardon',
  cooldown: 5,
  args: true,
  usage: '<user ID>',
  description: 'Unredeem a gift code!',
  async execute(msg, args) {

    if (String(args).length > 20 || isNaN(String(args)) || String(args).length < 5) return msg.channel.send("That doesn't seem like a user ID to me! If you believe this is incorrect, contact Excuze in the support server. (https://discord.gg/cRvsBpA)")

    if (verifi.get(`${msg.guild.id}.bans`) == null) return msg.channel.send(`There's nobody on the blacklist!`)


      if (verifi.get(`${msg.guild.id}.bans`).indexOf(String(args)) == -1) return msg.channel.send("That user is not on the blacklist!")
      var index = verifi.get(`${msg.guild.id}.bans`).indexOf(String(args))

    if (verifi.get(`${msg.guild.id}.bans`).length == 1) {

      verifi.delete(`${msg.guild.id}.bans`)
      msg.channel.send("Removed user ID " + args + " from the blacklist.")

    } else {

    var updated = verifi.get(`${msg.guild.id}.bans`).splice(index, 1)

    verifi.set(`${msg.guild.id}.bans`, updated)
    msg.channel.send("Removed user ID " + args + " from the blacklist.")

}



  }}
