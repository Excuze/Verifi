const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')
var crypto = require("crypto");

module.exports = {
  name: 'addcode',
  cooldown: 1,
  description: 'Redeem a gift code!',
  async execute(msg, args) {

 //verifi.push(`verifi.giftcodes`, 'definitely-a-real-gift-code')

    if (msg.author.id !== '386122458362806272') return;
  //  if (args.length == 0) return msg.channel.send("You need to include your gift code after the command usage! (ex. v!>addcode definitely-a-real-gift-code)")

    function giftCodeAdd() {
      var id = crypto.randomBytes(20).toString('hex');
      if (verifi.get(`verifi.giftcodes`).indexOf(id) == -1) return id;
      giftCodeAdd()
    }

    var id = giftCodeAdd()



    verifi.push(`verifi.giftcodes`, id);

    msg.channel.send("Added " + id + " to the valid gift codes!")



    //var uuid = require("uuid");
//var id = uuid.v4();


  }}
