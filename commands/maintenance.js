const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'maintenance',
  cooldown: 10,
  description: 'Set status to me me big boi under maintenance thingy',
  execute(msg, args) {

    if (msg.author.id !== '386122458362806272') return;

if (verifi.get(`maintenance`) == '1') {
  verifi.set(`maintenance`, '0')
  msg.channel.send("Set to 0")
} else {
  verifi.set(`maintenance`, '1')
  msg.channel.send("Set to 1")
}

  }}
