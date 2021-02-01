const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'setsteps',
  cooldown: 15,
  args: true,
  usage: '1 OR 2',
  description: 'Allows you to set whether verification is two steps long or one step long.',
  execute(msg, args) {

if (args == '1' || args == '2') {


  if (args == '1') {
    verifi.delete(`verifi_onestep_${msg.guild.id}`)
    msg.channel.send(`Verification is now only one step, the image captcha.`)
  } else {
    verifi.set(`verifi_onestep_${msg.guild.id}`, args)
  msg.channel.send(`Verification is now two steps, with both the image captcha and reaction step.`)
}






} else {

  return msg.channel.send("You need to type `1` after the command usage if you want to cut off the verification at the first step, or `2` if you'd like to reset verification to the default two steps.")

}


  }
}
