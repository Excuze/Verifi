const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = new db.table(`verifi`)



module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	usage: '`[command name]`',
	cooldown: 2,
	async execute(msg, args) {
if (msg.channel.type !== 'dm') {
		if (verifi.get(`verifi_customprefix_${msg.guild.id}`) == null) {
			var prefix = `v!>`;
		} else {
			var prefix = await verifi.get(`verifi_customprefix_${msg.guild.id}`);
		}
	} else {
		var prefix = `v!>`;
	}
	var num;

if (args.length == 0) num = '1'
else num = args[0]

if (msg.channel.type != 'dm') msg.react('📩')

	switch (num) {
			case '1':
			var helpEmbed = new Discord.MessageEmbed()
			.setColor("87ceeb")
			.setThumbnail("https://cdn.discordapp.com/avatars/697523856973496430/edb658a89f441fbeef969527cabe3d4b.png?size=256")
			.setTitle("Help Page 1")
			.addField("❓ **Don't Know Where To Start?**", "Run `" + prefix + "info` for a quick guide on how to setup in just 6 messages!")
			.addField("**" + prefix + "quickstart:**",  "Run the Quick Start prompt. Covers all the basic configuration you need quickly and easily.")
			.addField("**" + prefix + "setrole <@role>:**",  "Allows you to set the role that users will be given after completing verification successfully.")
			.addField("**" + prefix + "setremovalrole <@role> OR `disable`:**",  "Allows you to set the role that will be removed from users after they complete verification successfully, or disable the removal role entirely.")
			.addField("**" + prefix + "setlogchannel <#channel> OR `disable`:**",  "Allows you to set the channel that bot actions will be logged in, or not have logs at all.")
			.addField("**" + prefix + "setkickstatus `Y` OR `N`:**",  "Allows you to set whether or not users will be kicked if they fail verification.")
			.addField("**" + prefix + "setmodrole <@role> OR `default`:**",  "Allows you to set what role is allowed to change the bot's settings.")
			.setFooter("Run `v!>help <page #>` to switch between pages.")
			msg.author.send(helpEmbed)
			.then(() => {
				msg.react('📩');
			})
			.catch(error => {
				msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
			});
			break;

			case '2':
			var helpEmbed = new Discord.MessageEmbed()
			.setColor("87ceeb")
			.setThumbnail("https://cdn.discordapp.com/avatars/697523856973496430/edb658a89f441fbeef969527cabe3d4b.png?size=256")
			.setTitle("Help Page 2")
	.addField("**" + prefix + "logs:**", "Allows you to customize what logs will be sent in the log channel.")
	.addField("**" + prefix + "preview:**", "Allows you to see what the verification process will look like to new members. The preview is interactive.")
	.addField("**" + prefix + "problems:**", "Shows you some common problems and solutions with the bot, so you can troubleshoot simple problems.")
	.addField("**" + prefix + "stats:**", "Shows you some statistics about the bot, including the bot's version and how many attempts have been blocked and verified globally.")
	.addField("**" + prefix + "privacy:**", "Allows you to choose whether or not verification attempts for your server will be added to the global number. There is no way of tracking this statistic back to a specific server or person, and it is on by default.")
	.addField("**" + prefix + "setsteps `1` OR `2`:**", "Allows you to set whether verification should be two steps long or one step long.")
	.setFooter("Run `v!>help <page #>` to switch between pages.")
	msg.author.send(helpEmbed)
	.then(() => {
		msg.react('📩');
	})
	.catch(error => {
		msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
	});
			break;

			case '3':
			var helpEmbed = new Discord.MessageEmbed()
			.setColor("87ceeb")
			.setThumbnail("https://cdn.discordapp.com/avatars/697523856973496430/edb658a89f441fbeef969527cabe3d4b.png?size=256")
			.setTitle("Help Page 3")
			.addField("**" + prefix + "ping:**", "Shows the bot's current ping.")
			.addField("**" + prefix + "textcolor <hex color code> OR `default`:**", "Allows you to set a custom color for the text in the verification prompt for your server.")
			.addField("**" + prefix + "backgroundcolor <accepted color> OR `default`:**", "Allows you to set a custom color for the background of your verification prompt. Accepted colors can be found by running the command with nothing after it.")
			.addField("**" + prefix + "vote:**", "Sends you a link to vote for the bot on top.gg! This unlocks some commands and also helps me out enormously.")
			.addField("**" + prefix + "feedback:**", "Sends you a link to fill out a feedback form for Verifi on what I can improve on and what you like with the bot.")
			.addField("**" + prefix + "setprefix <new prefix> OR `default`:**", "Allows you to set a custom prefix for Verifi in your server.")
			.setFooter("Run `v!>help <page #>` to switch between pages.")
			msg.author.send(helpEmbed)
			.then(() => {
				msg.react('📩');
			})
			.catch(error => {
				msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
			});
			break;

			case '4':
			var helpEmbed = new Discord.MessageEmbed()
			.setColor("87ceeb")
			.setThumbnail("https://cdn.discordapp.com/avatars/697523856973496430/edb658a89f441fbeef969527cabe3d4b.png?size=256")
			.setTitle("Help Page 3")
			.addField("**" + prefix + "blacklist <User ID>:**", "Allows you to ban users even if they left before you could ban them.")
			.addField("**" + prefix + "pardon <User ID>:**", "Allows you to remove a user from your blacklist.")
			.addField("**" + prefix + "redeem <code>:**", "Allows you to redeem a gift code given by Excuze for your server.")
			.addField("**" + prefix + "unredeem:**", "Removes the gift code effects from your server and allows you to use the code on a different server.")
			.addField("**" + prefix + "autoroles:**", "Lets you automatically give members or bots a role when they join your server (before verification).")
			.addField("**" + prefix + "setmessage <message> or `disable`:**", "Allows you to set or disable a custom message for verification.")
			.addField("**" + prefix + "disable:**", "Stops Verifi from sending a verification prompt to new members.")
			.addField("**" + prefix + "lockdown: [hard]**", "Lets you lock down your server, preventing new people from gaining access until you take the lockdown off. Without an argument, the lockdown will queue up members who verify and give them access when you take the lockdown off. Include hard to completely prevent people from verifying.")
			.addField("⚠️ Further Support", "Need further support?Join the official Verifi discord server at: https://discord.gg/cRvsBpA | Need a setup guide? Visit http://verifi.cf/setup#qsg")
			.setFooter("Run `v!>help <page #>` to switch between pages.")
			msg.author.send(helpEmbed)
			.then(() => {
				msg.react('📩');
			})
			.catch(error => {
				msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
			});
			break;

		}





}}
