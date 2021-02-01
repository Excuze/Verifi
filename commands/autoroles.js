const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const verifi = handler.realverifi;

const client = handler.realclient;

module.exports = {
  name: 'autoroles',
  cooldown: 25,
  usage: '',
  description: 'Set up automatic roles!',
  execute(msg, args) {



if (verifi.get(`verifi_autorole_bot_${msg.guild.id}`) == null) {
  var bot = "None"
} else {
  var bot = `<@&${verifi.get(`verifi_autorole_bot_${msg.guild.id}`)}>`
}

if (verifi.get(`verifi_autorole_member_${msg.guild.id}`) == null) {
  var member = "None"
} else {
  var member = `<@&${verifi.get(`verifi_autorole_member_${msg.guild.id}`)}>`
}

    const autoRoleEmbed = new Discord.MessageEmbed()

       .setColor("#87ceeb")
       .setTitle("Autoroles")
       .addField("**Role to automatically give to members who join:**", member)
       .addField("**Role to automatically give to bots who join:**", bot)

       msg.channel.send(autoRoleEmbed).then(() => {
       msg.channel.send("Mention the role you'd like to give to members when they join (before verification) now! **If you don't want to automatically give members a role when they join, type `skip`.**").then(() => {
         msg.channel.awaitMessages(m => m.author.id == msg.author.id, {
           max: 1,
           time: 90000
         }).then(collected => {

           if (collected.first().content == 'skip') {
             verifi.delete(`verifi_autorole_member_${msg.guild.id}`)

           } else {

           if (collected.first().mentions.roles.first() == null && collected.first().content !== 'skip') {
             return msg.channel.send("Oops! You didn't type `skip` or mention a role.")
           } else {
             verifi.set(`verifi_autorole_member_${msg.guild.id}`, collected.first().mentions.roles.first().id)
           }
         }

           if (verifi.get(`verifi_autorole_member_${msg.guild.id}`) == null) {
             var member = "None"
           } else {
             var member = `<@&${verifi.get(`verifi_autorole_member_${msg.guild.id}`)}>`
           }

           const autoRoleEmbed2 = new Discord.MessageEmbed()

              .setColor("#87ceeb")
              .setTitle("Autoroles")
              .addField("**Role to automatically give to members who join:**", member)
              .addField("**Role to automatically give to bots who join:**", bot)

              msg.channel.send(autoRoleEmbed2).then(() => {
              msg.channel.send("Mention the role you'd like to give to bots when they join now! **If you don't want to automatically give bots a role when they join, type `skip`.**").then(() => {
                msg.channel.awaitMessages(m => m.author.id == msg.author.id, {
                  max: 1,
                  time: 90000
                }).then(collected => {

                  if (collected.first().content == 'skip') {
                    verifi.delete(`verifi_autorole_bot_${msg.guild.id}`)

                  } else {

                  if (collected.first().mentions.roles.first() == null) {
                    return msg.channel.send("Oops! You didn't type `skip` or mention a role.")
                  } else {
                    verifi.set(`verifi_autorole_bot_${msg.guild.id}`, collected.first().mentions.roles.first().id)
                  }
                }

                  if (verifi.get(`verifi_autorole_bot_${msg.guild.id}`) == null) {
                    var bot = "None"
                  } else {
                    var bot = `<@&${verifi.get(`verifi_autorole_bot_${msg.guild.id}`)}>`
                  }

                  const autoRoleEmbed3 = new Discord.MessageEmbed()

                     .setColor("#00FF00")
                     .setTitle("Autoroles [Finalized]")
                     .addField("**Role to automatically give to members who join:**", member)
                     .addField("**Role to automatically give to bots who join:**", bot)

                     msg.channel.send(autoRoleEmbed3).then(() => {
                       msg.channel.send("Your changes have been finalized and put into effect! You can see them above.")
                     })

           })
           })
         })

    })
    })
  })





  }
}
