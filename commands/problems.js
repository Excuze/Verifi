const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'problems',
  cooldown: 20,
  description: 'Lists some common problems and solutions that may arise with the bot.',
  async execute(msg, args) {

const probEmbed = new Discord.MessageEmbed()
.setColor("87ceeb")
.setTitle("Frequent Problems!")
.setDescription("Lists some common problems and solutions that may arise with the bot.")
.addField("Verifi starts verification but never actually gives the person their role.", "Check that Verifi both has permissions to Manage Roles, and that the 'Verifi' role is *above* the role you give players when they complete verification. If these two conditions aren't met, the bot will be unable to verify new members.", true)
.addField("Verifi won't send someone the verification prompt.", "Make sure that person is allowing DMs from server members, and that they haven't blocked Verifi in the past.", true)
.addField("Verifi doesn't send any logs even though I turned them on.", "Use `v!>logs` to check what specific log types are currently enabled. It's possible overall logs are on, but all types but verification messages are disabled. And of course, make sure Verifi has permissions to view and send messages in that channel.", true)
.addField("Verifi isn't responding to any commands.", "Join the official server (invite link at the bottom of this message) and see if there are any announcements saying that the bot is not working right now.", true)
.addField("Nothing happens when someone joins the server.", "Try setting your log channel again and make sure Verifi has access to your log channel! Sometimes if the bot fails to send a log it'll block the whole verification process.", true)
.addField("Have a different problem?", "You can open a support ticket for the bot on the Discord server linked below. This server is also where I notify people of updates and send out patchnotes!")
.addField("Server Invite Link:","https://discord.gg/cRvsBpA")
msg.channel.send(probEmbed)


  }}
