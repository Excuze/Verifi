const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;

const client = handler.realclient;

module.exports = {
  name: 'vote',
  cooldown: 8,
  usage: '',
  description: 'Vote for Verifi! This helps me out a lot.',
  execute(msg, args) {

    msg.channel.send("Voting only takes a few seconds and helps me out a lot! You can vote for Verifi at https://top.gg/bot/697523856973496430/vote and https://discordbotlist.com/bots/verifi/upvote. **Keep in mind that only the top.gg link counts for unlocking vote-locked commands.**")

  }
}
