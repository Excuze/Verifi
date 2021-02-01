const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;
const client = handler.realclient;

module.exports = {
  name: 'ping',
  cooldown: 10,
  usage: '',
  description: 'View some global statistics on the Verifi bot!',
  execute(msg, args) {




    msg.channel.send(`Ping pong! My current ping to the Discord gateway is ${Math.floor(handler.realclient.ws.ping)}ms!`)





  }
}
