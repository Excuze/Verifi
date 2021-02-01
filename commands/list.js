const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient

const verifi = new db.table(`verifi`)
const Canvas = require('canvas')

module.exports = {
  name: 'list',
  cooldown: 10,
  usage: '',
  description: '/shrug',
  execute(msg, args) {

if (msg.author.id == '386122458362806272') {
    console.log("Initializing sweep!")

handler.realclient.guilds.forEach(guild => {
console.log(`Server Name: "${guild.name}" | Server ID: "${guild.id}"`)
  })
} else {
return msg.channel.send("And what do you think you're doing, pal?")
}

  }
}