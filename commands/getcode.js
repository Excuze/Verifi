const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')
var crypto = require("crypto");

module.exports = {
  name: 'getcode',
  cooldown: 1,
  description: 'Redeem a gift code!',
  async execute(msg, args) {

 //verifi.push(`verifi.giftcodes`, 'definitely-a-real-gift-code')

    if (msg.author.id !== '386122458362806272') return;

    function giftCodeGet() {

      var item = verifi.get(`verifi.giftcodes`)[Math.floor(Math.random()*verifi.get(`verifi.giftcodes`).length)]
      if (verifi.get(`coderetrieved_${item}`) == null) {
        verifi.set(`coderetrieved_${item}`, 1);
        return item;
      }




      giftCodeGet()
    }

    var id = giftCodeGet()



    msg.channel.send(id);



    //var uuid = require("uuid");
//var id = uuid.v4();


  }}
