const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'redeem',
  cooldown: 12,
  args: true,
  usage: '<gift code>',
  description: 'Redeem a gift code!',
  async execute(msg, args) {

    if (verifi.get(`premium_${msg.guild.id}`) == '1') return msg.channel.send(":x: You already have a gift code applied to this server.")

    if (verifi.get(`used_${args}`) == '1') return msg.channel.send(":x: Uh oh! This code is already being used. Make sure you have an original code.")

    if (verifi.get(`verifi.giftcodes`).indexOf(String(args)) == -1) return msg.channel.send("Sorry, that doesn't appear to be a valid code. It may have been used already.")

    msg.channel.send(":cyclone: Contacting the magic interdimensional code pool...").then(msg => {

    verifi.set(`used_${args}`, '1')

    verifi.add(`premiumcount`, 1)

    verifi.set(`premium_${msg.guild.id}`, '1')

    msg.delete()

    msg.channel.send(":white_check_mark: Applied your gift code to this server! Enjoy.")

  })

  }}
