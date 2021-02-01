const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;

module.exports = {
  name: 'logs',
  cooldown: 15,
  description: 'Allows you to set what logs are sent in your log channel.',
  execute(msg, args) {

const resetJoin = verifi.get(`verifi_joinlog_${msg.guild.id}`)
const resetFail = verifi.get(`verifi_failnokicklog_${msg.guild.id}`)
const resetKick = verifi.get(`verifi_kicklog_${msg.guild.id}`)
const resetBot = verifi.get(`verifi_botver_${msg.guild.id}`)

if (resetJoin == '1') {
  var join = 'Yes'
} else {
  var join = 'No'
}

if (resetFail == '1') {
  var fail = 'Yes'
} else {
  var fail = 'No'
}

if (resetKick == '1') {
  var kick = 'Yes'
} else {
  var kick = 'No'
}

if (resetBot == '1') {
  var bot = 'Yes'
} else {
  var bot = 'No'
}

const filter = response => {
             return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
           };

const owoEmbed = new Discord.MessageEmbed()
.setColor("#87ceeb")
.setTitle("Log Settings")
.setDescription("By default, Verifi sends logs every time a member joins the server, fails verification but isn't kicked, and fails verification and is kicked. Additionally, a notification is sent when a bot is automatically verified. The following prompt will walk you through your log settings.")
.addField("Logging joins?", join)
.addField("Logging failures not resulting in a kick?", fail)
.addField("Logging failures resulting in a kick?", kick)
.addField("Logging automatic bot verifications?", bot)
msg.channel.send(owoEmbed).then(() => {

           msg.channel.send("Type `on` if you'd like to have a log sent whenever a new member joins. Type `off` if you'd like to disable this. You can also type `quit` at any time to quit this prompt and reset all settings to what they were before starting the prompt.").then(() => {
           msg.channel.awaitMessages(filter, { max: 1, time: 60000 }) //errors: ['time'] })
           .then(collected => {

             if (collected.first().content.toLowerCase() == 'quit') {
               return msg.channel.send("Safely exited the prompt, returning all settings to what they were before!")
             }

             if (collected.first().content.toLowerCase() == 'on') {

               verifi.set(`verifi_joinlog_${msg.guild.id}`, '1')
               var join = "Yes"

             }

             if (collected.first().content.toLowerCase() == 'off') {

               verifi.delete(`verifi_joinlog_${msg.guild.id}`)
               var join = "No"

             }

             if (collected.first().content.toLowerCase() !== 'on' && collected.first().content.toLowerCase() !== 'off') {

               return msg.channel.send("That wasn't a valid option! The prompt has exited and any settings you changed have been safely reset to what they were before you started this prompt.")

             }


             const filter2 = response => {
                          return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                        };

             const owoEmbed2 = new Discord.MessageEmbed()
             .setColor("#87ceeb")
             .setTitle("Log Settings")
             .setDescription("By default, Verifi sends logs every time a member joins the server, fails verification but isn't kicked, and fails verification and is kicked. Additionally, a notification is sent when a bot is automatically verified. The following prompt will walk you through your log settings.")
             .addField("Logging joins?", join)
             .addField("Logging failures not resulting in a kick?", fail)
             .addField("Logging failures resulting in a kick?", kick)
             .addField("Logging automatic bot verifications?", bot)
             msg.channel.send(owoEmbed2).then(() => {

                        msg.channel.send("Type `on` if you'd like to have a log sent whenever a member fails verification but is not kicked. Type `off` if you'd like to disable this. You can also type `quit` at any time to quit this prompt and reset all settings to what they were before starting the prompt.").then(() => {
                        msg.channel.awaitMessages(filter2, { max: 1, time: 60000 }) //errors: ['time'] })
                        .then(collected => {

                          if (collected.first().content.toLowerCase() == 'quit') {
                            verifi.set(`verifi_joinlog_${msg.guild.id}`, resetJoin)
                            return msg.channel.send("Safely exited the prompt, returning all settings to what they were before!")
                          }

                          if (collected.first().content.toLowerCase() == 'on') {

                            verifi.set(`verifi_failnokicklog_${msg.guild.id}`, '1')
                            var fail = "Yes"

                          }

                          if (collected.first().content.toLowerCase() == 'off') {

                            verifi.delete(`verifi_failnokicklog_${msg.guild.id}`)
                            var fail = "No"

                          }

                          if (collected.first().content.toLowerCase() !== 'on' && collected.first().content.toLowerCase() !== 'off') {
                            verifi.set(`verifi_joinlog_${msg.guild.id}`, resetJoin)
                            return msg.channel.send("That wasn't a valid option! The prompt has exited and any settings you changed have been safely reset to what they were before you started this prompt.")

                          }


                          const filter3 = response => {
                                       return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                                     };

                          const owoEmbed3 = new Discord.MessageEmbed()
                          .setColor("#87ceeb")
                          .setTitle("Log Settings")
                          .setDescription("By default, Verifi sends logs every time a member joins the server, fails verification but isn't kicked, and fails verification and is kicked. Additionally, a notification is sent when a bot is automatically verified. The following prompt will walk you through your log settings.")
                          .addField("Logging joins?", join)
                          .addField("Logging failures not resulting in a kick?", fail)
                          .addField("Logging failures resulting in a kick?", kick)
                          .addField("Logging automatic bot verifications?", bot)
                          msg.channel.send(owoEmbed3).then(() => {

                                     msg.channel.send("Type `on` if you'd like to have a log sent whenever a member fails verification and is kicked. Type `off` if you'd like to disable this. You can also type `quit` at any time to quit this prompt and reset all settings to what they were before starting the prompt.").then(() => {
                                     msg.channel.awaitMessages(filter3, { max: 1, time: 60000 }) //errors: ['time'] })
                                     .then(collected => {

                                       if (collected.first().content.toLowerCase() == 'quit') {
                                         verifi.set(`verifi_joinlog_${msg.guild.id}`, resetJoin)
                                         verifi.set(`verifi_failnokicklog_${msg.guild.id}`, resetFail)
                                         return msg.channel.send("Safely exited the prompt, returning all settings to what they were before!")
                                       }

                                       if (collected.first().content.toLowerCase() == 'on') {

                                         verifi.set(`verifi_kicklog_${msg.guild.id}`, '1')
                                         var kick = "Yes"

                                       }

                                       if (collected.first().content.toLowerCase() == 'off') {

                                         verifi.delete(`verifi_kicklog_${msg.guild.id}`)
                                         var kick = "No"

                                       }

                                       if (collected.first().content.toLowerCase() !== 'on' && collected.first().content.toLowerCase() !== 'off') {
                                         verifi.set(`verifi_joinlog_${msg.guild.id}`, resetJoin)
                                         verifi.set(`verifi_failnokicklog_${msg.guild.id}`, resetFail)
                                         return msg.channel.send("That wasn't a valid option! The prompt has exited and any settings you changed have been safely reset to what they were before you started this prompt.")

                                       }


                                       const filter4 = response => {
                                                    return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
                                                  };

                                       const owoEmbed4 = new Discord.MessageEmbed()
                                       .setColor("#87ceeb")
                                       .setTitle("Log Settings")
                                       .setDescription("By default, Verifi sends logs every time a member joins the server, fails verification but isn't kicked, and fails verification and is kicked. Additionally, a notification is sent when a bot is automatically verified. The following prompt will walk you through your log settings.")
                                       .addField("Logging joins?", join)
                                       .addField("Logging failures not resulting in a kick?", fail)
                                       .addField("Logging failures resulting in a kick?", kick)
                                       .addField("Logging automatic bot verifications?", bot)
                                       msg.channel.send(owoEmbed4).then(() => {

                                                  msg.channel.send("Type `on` if you'd like to have a log sent whenever a bot is automatically verified. Type `off` if you'd like to disable this. You can also type `quit` at any time to quit this prompt and reset all settings to what they were before starting the prompt.").then(() => {
                                                  msg.channel.awaitMessages(filter4, { max: 1, time: 60000 }) //errors: ['time'] })
                                                  .then(collected => {

                                                    if (collected.first().content.toLowerCase() == 'quit') {
                                                      verifi.set(`verifi_joinlog_${msg.guild.id}`, resetJoin)
                                                      verifi.set(`verifi_failnokicklog_${msg.guild.id}`, resetFail)
                                                      verifi.set(`verifi_kicklog_${msg.guild.id}`, resetKick)
                                                      return msg.channel.send("Safely exited the prompt, returning all settings to what they were before!")
                                                    }

                                                    if (collected.first().content.toLowerCase() == 'on') {

                                                      verifi.set(`verifi_botver_${msg.guild.id}`, '1')
                                                      var bot = "Yes"

                                                    }

                                                    if (collected.first().content.toLowerCase() == 'off') {

                                                      verifi.delete(`verifi_botver_${msg.guild.id}`)
                                                      var bot = "No"

                                                    }

                                                    if (collected.first().content.toLowerCase() !== 'on' && collected.first().content.toLowerCase() !== 'off') {
                                                      verifi.set(`verifi_joinlog_${msg.guild.id}`, resetJoin)
                                                      verifi.set(`verifi_failnokicklog_${msg.guild.id}`, resetFail)
                                                      verifi.set(`verifi_kicklog_${msg.guild.id}`, resetKick)
                                                      return msg.channel.send("That wasn't a valid option! The prompt has exited and any settings you changed have been safely reset to what they were before you started this prompt.")

                                                    }

                                                    const owoEmbed5 = new Discord.MessageEmbed()
                                                    .setColor("#00FF00")
                                                    .setTitle("Log Settings (Finalized)")
                                                    .setDescription("By default, Verifi sends logs every time a member joins the server, fails verification but isn't kicked, and fails verification and is kicked. Additionally, a notification is sent when a bot is automatically verified. The following prompt will walk you through your log settings.")
                                                    .addField("Logging joins?", join)
                                                    .addField("Logging failures not resulting in a kick?", fail)
                                                    .addField("Logging failures resulting in a kick?", kick)
                                                    .addField("Logging automatic bot verifications?", bot)
                                                    msg.channel.send(owoEmbed5).then(() => {
                                                      msg.channel.send("Your changes have been recorded and are now in action!")
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

  }
}
