const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'privacy',
  cooldown: 30,
  usage: '',
  description: 'Allows you to toggle whether or not the number of attempts verified or stopped will be sent to the bot\'s database. No other data except the number is sent, and there\'s no way of tracing statistics back to a specific server, even if the owner tried.',
  execute(msg, args) {

//if (verifi.get(`verifi_status_${msg.guild.id}`) == null) verifi.set(`verifi_status_${msg.guild.id}`, '1')

    var status = verifi.get(`verifi_status_${msg.guild.id}`)

    if (status == null) {
      var onoroff = "On"
    } else {
      var onoroff = "Off"
    }

    var reset = onoroff

    const usageEmbed = new Discord.MessageEmbed()
    .setColor('#87ceeb')
    .setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
    .setTitle("Verifi Privacy Settings")
    .setDescription("By default, everytime an attempt verifies or fails verification on your server, Verifi increases a global number stored in it's database by one. This is used by the owner as a fun and useful statistic to see how many people have experienced the bot so far. There is no way of tracing any data sent back to your server or a user. However, if you desire, you can disable this sending on your server.")
    .addField("Current Data Sending State:", onoroff)
    msg.channel.send(usageEmbed).then(() => {

      const filter = response => {
                       return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                     };

      msg.channel.send("Type `on` if you would like to keep this enabled. Type `off` if you want to disable updating the number from your server.").then(() => {
         msg.channel.awaitMessages(filter, { max: 1, time: 120000 }) //errors: ['time'] })
           .then(collected => {

             if (collected.first().content.toLowerCase() !== 'on' && collected.first().content.toLowerCase() !== 'off') return msg.channel.send("That wasn't a valid option, please try again.")
             if (collected.first().content.toLowerCase() == 'on') {

               verifi.set(`verifi_status_${msg.guild.id}`, '1')
               msg.channel.send("The global number will be updated whenever someone verifies on your server.")

             }

             if (collected.first().content.toLowerCase() == 'off') {

               verifi.delete(`verifi_status_${msg.guild.id}`)
               msg.channel.send("The global number will no longer be updated whenever someone verifies on your server.")

             }

                })

              })
            })









  }
}
