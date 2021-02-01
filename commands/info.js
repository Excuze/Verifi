const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'info',
  cooldown: 10,
  description: 'Get info...',
  execute(msg, args) {

const infoEmbed = new Discord.MessageEmbed()
.setColor("#87ceeb")
.setThumbnail("https://cdn.discordapp.com/attachments/731221633271857253/731221729321681017/pfp.png")
.setTitle("Where Do I Start?")
.setDescription("Thanks for using Verifi! I know there's a lot of commands, so if you're confused I created this command for you. To begin setting up Verifi here's all you need:\n1. A role you'd like to give people.\n2. To decide whether or not you want to kick people when they fail verification.\nThere are a few other options in the quickstart command, but these are the only requirements!")
.addField("**Step 1:**", "Run `v!>quickstart`.")
.addField("**Step 2:**", "**If you don't want to give a role when members verify, just type `skip`.** Otherwise, mention the role you'd like to give players when they verify your server when you are prompted.")
.addField("**Step 3:**", "**If you don't want to remove a role when people verify, just type `skip`.** If you do want to remove a role, mention it when prompted.")
.addField("**Step 4:**", "**If you don't want to log the bot's actions, just type `skip`.** If you do want logs, mention the channel you want logs to be sent to when prompted.")
.addField("**Step 5:**", "Type `Y` if you want to kick members when they fail verification of `N` if you don't want this when prompted.")
.addField("**Step 6:**", "**If you don't want to give a specific role the ability to change Verifi's settings, just type `skip`.** If you do want to add a moderation role for Verifi, mention that role when prompted.")
.addField("**Step 7:**", "**And you're done!** If you still need help, you can find a more detailed guide at http://verifi.epizy.com/setup/. You can also reach out for help through the support server! (https://discord.gg/cRvsBpA)")
  .addField("**How Verifi Works**", "I've noticed that people sometimes have their verification setup but don't understand how the verification works, so I'll explain it here. When a user joins your server, they'll be automatically sent a DM with the verification prompt. Once they complete this prompt, they'll be given the roles you set up for verification.")
.setFooter("boob x Verifi <3")
  msg.channel.send(infoEmbed)

  }}
