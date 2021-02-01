const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = handler.realverifi;
const Canvas = require('canvas')

module.exports = {
  name: 'lockdown',
  cooldown: 15,
  description: 'Lockdown your server.',
  execute(msg, args) {



    if (verifi.get(`verifi_lockdown_${msg.guild.id}_data_queue`) == null) verifi.set(`verifi_lockdown_${msg.guild.id}_data_queue`, true)

    function error(error) {
    	if (verifi.get(`verifi_syschannel_${msg.guild.id}`) !== null) {
    		const errEmbed = new Discord.MessageEmbed()
    		.setColor("#FF0000")
    		.setTitle(":x: An error occured!")
    		.setDescription("An error occured while handling a verification prompt. Additional output is likely listed below.")
    		.addField("Occured Handling User:", msg.author.username + "#" + msg.author.discriminator + " | User ID: " + msg.author.id)
    		.addField("Provided Error Description:", error)
    		client.guilds.cache.get(msg.guild.id).channels.cache.get(verifi.get(`verifi_syschannel_${msg.guild.id}`)).send(errEmbed);
    	}
    }



    if (verifi.get(`verifi_lockdown_${msg.guild.id}`)) {
      verifi.set(`verifi_lockdown_${msg.guild.id}`, false)
      verifi.set(`verifi_lockdown_${msg.guild.id}_data_queue`, true)
      if (verifi.get(`verifi_lockdown_${msg.guild.id}_data_queue`)) {
      if (verifi.get(`verifi_lockdown_${msg.guild.id}_data.list`) != null) {
        var errored = 0;
        var list = verifi.get(`verifi_lockdown_${msg.guild.id}_data.list`);
        msg.channel.send(":cyclone: Verifying members who joined during the lockdown...").then(msg2 => {
      for (let i = 0; i < list.length; i++) {
      	try {

        	if (verifi.get(`verifi_remrole_${msg.guild.id}`) !== null) {
        		try {
        var string7 = verifi.get(`verifi_remrole_${msg.guild.id}`)
        var role7 = msg.guild.roles.cache.find(role => role.id == string7)
        		msg.guild.members.cache.get(list[i]).roles.remove(role7)
        	} catch (error) {
        		error("Unable to add and/or remove a role from a member. Do I have permission and does it still exist?")
        	}
        	}
        if (verifi.get(`verifi_role_${msg.guild.id}`) !== null) {
        	try {
        	var string6 = verifi.get(`verifi_role_${msg.guild.id}`)
        	var role6 = msg.guild.roles.cache.find(role => role.id == string6)
        	msg.guild.members.cache.get(list[i]).roles.add(role6)
        } catch (error) {
        	error("Unable to add and/or remove a role from a member. Do I have permission and does it still exist?")
        }
        }

        if (verifi.get(`verifi_syschannel_${msg.guild.id}`) !== null) {
        var syslog = verifi.get(`verifi_syschannel_${msg.guild.id}`)
        const verEmbed = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle('A member verified on the server!')
        .addField("Member Username + Tag:", msg.author.username + '#' + msg.author.discriminator)
        .addField("Member User ID:", msg.author.id)
        msg.member.guild.channels.cache.get(syslog).send(verEmbed);
        }
        if (verifi.get(`verifi_status_${msg.guild.id}`) == '1') {
        verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
        }

      } catch (error) {
        errored++;
      }
      }
      msg2.edit(":white_check_mark: Those who verified while the server was on lockdown have now received their role! " + errored + " member(s) were unaccounted for.")
    })
    }
    if (verifi.get(`verifi_lockdown_${msg.guild.id}_data.list`) != null) {
    verifi.delete(`verifi_lockdown_${msg.guild.id}_data.list`)
  }

    }
      msg.channel.send(":white_check_mark: Your server is no longer in lockdown mode!")
    } else {
      if (args.length > 0) {
        if (args[0].toLowerCase() == "hard" || args[0].toLowerCase() == "force") verifi.set(`verifi_lockdown_${msg.guild.id}_data_queue`, false)
        verifi.set(`verifi_lockdown_${msg.guild.id}`, true)
        msg.channel.send(":warning: **Your server is now hard locked down! No members will be able to verify until the lockdown ends.**")
      } else {
        verifi.set(`verifi_lockdown_${msg.guild.id}`, true)
        msg.channel.send(":warning: **Your server is now locked down! New members will have to wait until the lockdown ends to be verified.**")
      }

    }

  }
}
