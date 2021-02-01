const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'blacklist',
  cooldown: 5,
  args: true,
  usage: '<user ID>',
  description: 'Unredeem a gift code!',
  async execute(msg, args) {

    if (verifi.get(`${msg.guild.id}.bans`) == null) {

    } else {
    if (verifi.get(`premium_${msg.guild.id}`) == '1') {
      if (verifi.get(`${msg.guild.id}.bans`).length > 749) return msg.channel.send("You can only have a maximum of 750 users on your blacklist! (This limit was extended to higher because of the gift code currently in effect on your server!)")
    } else {
      if (verifi.get(`${msg.guild.id}.bans`).length > 249) return msg.channel.send("You can only have a maximum of 250 users on your blacklist! If you need more, you can contact Excuze in the official Verifi server (https://discord.gg/cRvsBpA) and if you meet the requirements you'll be given a code to unlock more slots. It's limited to prevent people from spamming Verifi's storage.")
    }
  }

    if (String(args).length > 20 || isNaN(String(args)) || String(args).length < 5) return msg.channel.send("That doesn't seem like a user ID to me! If you believe this is incorrect, contact Excuze in the support server. (https://discord.gg/cRvsBpA)")

    if (verifi.get(`${msg.guild.id}.bans`) == null) {
      verifi.push(`${msg.guild.id}.bans`, String(args))
      return msg.channel.send(`Added user ID ${args} to the blacklist! :warning: **VERY IMPORTANT!** If you added Verifi to your server before July 6th, 2020, make sure Verifi is allowed to ban members. If they don't have this permission, the blacklist will NOT work. Original invite links didn't automatically give Verifi this permission. :warning:`)
    } else {
      if (verifi.get(`${msg.guild.id}.bans`).indexOf(String(args)) == -1) {
      verifi.push(`${msg.guild.id}.bans`, String(args))
      return msg.channel.send(`Added user ID ${args} to the blacklist! :warning: **VERY IMPORTANT!** If you added Verifi to your server before July 6th, 2020, make sure Verifi is allowed to ban members. If they don't have this permission, the blacklist will NOT work. Original invite links didn't automatically give Verifi this permission. :warning:`)
    } else {
      return msg.channel.send("That user is already blacklisted! Perhaps you're looking for `v!>pardon` to take them off the blacklist?")
    }
    }

  }}
