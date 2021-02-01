const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;

const client = handler.realclient;

module.exports = {
  name: 'invite',
  cooldown: 5,
  description: "Get Verifi's bot invite link.",
  execute(msg, args) {



    msg.channel.send("Verifi's invite link can be found at: 'verifi.epizy.com/invite'")




  }
}
