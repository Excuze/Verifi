const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;
const Canvas = require('canvas')

const client = handler.realclient;

module.exports = {
  name: 'broadcast',
  cooldown: 10,
  usage: '',
  description: 'Send a broadcast!',
  execute(msg, args) {

    if (msg.author.id == '386122458362806272') {
    console.log("Sending a broadcast!")

handler.realclient.guilds.cache.forEach(guild => {
try {
  if (verifi.get(`verifi_syschannel_${guild.id}`) == null || verifi.get(`verifi_syschannel_${guild.id}`) == 'disabled') {

  } else {
  var syslog = verifi.get(`verifi_syschannel_${guild.id}`)

  handler.realclient.guilds.cache.get(guild.id).channels.cache.get(syslog).send("Heya! Verifi will be shut down on February 10th. I’ll be retaining the bot account, but it’ll no longer be hosted, online, or functional. Thanks for being here and putting up with the bugs and quirks of the bot, but it's faded in activity to the point of being unmaintained, and I don't want to continue sinking my money into it monthly. Have a great day <3")


}
} catch (error) {
msg.reply("oof")
}
})
} else {
return msg.channel.send("And what do you think you're doing, pal?")
}




  }
}
