const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = new db.table(`verifi`)



module.exports = {
	name: 'oldhelp',
	description: 'List all of my commands or info about a specific command.',
	usage: '`[command name]`',
	cooldown: 1,
	async execute(msg, args) {
if (msg.channel.type !== 'dm') {
		if (verifi.get(`verifi_customprefix_${msg.guild.id}`) == null || verifi.get(`verifi_customprefix_${msg.guild.id}`) == 'default') {
			var prefix = `v!>`;
		} else {
			var prefix = await verifi.get(`verifi_customprefix_${msg.guild.id}`);
		}
	} else {
		var prefix = `v!>`;
	}

		const data = [];
const { commands } = msg.client;

if (!args.length) {

if (msg.channel.type == 'dm') {

	const helpEmbed = new Discord.MessageEmbed()
	.setColor("87ceeb")
	.setThumbnail("https://cdn.discordapp.com/avatars/697523856973496430/edb658a89f441fbeef969527cabe3d4b.png?size=256")
	.setTitle("Help Page")
	.addField("❓ **Don't Know Where To Start?**", "Run `v!>info` for a quick guide on how to setup in just 6 messages!")
	.addField("✅ Setup", "**v!>quickstart:** Run the Quick Start prompt. Covers all the basic configuration you need quickly and easily.\n**v!>setrole <@role>:** Allows you to set the role that users will be given after completing verification successfully.\n**v!>setremovalrole <@role> OR `disable`:** Allows you to set the role that will be removed from users after they complete verification successfully, or disable the removal role feature.\n**v!>setlogchannel <#channel> OR `disable`:** Allows you to set the channel that bot actions will be logged in, or not have logs at all.\n**v!>setkickstatus `Y` OR `N`:** Allows you to set whether or not users will be kicked if they fail verification.\n**v!>setmodrole <@role> OR `default`:** Allows you to set what role is allowed to change the bot's settings.")
	.addField("⚙️ Utility", "**v!>logs:** Allows you to customize what logs will be sent in the log channel.\n**v!>preview:** Allows you to see what the verification process will look like to new members. The preview is interactive.\n**v!>problems:** Shows you some common problems and solutions with the bot, so you can troubleshoot simple problems.\n**v!>stats:** Shows you some statistics about the bot, including the bot's version and how many attempts have been blocked and verified globally.\n**v!>privacy:** Allows you to choose whether or not verification attempts for your server will be added to the global number. There is no way of tracking this statistic back to a specific server or person, and it is on by default.\n**v!>setsteps `1` OR `2`:** Allows you to set whether verification should be two steps long or one step long.")
	.addField("💡 Other", "**v!>ping:** Shows the bot's current ping.\n**v!>textcolor <hex color code> OR `default`:** Allows you to set a custom color for the text in the verification prompt for your server.\n**v!>backgroundcolor <accepted color> OR `default`:** Allows you to set a custom color for the background of your verification prompt. Accepted colors can be found by running the command with nothing after it.\n**v!>vote:** Sends you a link to vote for the bot on top.gg! This unlocks some commands and also helps me out enormously.\n**v!>feedback:** Sends you a link to fill out a feedback form for Verifi on what I can improve on and what you like with the bot.\n**v!>setprefix <new prefix> OR `default`:** Allows you to set a custom prefix for Verifi in your server.")
.addField("💡 More Other", "**v!>blacklist <User ID>:** Allows you to ban users even if they left before you could ban them.\n**v!>pardon <User ID>:** Allows you to remove a user from your blacklist.\n**v!>redeem <code>:** Allows you to redeem a gift code given by Excuze for your server.\n**v!>unredeem:** Removes the gift code effects from your server and allows you to use the code on a different server.\n**v!>autoroles:** Lets you automatically give members or bots a role when they join your server (before verification).\n**v!>setmessage <message> or `disable`:** Allows you to set or disable a custom message for verification.\n**v!>disable:** Stops Verifi from sending a verification prompt to new members.")
	.addField("⚠️ Further Support", "Need further support? Want to know when Verifi is updating and update patchnotes? Join the official Verifi discord server at: https://discord.gg/cRvsBpA | Need a setup guide? Visit http://verifi.epizy.com/setup#qsg")

	//data.push('Here\'s a list with all the commands you can use:');
//data.push(commands.map(command => '`' + command.name + '`').join(', '));
//data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command's use.`);
//data.push(`\n*Looking for support? You can join the official Verifi server at* https://discord.gg/cRvsBpA`);

msg.author.send(helpEmbed)//, { split: true })
.then(() => {
	//if (msg.channel.type === 'dm') return;
	msg.react('📩');
})
return;
}

if (verifi.get(`verifi_customprefix_${msg.guild.id}`) == null || verifi.get(`verifi_customprefix_${msg.guild.id}`) == 'v!>') {
	const helpEmbed = new Discord.MessageEmbed()
	.setColor("87ceeb")
	.setThumbnail("https://cdn.discordapp.com/avatars/697523856973496430/edb658a89f441fbeef969527cabe3d4b.png?size=256")
	.setTitle("Help Page")
	.addField("❓ **Don't Know Where To Start?**", "Run `v!>info` for a quick guide on how to setup in just 6 messages!")
	.addField("✅ Setup", "**v!>quickstart:** Run the Quick Start prompt. Covers all the basic configuration you need quickly and easily.\n**v!>setrole <@role>:** Allows you to set the role that users will be given after completing verification successfully.\n**v!>setremovalrole <@role> OR `disable`:** Allows you to set the role that will be removed from users after they complete verification successfully, or disable the removal role feature.\n**v!>setlogchannel <#channel> OR `disable`:** Allows you to set the channel that bot actions will be logged in, or not have logs at all.\n**v!>setkickstatus `Y` OR `N`:** Allows you to set whether or not users will be kicked if they fail verification.\n**v!>setmodrole <@role> OR `default`:** Allows you to set what role is allowed to change the bot's settings.")
	.addField("⚙️ Utility", "**v!>logs:** Allows you to customize what logs will be sent in the log channel.\n**v!>preview:** Allows you to see what the verification process will look like to new members. The preview is interactive.\n**v!>problems:** Shows you some common problems and solutions with the bot, so you can troubleshoot simple problems.\n**v!>stats:** Shows you some statistics about the bot, including the bot's version and how many attempts have been blocked and verified globally.\n**v!>privacy:** Allows you to choose whether or not verification attempts for your server will be added to the global number. There is no way of tracking this statistic back to a specific server or person, and it is on by default.\n**v!>setsteps `1` OR `2`:** Allows you to set whether verification should be two steps long or one step long.")
	.addField("💡 Other", "**v!>ping:** Shows the bot's current ping.\n**v!>textcolor <hex color code> OR `default`:** Allows you to set a custom color for the text in the verification prompt for your server.\n**v!>backgroundcolor <accepted color> OR `default`:** Allows you to set a custom color for the background of your verification prompt. Accepted colors can be found by running the command with nothing after it.\n**v!>vote:** Sends you a link to vote for the bot on top.gg! This unlocks some commands and also helps me out enormously.\n**v!>feedback:** Sends you a link to fill out a feedback form for Verifi on what I can improve on and what you like with the bot.\n**v!>setprefix <new prefix> OR `default`:** Allows you to set a custom prefix for Verifi in your server.")
.addField("💡 More Other", "**v!>blacklist <User ID>:** Allows you to ban users even if they left before you could ban them.\n**v!>pardon <User ID>:** Allows you to remove a user from your blacklist.\n**v!>redeem <code>:** Allows you to redeem a gift code given by Excuze for your server.\n**v!>unredeem:** Removes the gift code effects from your server and allows you to use the code on a different server.\n**v!>autoroles:** Lets you automatically give members or bots a role when they join your server (before verification).\n**v!>setmessage <message> or `disable`:** Allows you to set or disable a custom message for verification.\n**v!>disable:** Stops Verifi from sending a verification prompt to new members.")
	.addField("⚠️ Further Support", "Need further support? Want to know when Verifi is updating and update patchnotes? Join the official Verifi discord server at: https://discord.gg/cRvsBpA | Need a setup guide? Visit http://verifi.epizy.com/setup#qsg")

	//data.push('Here\'s a list with all the commands you can use:');
//data.push(commands.map(command => '`' + command.name + '`').join(', '));
//data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command's use.`);
//data.push(`\n*Looking for support? You can join the official Verifi server at* https://discord.gg/cRvsBpA`);

msg.author.send(helpEmbed)//, { split: true })
.then(() => {
	//if (msg.channel.type === 'dm') return;
	msg.react('📩');
})
return;
}
msg.author.send(":warning: **The current help page is showing commands with the prefix set for the server you ran the help command in. This prefix will not work in other servers unless you set your prefix to this one.** :warning:")
	const helpEmbed = new Discord.MessageEmbed()
	.setColor("87ceeb")
	.setThumbnail("https://cdn.discordapp.com/avatars/697523856973496430/edb658a89f441fbeef969527cabe3d4b.png?size=256")
	.setTitle("Help Page")
	.addField("❓ **Don't Know Where To Start?**", "Run `" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "info` for a quick guide on how to setup in just 6 messages!")
	.addField("✅ Setup", "**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "quickstart:** Run the Quick Start prompt. Covers all the basic configuration you need quickly and easily.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setrole <@role>:** Allows you to set the role that users will be given after completing verification successfully.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setremovalrole <@role> OR `disable`:** Allows you to set the role that will be removed from users after they complete verification successfully, or disable the removal role feature.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setlogchannel <#channel> OR `disable`:** Allows you to set the channel that bot actions will be logged in, or not have logs at all.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setkickstatus `Y` OR `N`:** Allows you to set whether or not users will be kicked if they fail verification.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setmodrole <@role> OR `default`:** Allows you to set what role is allowed to change the bot's settings.")
	.addField("⚙️ Utility", "**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "logs:** Allows you to customize what logs will be sent in the log channel.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "preview:** Allows you to see what the verification process will look like to new members. The preview is interactive.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "problems:** Shows you some common problems and solutions with the bot, so you can troubleshoot simple problems.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "stats:** Shows you some statistics about the bot, including the bot's version and how many attempts have been blocked and verified globally.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "privacy:** Allows you to choose whether or not verification attempts for your server will be added to the global number. There is no way of tracking this statistic back to a specific server or person, and it is on by default.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setsteps `1` OR `2`:** Allows you to set whether verification should be two steps long or one step long.")
	.addField("💡 Other", "**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "ping:** Shows the bot's current ping.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "textcolor <hex color code> OR `default`:** Allows you to set a custom color for the text in the verification prompt for your server.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "backgroundcolor <accepted color> OR `default`:** Allows you to set a custom color for the background of your verification prompt. Accepted colors can be found by running the command with nothing after it.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "vote:** Sends you a link to vote for the bot on top.gg! This unlocks some commands and also helps me out enormously.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "feedback:** Sends you a link to fill out a feedback form for Verifi on what I can improve on and what you like with the bot.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setprefix <new prefix> OR `default`:** Allows you to set a custom prefix for Verifi in your server.")
	.addField("💡 More Other", "**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "blacklist <User ID>:** Allows you to ban users even if they left before you could ban them.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "pardon <User ID>:** Allows you to remove a user from your blacklist.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "redeem <code>:** Allows you to redeem a gift code given by Excuze for your server.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "unredeem:** Removes the gift code effects from your server and allows you to use the code on a different server.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "autoroles:** Lets you automatically give members or bots a role when they join your server (before verification).\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "setmessage <message> or `disable`:** Allows you to set or disable a custom message for verification.\n**" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "disable:** Stops Verifi from sending a verification prompt to new members.")
	.addField("⚠️ Further Support", "Need further support? Want to know when Verifi is updating and update patchnotes? Join the official Verifi discord server at: https://discord.gg/cRvsBpA | Need a setup guide? Visit http://verifi.epizy.com/setup#qsg")

	//data.push('Here\'s a list with all the commands you can use:');
//data.push(commands.map(command => '`' + command.name + '`').join(', '));
//data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command's use.`);
//data.push(`\n*Looking for support? You can join the official Verifi server at* https://discord.gg/cRvsBpA`);

msg.author.send(helpEmbed)//, { split: true })
.then(() => {
	//if (msg.channel.type === 'dm') return;
	msg.react('📩');
})
.catch(error => {
//	console.error(`Could not send help DM to ${msg.author.tag}.\n`, error);
	msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
});



}
if (args.length == 0) return;
const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return msg.channel.send('That\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

msg.channel.send(data, { split: true });



	},
};
