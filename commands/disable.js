const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;
const Canvas = require('canvas')

const client = handler.realclient;
const DBL = handler.realDBL
const dbl = handler.realdbl
module.exports = {
  name: 'disable',
  cooldown: 10,
  description: 'Allows you to disable verification.',
  execute(msg, args) {

	if (verifi.get(`verifi_disabled_${msg.guild.id}`) == null) {
verifi.set(`verifi_disabled_${msg.guild.id}`, true)
msg.channel.send("Verifi is now disabled.")

} else {
verifi.delete(`verifi_disabled_${msg.guild.id}`)
msg.channel.send("Verifi is no longer disabled.")
}



  }
}
