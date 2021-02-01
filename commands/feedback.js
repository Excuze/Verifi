const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;

const client = handler.realclient;

module.exports = {
  name: 'feedback',
  cooldown: 8,
  usage: '',
  description: 'Fill out a feedback form to help me improve Verifi!',
  execute(msg, args) {

    msg.channel.send("Filling out this feedback form will help me add new features to Verifi and improve Verifi for everyone. The form is at: https://forms.gle/xLSGA4JRZHQUHfFx6")

  }
}
