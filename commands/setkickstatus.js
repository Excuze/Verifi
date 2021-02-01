const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient

const verifi = new db.table(`verifi`)

module.exports = {
  name: 'setkickstatus',
  cooldown: 25,
  args: true,
  usage: 'Y OR N',
  description: 'Allows you to set whether or not users will be kicked if they fail verification.',
  execute(msg, args) {

if (args == 'Y' || args == 'N') {

if (args == 'Y') {
  var kickMem = '1'
   msg.channel.send(`Users who fail verification will be kicked from now on.`)
   verifi.set(`verifi_kickmem_${msg.guild.id}`, kickMem)
} else {
  var kickMem = '0'
  verifi.delete(`verifi_kickmem_${msg.guild.id}`)
  msg.channel.send(`Users who fail verification will not be kicked from now on.`)
}






} else {

  return msg.channel.send("You need to type `Y` if you'd like to enable kicking members if they fail verification, or `N` if you'd like to disable this.")

}


  }
}
