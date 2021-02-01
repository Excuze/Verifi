const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'quickstart',
  cooldown: 20,
  description: 'Run the Quick Start prompt. Covers all the basic configuration you need quickly and easily.',
  execute(msg, args) {

    try {
var resetRole = verifi.get(`verifi_role_${msg.guild.id}`)
var resetRemRole = verifi.get(`verifi_remrole_${msg.guild.id}`)
var resetSysChannel = verifi.get(`verifi_syschannel_${msg.guild.id}`)
var resetVerDifficulty = verifi.get(`verifi_verdifficulty_${msg.guild.id}`)
var resetKickMem = verifi.get(`verifi_kickmem_${msg.guild.id}`)

    const filter = response => {
                 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
               };
// https://discordapp.com/oauth2/authorize?client_id=697523856973496430&scope=bot&permissions=268486722
const embed1 = new Discord.MessageEmbed()
.setColor('#87ceeb')
.setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
.setTitle("Quickstart Wizard (Step 1/5)")
.setDescription("A quick prompt to set up all the basic configuration for your server quickly and easily.")
.addField("Verification Role:", "Not setup yet")
.addField("Verification Removal Role:", "Not setup yet")
.addField("System Messages:", "Not setup yet")
.addField("Kick members on verification failure?", "Not setup yet")
.addField("Mod role:", "Not setup yet")
               msg.channel.send(embed1).then(() => {

                        msg.channel.send("Mention the role you'd like to give users when they complete verification, or type `skip` to skip giving a role. Type `quit` at any time to exit this prompt and reset your changes to what they were before starting this. (Not Required)").then(() => {
                  msg.channel.awaitMessages(filter, { max: 1, time: 60000 }) //errors: ['time'] })
                    .then(collected => {
		if (!collected.first()) return msg.channel.send(":x: Error reading response! Please try again.")
                      if (collected.first().content.toLowerCase() == 'quit') return msg.channel.send("Exited the prompt safely!")
                      if (collected.first().content.toLowerCase() == 'skip') {
                        var role = "Skipped!"
                        if (verifi.get(`verifi_role_${msg.guild.id}`) !== null) {
                          verifi.delete(`verifi_role_${msg.guild.id}`)
                        }
                      } else {
                      if (collected.first().mentions.roles.first() == null) return msg.channel.send("Uh oh, that was an invalid answer. Please try again from the beginning. Any changes you made have been reset to what they were before starting this prompt.")

                      var role = collected.first().mentions.roles.first()
                      var roleID = collected.first().mentions.roles.first().id
                         verifi.set(`verifi_role_${msg.guild.id}`, roleID)
                       }


                         const filter2 = response => {
                                      return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                                    };
                         // https://discordapp.com/oauth2/authorize?client_id=697523856973496430&scope=bot&permissions=268486722
                         const embed2 = new Discord.MessageEmbed()
                         .setColor('#87ceeb')
                         .setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
                         .setTitle("Quickstart Wizard (Step 2/5)")
                         .setDescription("A quick prompt to set up all the basic configuration for your server quickly and easily.")
                         .addField("Verification Role:", role)
                         .addField("Verification Removal Role:", "Not setup yet")
                         .addField("System Messages:", "Not setup yet")
                         .addField("Kick members on verification failure?", "Not setup yet")
                         .addField("Mod role:", "Not setup yet")
                                    msg.channel.send(embed2).then(() => {
                                             msg.channel.send("Mention the role you'd like to remove from players when they complete verification. If you don't want to remove any role, just type `skip`. Type `quit` at any time to exit this prompt and reset your changes to what they were before starting this. (Optional)").then(() => {
                                       msg.channel.awaitMessages(filter2, { max: 1, time: 60000 }) //errors: ['time'] })
                                         .then(collected => {
                                           if (collected.first().content.toLowerCase() == 'quit') {

                                             verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                             return msg.channel.send("Exited the prompt safely!")
                                                                                    }
                                           if (collected.first().content.toLowerCase() == 'skip') {
                                             var remRole = "Skipped!"
                                             if (verifi.get(`verifi_remrole_${msg.guild.id}`) !== null) {
                                               verifi.delete(`verifi_remrole_${msg.guild.id}`)
                                             }
                                           } else {
                                           if (collected.first().mentions.roles.first() == null) {

                                             verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                             return msg.channel.send("Uh oh, that was an invalid answer. Please try again from the beginning. Any changes you made have been safely reset to what they were before starting this prompt.")
                                                                                    }
                                           var remRole = collected.first().mentions.roles.first()
                                           var remRoleID = collected.first().mentions.roles.first().id
                                              verifi.set(`verifi_remrole_${msg.guild.id}`, remRoleID)
                                            }



                                            const filter3 = response => {
                                                         return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                                                       };
                                            // https://discordapp.com/oauth2/authorize?client_id=697523856973496430&scope=bot&permissions=268486722
                                            const embed3 = new Discord.MessageEmbed()
                                            .setColor('#87ceeb')
                                            .setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
                                            .setTitle("Quickstart Wizard (Step 3/5)")
                                            .setDescription("A quick prompt to set up all the basic configuration for your server quickly and easily.")
                                            .addField("Verification Role:", role)
                                            .addField("Verification Removal Role:", remRole)
                                            .addField("System Messages:", "Not setup yet")
                                            .addField("Kick members on verification failure?", "Not setup yet")
                                            .addField("Mod role:", "Not setup yet")
                                                       msg.channel.send(embed3).then(() => {
                                                                msg.channel.send("Mention the channel you'd like to log actions the bot is taking in. If you don't want to have a log, just type `skip`. Type `quit` at any time to exit this prompt and reset your changes to what they were before starting this. (Optional)").then(() => {
                                                          msg.channel.awaitMessages(filter3, { max: 1, time: 60000 }) //errors: ['time'] })
                                                            .then(collected => {
                                                              if (collected.first().content.toLowerCase() == 'quit') {

                                                                verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                                                verifi.set(`verifi_remrole_${msg.guild.id}`, resetRemRole)
                                                                return msg.channel.send("Exited the prompt safely!")
                                                                                                                          }
                                                              if (collected.first().content.toLowerCase() == 'skip') {
                                                                var sysChannel = "Skipped!"
                                                                if (verifi.get(`verifi_syschannel_${msg.guild.id}`) !== null) {
                                                                  verifi.delete(`verifi_syschannel_${msg.guild.id}`)
                                                                }
                                                              } else {
                                                              if (collected.first().mentions.channels.first() == null) {

                                                                  verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                                                verifi.set(`verifi_remrole_${msg.guild.id}`, resetRemRole)
                                                                return msg.channel.send("Uh oh, that was an invalid answer. Please try again from the beginning. Any changes you made have been safely reset to what they were before starting this prompt.")
                                                                                                                           }
                                                              var sysChannel = collected.first().mentions.channels.first()
                                                              var sysChannelID = collected.first().mentions.channels.first().id
                                                                 verifi.set(`verifi_syschannel_${msg.guild.id}`, sysChannelID)
                                                               }



                                                               const filter4 = response => {
                                                                            return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                                                                          };
                                                               // https://discordapp.com/oauth2/authorize?client_id=697523856973496430&scope=bot&permissions=268486722
                                                               const embed4 = new Discord.MessageEmbed()
                                                               .setColor('#87ceeb')
                                                               .setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
                                                               .setTitle("Quickstart Wizard (Step 4/5)")
                                                               .setDescription("A quick prompt to set up all the basic configuration for your server quickly and easily.")
                                                               .addField("Verification Role:", role)
                                                               .addField("Verification Removal Role:", remRole)
                                                               .addField("System Messages:", sysChannel)
                                                               .addField("Kick members on verification failure?", "Not setup yet")
                                                               .addField("Mod role:", "Not setup yet")
                                                                          msg.channel.send(embed4).then(() => {
                                                                                   msg.channel.send("Send `Y` in the chat to enable kicking server users who fail to complete the verification. Send `N` to disable this. Type `quit` at any time to exit this prompt and reset your changes to what they were before starting this. (Required Response)").then(() => {
                                                                             msg.channel.awaitMessages(filter4, { max: 1, time: 60000 }) //errors: ['time'] })
                                                                               .then(collected => {
                                                                                 if (collected.first().content.toLowerCase() == 'quit') {

                                                                                   verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                                                                   verifi.set(`verifi_remrole_${msg.guild.id}`, resetRemRole)
                                                                                   verifi.set(`verifi_syschannel_${msg.guild.id}`, resetSysChannel)
                                                                                   return msg.channel.send("Exited the prompt safely!")
                                                                                                                                                                 }

                                                                                 if (collected.first().content.toLowerCase() !== 'y' && collected.first().content.toLowerCase() !== 'n') {

                                                                                     verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                                                                   verifi.set(`verifi_remrole_${msg.guild.id}`, resetRemRole)
                                                                                   verifi.set(`verifi_syschannel_${msg.guild.id}`, resetSysChannel)
                                                                                   return msg.channel.send("Uh oh, that was an invalid answer. Please try again from the beginning. Any changes you made have been safely reset to what they were before starting this prompt.")
                                                                                                                                                                }
                                                                                 var kickMem = collected.first().content.toUpperCase()
                                                                                 if (collected.first().content.toLowerCase() == 'y') {
                                                                                   var kickMemID = '1'
                                                                                 } else if (collected.first().content.toLowerCase() == 'n') {
                                                                                   var kickMemID = '0'
                                                                                 }
                                                                                    verifi.set(`verifi_kickmem_${msg.guild.id}`, kickMemID)

                                                                                    const filter6 = response => {
                                                                                                 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                                                                                               };
                                                                                    // https://discordapp.com/oauth2/authorize?client_id=697523856973496430&scope=bot&permissions=268486722
                                                                                    const embed6 = new Discord.MessageEmbed()
                                                                                    .setColor('#87ceeb')
                                                                                    .setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
                                                                                    .setTitle("Quickstart Wizard (Step 5/5)")
                                                                                    .setDescription("A quick prompt to set up all the basic configuration for your server quickly and easily.")
                                                                                    .addField("Verification Role:", role)
                                                                                    .addField("Verification Removal Role:", remRole)
                                                                                    .addField("System Messages:", sysChannel)
                                                                                    .addField("Kick members on verification failure?", kickMem)
                                                                                    .addField("Mod role:", "Not setup yet")
                                                                                               msg.channel.send(embed6).then(() => {
                                                                                                        msg.channel.send("Mention the role you'd like for people to have to have in order to make changes to the bot's settings. If you'd like to leave this at default, (They have to have a role with the **MANAGE SERVER** permission.) type `skip`. Type `quit` at any time to exit this prompt and reset your changes to what they were before starting this. (Optional)").then(() => {
                                                                                                  msg.channel.awaitMessages(filter6, { max: 1, time: 60000 }) //errors: ['time'] })
                                                                                                    .then(collected => {
                                                                                                      if (collected.first().content.toLowerCase() == 'quit') {

                                                                                                          verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                                                                                        verifi.set(`verifi_remrole_${msg.guild.id}`, resetRemRole)
                                                                                                        verifi.set(`verifi_syschannel_${msg.guild.id}`, resetSysChannel)
                                                                                                        verifi.set(`verifi_kickmem_${msg.guild.id}`, resetKickMem)
                                                                                                        return msg.channel.send("Exited the prompt safely!")
                                                                                                                                                                                                            }
                                                                                                      if (collected.first().content.toLowerCase() == 'skip') {
                                                                                                        var modRole = "Skipped!"
                                                                                                        if (verifi.get(`verifi_modrole_${msg.guild.id}`) !== null) {
                                                                                                          verifi.delete(`verifi_modrole_${msg.guild.id}`)
                                                                                                        }
                                                                                                      } else {
                                                                                                      if (collected.first().mentions.roles.first() == null) {

                                                                                                          verifi.set(`verifi_role_${msg.guild.id}`, resetRole)
                                                                                                        verifi.set(`verifi_remrole_${msg.guild.id}`, resetRemRole)
                                                                                                        verifi.set(`verifi_syschannel_${msg.guild.id}`, resetSysChannel)
                                                                                                        verifi.set(`verifi_kickmem_${msg.guild.id}`, resetKickMem)
                                                                                                        return msg.channel.send("Uh oh, that was an invalid answer. Please try again from the beginning. Any changes you made have been safely reset to what they were before starting this prompt.")
                                                                                                                                                                                                           }
                                                                                                      var modRole = collected.first().mentions.roles.first()
                                                                                                      var modRoleID = collected.first().mentions.roles.first().id
                                                                                                         verifi.set(`verifi_modrole_${msg.guild.id}`, modRoleID)
                                                                                                       }


                                                                                    // continue here, you can do it :3

                                                                                    const embed69 = new Discord.MessageEmbed()
                                                                                    .setColor('#00FF00')
                                                                                    .setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
                                                                                    .setTitle("Quickstart Wizard (Step 5/5) [Completed!]")
                                                                                    .setDescription("A quick prompt to set up all the basic configuration for your server quickly and easily.")
                                                                                    .addField("Verification Role:", role)
                                                                                    .addField("Verification Removal Role:", remRole)
                                                                                    .addField("System Messages:", sysChannel)
                                                                                    .addField("Kick members on verification failure?", kickMem)
                                                                                    .addField("Mod role:", modRole)
                                                                                               msg.channel.send(embed69).then(() => {
                                                                                                 msg.channel.send("Your server's verification has been fully set up and is ready to work!")
                                                                                                 msg.channel.send("**:warning: NOTE: Please ensure the \"Verifi\" role is *above* the role you give members after they complete verification in the role list, or I will be unable to verify new members.** :warning:")
                                                                                                 msg.channel.send("If you need support, want patchnotes, or want notifications for when Verifi will be going offline to update, you can join the official Discord at https://discord.gg/cRvsBpA")

                                                                                               })



                                                                                  })
                                                                                })
                                                                              })



                                                               })
                                                             })
                                                           })



                                            })
                                          })
                                        })

                       })
                     })
                   })

                 })
               })
             })

           } catch (error) {
             return msg.channel.send("If you see this after typing `quit`, don't worry. If the quickstart prompt isn't working and you see it, this is a glitch.")
           }

  }
}
