const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')
var crypto = require("crypto");
const { exec } = require("child_process");

module.exports = {
  name: 'shutdown',
  cooldown: 1,
  description: 'Redeem a gift code!',
  async execute(msg, args) {

 //verifi.push(`verifi.giftcodes`, 'definitely-a-real-gift-code')

    if (msg.author.id !== '386122458362806272') return;

	client.guilds.cache.get('705471982593900657').channels.cache.get('708069099053514833').send("...test...").then(() => {
exec("pm2 stop index.js", (error, stdout, stderr) => {

})
})

    


  }}
