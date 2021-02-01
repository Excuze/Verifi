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
  name: 'textcolor',
  cooldown: 10,
  args: true,
  usage: '<hex color code>',
  description: 'Allows you to set up a color for the text that appears in verification prompts. Put a hex code after the command.',
  execute(msg, args) {



  //  dbl.getVotes().then(votes => {
//    if (votes.find(vote => vote.id == msg.author.id)) {




if (args == 'default') {
  verifi.delete(`verifi_textcolor_${msg.guild.id}`)
  msg.channel.send("Set the text color in your verification prompt to the default color, white.")
} else {
  var isOk = /^#[0-9A-F]{6}$/i.test(args)

if (isOk == false) return msg.channel.send("Uh oh. That's not a valid hex code. Make sure it includes the hashtag at the beginning.")

verifi.set(`verifi_textcolor_${msg.guild.id}`, args)

msg.channel.send("Set the text color in your verification prompt to: " + args)

}

//} else {
//  return msg.channel.send("You need to vote for the bot at 'https://top.gg/bot/697523856973496430/vote' before you can use this command.")
//}
//});


  }
}
