const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')
var crypto = require("crypto");

module.exports = {
  name: 'forceupdate',
  cooldown: 1,
  description: 'Redeem a gift code!',
  async execute(msg, args) {

 //verifi.push(`verifi.giftcodes`, 'definitely-a-real-gift-code')

    if (msg.author.id !== '386122458362806272') return;

var i = 0;

    msg.channel.send("Reformatted " + i).then(msg2 => {


    client.guilds.cache.each(guild => {

      setTimeout(function(){
        try {
      if (verifi.get(`verifi_autorole_bot_${guild.id}`) == 'disable') verifi.delete(`verifi_autorole_bot_${guild.id}`)
      if (verifi.get(`verifi_autorole_member_${guild.id}`) == 'disable') verifi.delete(`verifi_autorole_member_${guild.id}`)
      verifi.delete(`verifi_verimg_${guild.id}`)
      if (verifi.get(`premium_${guild.id}`) == '0') verifi.delete(`premium_${guild.id}`)
      if (verifi.get(`used_${args}`) == '0') verifi.delete(`used_${args}`)
      if (verifi.get(`verifi_customprefix_${guild.id}`) == 'default') verifi.delete(`verifi_customprefix_${guild.id}`)
      if (verifi.get(`verifi_joinlog_${guild.id}`) == '0') verifi.delete(`verifi_joinlog_${guild.id}`)
    if (verifi.get(`verifi_failnokicklog_${guild.id}`) == '0') verifi.delete(`verifi_failnokicklog_${guild.id}`)
    if (verifi.get(`verifi_kicklog_${guild.id}`) == '0') verifi.delete(`verifi_kicklog_${guild.id}`)
    if (verifi.get(`verifi_botver_${guild.id}`) == '0') verifi.delete(`verifi_botver_${guild.id}`)
    if (verifi.get(`verifi_kickmem_${guild.id}`) == '0') verifi.delete(`verifi_kickmem_${guild.id}`)
    if (verifi.get(`verifi_syschannel_${guild.id}`) == 'disabled') verifi.delete(`verifi_syschannel_${guild.id}`)
    if (verifi.get(`verifi_message_${guild.id}`) == 'disable') verifi.delete(`verifi_message_${guild.id}`)
    if (verifi.get(`verifi_modrole_${guild.id}`) == 'default') verifi.delete(`verifi_modrole_${guild.id}`)
    if (verifi.get(`verifi_onestep_${guild.id}`) == '1') verifi.delete(`verifi_onestep_${guild.id}`)
    if (verifi.get(`verifi_remrole_${guild.id}`) == 'disable') verifi.delete(`verifi_remrole_${guild.id}`)

    i++;

  msg2.edit("Reformatted " + i)
} catch (error) {
  console.log(error);
  msg.channel.send("Error on server " + i +", additional output printed to console.")
}
}, 600);
    })

  })


  }}
