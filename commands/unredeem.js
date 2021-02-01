const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'unredeem',
  cooldown: 12,
  description: 'Unredeem a gift code!',
  async execute(msg, args) {

    if (verifi.get(`premium_${msg.guild.id}`) !== '1') return msg.channel.send(":x: Your server doesn't have a gift code currently active!")

    msg.channel.send(":cyclone: Contacting the magic interdimensional code pool...").then(msg => {

    verifi.delete(`used_${args}`)

    verifi.add(`premiumcount`, -1)

    verifi.delete(`premium_${msg.guild.id}`)

    msg.delete()

    msg.channel.send(":white_check_mark: Removed your gift code from this server! It can now be used on other servers.")

  })

  }}
