const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const intentsList = new Discord.Intents(Discord.Intents.ALL);
intentsList.remove("GUILD_PRESENCES")
const client = new Discord.Client({
ws: { intents: intentsList }
});
module.exports.realclient = client;
const bootversion = '1.1'
const verifi = new db.table(`verifi`)
module.exports.realverifi = verifi;
const Canvas = require('canvas')
const DBL = require('dblapi.js')
const dbl = new DBL('dbl-token', client);





client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
	const command = require(`./commands/${file}`);


	client.commands.set(command.name, command);
}



const cooldowns = new Discord.Collection();

client.on('guildMemberRemove', member => {

	if (member.user.id == '697523856973496430') {
		if (!(verifi.get(`verifi_syschannel_${member.guild.id}`) == null)) {
			var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
			member.guild.channels.cache.get(syslog).send("**Bye bye!** Verifi has been removed from your server. All blacklist data and settings have been erased. Your gift key has also been freed up to use on other servers.")
		}

		verifi.delete(`${member.guild.id}.bans`)
		verifi.delete(`verifi_role_${member.guild.id}`)
		verifi.delete(`verifi_botver_${member.guild.id}`)
		verifi.delete(`verifi_status_${member.guild.id}`)
		verifi.delete(`verifi_joinlog_${member.guild.id}`)
		verifi.delete(`verifi_kicklog_${member.guild.id}`)
		verifi.delete(`verifi_kickmem_${member.guild.id}`)
		verifi.delete(`verifi_message_${member.guild.id}`)
		verifi.delete(`verifi_onestep_${member.guild.id}`)
		verifi.delete(`verifi_remrole_${member.guild.id}`)
		verifi.delete(`verifi_modrole_${member.guild.id}`)
		verifi.delete(`verifi_textcolor_${member.guild.id}`)
		verifi.delete(`verifi_syschannel_${member.guild.id}`)
		verifi.delete(`verifi_customprefix_${member.guild.id}`)
		verifi.delete(`verifi_failnokicklog_${member.guild.id}`)
		verifi.delete(`premium_${member.guild.id}`)

    verifi.add(`premiumcount`, -1)

    verifi.delete(`premium_${member.guild.id}`)
	}

})

client.on("guildDelete", guild => {
	verifi.delete(`${guild.id}.bans`)
	verifi.delete(`verifi_role_${guild.id}`)
	verifi.delete(`verifi_botver_${guild.id}`)
	verifi.delete(`verifi_status_${guild.id}`)
	verifi.delete(`verifi_joinlog_${guild.id}`)
	verifi.delete(`verifi_kicklog_${guild.id}`)
	verifi.delete(`verifi_kickmem_${guild.id}`)
	verifi.delete(`verifi_message_${guild.id}`)
	verifi.delete(`verifi_onestep_${guild.id}`)
	verifi.delete(`verifi_remrole_${guild.id}`)
	verifi.delete(`verifi_modrole_${guild.id}`)
	verifi.delete(`verifi_textcolor_${guild.id}`)
	verifi.delete(`verifi_syschannel_${guild.id}`)
	verifi.delete(`verifi_customprefix_${guild.id}`)
	verifi.delete(`verifi_failnokicklog_${guild.id}`)
	verifi.delete(`premium_${guild.id}`)

	verifi.add(`premiumcount`, -1)

	verifi.delete(`premium_${guild.id}`)
});

client.once('ready', () => {
	setInterval(() => {
		if (verifi.get('maintenance') == '1') {
			client.user.setStatus('idle')
			client.user.setActivity(`under maintenance! Bot may be unstable from the force of boob's kisses. See why at https://discord.gg/cRvsBpA`, { type: 'PLAYING' })
		} else {
client.user.setStatus('online')
client.user.setActivity(`for new members in ${client.guilds.cache.size} servers | Mention me for help | Or DM me if you're boob <3`, { type: 'WATCHING' })
}
}, 60000)

// TURN ON IF NOT RUNNING BETA TOKEN

	console.log('Code functioning, requesting DBL API...');

	setInterval(() => {
         dbl.postStats(client.guilds.size);
     }, 900000);



		 console.log("DBL posting interval established!")




		 console.log("Successfully booted Verifi.")
		 console.log("Listening on " + client.guilds.cache.size + " servers. Woo-hoo!")
		 console.log("Boot completed at " + Date())

});

dbl.on('posted', () => {
  console.log('Server count posted to DBL!');
})

setInterval(() => {
var mem = 0;
client.guilds.cache.each(guild => {
if (!(guild.id == '446425626988249089' || guild.id == '450100127256936458' || guild.id == '264445053596991498' || guild.id == '110373943822540800')) {
mem = mem + guild.memberCount
}
})

         client.guilds.cache.get('705471982593900657').channels.cache.get('724360635151810650').send(`Server count: ${client.guilds.cache.size}\nVerified attempts: ${verifi.get(`verifi_totalver`)}\nBlocked attempts: ${verifi.get(`verifi_totalstop`)}\nMembers in all servers: ${String(mem)}`)
     }, 7200000);	//7200000


client.on('guildMemberAdd', member => {

try {

	if (['110373943822540800', '446425626988249089'].includes(member.guild.id)) return;

if (verifi.get(`verifi_disabled_${member.guild.id}`) == true) return;

var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)

var bans = verifi.get(`${member.guild.id}.bans`)

if (bans != null) {
	if (bans.indexOf(member.user.id) !== -1) {
		member.send("Sorry, you're on this server's blacklist! You have been banned from the server.").then(() => {
			member.ban({ reason: "Tried to join while on the blacklist. Action performed automatically by Verifi."})

		if (verifi.get(`verifi_syschannel_${member.guild.id}`) !== null) {
			var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
			const banEmbed = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle('A member joined while on the blacklist and was banned.')
			.setDescription("If you'd like to remove this person from the blacklist, use `v!>pardon`. Note that adding or removing someone from the blacklist doesn't automatically ban or unban them.")
			.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
			.addField("Member User ID:", member.id)
				member.guild.channels.cache.get(syslog).send(banEmbed);
				return;

		}
	})
	}
	return;
}

if (member.user.bot) {

//1.6.2
	if (verifi.get(`verifi_autorole_bot_${member.guild.id}`) !== null) {

try {
var string3 = verifi.get(`verifi_autorole_bot_${member.guild.id}`)

		var role3 = member.guild.roles.cache.find(role => role.id == string3)
	member.roles.add(role3)
} catch (error) {
	error("Failed to assign an autorole to a bot. Does it still exist?")
}
	}

if (verifi.get(`verifi_botver_${member.guild.id}`) == '1') {

if (verifi.get(`verifi_syschannel_${member.guild.id}`) !== null) {
var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
const verEmbed = new Discord.MessageEmbed()
.setColor('#00FF00')
.setTitle('A bot was automatically verified on the server!')
.setDescription("Whenever a bot joins your server, it is automatically verified, as bots are obviously not able to complete verification.")
.addField("Bot Username + Tag:", member.user.username + '#' + member.user.discriminator)
.addField("Bot User ID:", member.id)
member.guild.channels.cache.get(syslog).send(verEmbed);
}

}




if (verifi.get(`verifi_role_${member.guild.id}`) !== null) {
	try {
	var string4 = verifi.get(`verifi_role_${member.guild.id}`)

	var role4 = member.guild.roles.cache.find(role => role.id == string4)
		member.roles.add(role4)
	} catch (error) {
		error("Unable to add and/or remove a role from a member. Does it still exist?")
	}
}


if (verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {
	try {
var string5 = verifi.get(`verifi_remrole_${member.guild.id}`)
	var role5 = member.guild.roles.cache.find(role => role.id == string5)
	member.roles.remove(role5)
} catch (error) {
	error("Unable to add and/or remove a role from a member. Does it still exist?")
}
}


return;
}

if (verifi.get(`verifi_autorole_member_${member.guild.id}`) !== null) {
			try {
var string8 = verifi.get(`verifi_autorole_member_${member.guild.id}`)
			var role8 = member.guild.roles.cache.find(role => role.id == string8)
	member.roles.add(role8)
} catch (error) {
	error("Unable to add an autorole to a member. Does it still exist?")
}
		}


// lockdown top check
if (verifi.get(`verifi_lockdown_${member.guild.id}`)) {
		if (!verifi.get(`verifi_lockdown_${member.guild.id}_data_queue`)) return member.send(":x: This server is in a hard lockdown! Rejoin once the server is not locked down to attempt verification.")
		if (verifi.get(`verifi_lockdown_${member.guild.id}_data.list`) != null) {
			if (verifi.get(`verifi_lockdown_${member.guild.id}_data.list`).includes(member.user.id)) return member.send(":warning: You're already on the lockdown list! When an admin turns off lockdown, you will be verified. :warning:")
		}
	if (verifi.get(`verifi_lockdown_${member.guild.id}.list`) != null) {
		if (verifi.get(`premium_${msg.guild.id}`)) {
			if (verifi.get(`verifi_lockdown_${member.guild.id}.list`).length > 399) {
				return member.send(":warning: This server is in lockdown mode, and their lockdown list is full. This means you'll need to rejoin and verify later to gain access to the server. :warning:")
			}
		} else {
			if (verifi.get(`verifi_lockdown_${member.guild.id}.list`).length > 199) {
				return member.send(":warning: This server is in lockdown mode, and their lockdown list is full. This means you'll need to rejoin and verify later to gain access to the server. :warning:")
			}
		}

}
}



function error(error) {
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) !== null) {
		const errEmbed = new Discord.MessageEmbed()
		.setColor("#FF0000")
		.setTitle(":x: An error occured!")
		.setDescription("An error occured while handling a verification prompt. Additional output is likely listed below.")
		.addField("Occured Handling User:", member.user.username + "#" + member.user.discriminator + " | User ID: " + member.user.id)
		.addField("Provided Error Description:", error)
		client.guilds.cache.get(member.guild.id).channels.cache.get(verifi.get(`verifi_syschannel_${member.guild.id}`)).send(errEmbed);
	}
}




function verify() {

	if (verifi.get(`verifi_lockdown_${member.guild.id}`)) {
		if (verifi.get(`verifi_lockdown_${member.guild.id}_data_queue`)) {
		if (verifi.get(`verifi_lockdown_${member.guild.id}_data.list`) != null) {
			if (verifi.get(`verifi_lockdown_${member.guild.id}_data.list`).includes(member.user.id)) return member.send(":warning: You're already on the lockdown list! When an admin turns off lockdown, you will be verified. :warning:")
		}
	verifi.push(`verifi_lockdown_${member.guild.id}_data.list`, member.user.id)
	return member.send(":warning: This server is in lockdown mode! Your verification has been recorded and you will be given access to the server when an admin turns off lockdown. :warning:");
}
}

	if (verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {
		try {
var string7 = verifi.get(`verifi_remrole_${member.guild.id}`)
var role7 = member.guild.roles.cache.find(role => role.id == string7)
		member.roles.remove(role7)
	} catch (error) {
		error("Unable to add and/or remove a role from a member. Do I have permission and does it still exist?")
	}
	}
if (verifi.get(`verifi_role_${member.guild.id}`) !== null) {
	try {
	var string6 = verifi.get(`verifi_role_${member.guild.id}`)
	var role6 = member.guild.roles.cache.find(role => role.id == string6)
	member.roles.add(role6)
} catch (error) {
	error("Unable to add and/or remove a role from a member. Do I have permission and does it still exist?")
}
}

member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")

if (verifi.get(`verifi_syschannel_${member.guild.id}`) !== null) {
var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
const verEmbed = new Discord.MessageEmbed()
.setColor('#00FF00')
.setTitle('A member verified on the server!')
.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
.addField("Member User ID:", member.id)
member.guild.channels.cache.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}

}

function fail() {

	if (verifi.get(`verifi_timeoutcount_${member.guild.id}_${member.id}`) == null || verifi.get(`verifi_timeoutcount_${member.guild.id}`) < 1) {
		setTimeout(
			function(){
			 verifi.delete(`verifi_timeoutcount_${member.guild.id}_${member.id}`)
		 }, 900000);
	}
		verifi.add(`verifi_timeoutcount_${member.guild.id}_${member.id}`, 1)

		if (verifi.get(`verifi_timeoutcount_${member.guild.id}_${member.id}`) > 4) {
			member.send("You have failed to complete verification 5 times within 15 minutes! You have been automatically banned from the server.").then(() => {
				member.ban({ reason: 'Failed verification 5 times within 15 minutes. Action performed automatically by Verifi.' })
				if (verifi.get(`verifi_syschannel_${member.guild.id}`) !== null && verifi.get(`verifi_kicklog_${member.guild.id}`) !== null) {
				var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
				const deadEmbed = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setTitle('A member was banned from the server for failing verification 5 times in 15 minutes.')
				.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
				.addField("Member User ID:", member.id)
					member.guild.channels.cache.get(syslog).send(deadEmbed);
				}
				return;
			})

		}

	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
		member.send("That was incorrect. You will now be kicked from the server.").then(() => {
		member.kick()
		if (verifi.get(`verifi_syschannel_${member.guild.id}`) !== null && verifi.get(`verifi_kicklog_${member.guild.id}`) !== null) {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
		const kickEmbed = new Discord.MessageEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
		.addField("Member User ID:", member.id)
			member.guild.channels.cache.get(syslog).send(kickEmbed);
		}

	})
	} else {
		member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${member.guild.id}`) !== null && verifi.get(`verifi_failnokicklog_${member.guild.id}`) !== null) {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
		const oofEmbed = new Discord.MessageEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
		.addField("Member User ID:", member.id)
			member.guild.channels.cache.get(syslog).send(oofEmbed);
		}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}

}

} catch (error) {

member.send(":x: We ran into some issues.")

}




		const canvas = Canvas.createCanvas(700, 250);
const ctx = canvas.getContext('2d');

if (verifi.get(`verifi_verimg_${member.guild.id}`) == null) {
	ctx.fillStyle = '#7F7F7F'
	ctx.fillRect(0, 0, canvas.width, canvas.height);
} else {
	ctx.fillStyle = verifi.get(`verifi_verimg_${member.guild.id}`);
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Select the font size and  type from one of the natively available fonts

ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px serif';
// Select the style that will be used to fill the text in
if (verifi.get(`verifi_textcolor_${member.guild.id}`) == null) {
	ctx.fillStyle = '#ffffff';
} else {
	ctx.fillStyle = verifi.get(`verifi_textcolor_${member.guild.id}`);
}
// rotate text
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.03)
if (rotatevar == 1) ctx.rotate(-0.03)
// Actually fill the text with a solid color

var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar1 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
	var ranChar1 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar1, 212, 135)
ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.03)
if (rotatevar == 1) ctx.rotate(-0.03)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar2 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
	var ranChar2 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar2, 262, 135)
ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.03)
if (rotatevar == 1) ctx.rotate(-0.03)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar3 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
	var ranChar3 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar3, 312, 135)
ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.03)
if (rotatevar == 1) ctx.rotate(-0.03)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar4 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
	var ranChar4 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar4, 362, 135)
ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.03)
if (rotatevar == 1) ctx.rotate(-0.03)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar5 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
	var ranChar5 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar5, 412, 135)



ctx.beginPath();
ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();

//    	const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({ format: 'jpg' }));
//  	ctx.drawImage(avatar, 25, 25, 200, 200);

const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'captcha.png');


const memID = member.id

if (verifi.get(`verifi_onestep_${member.guild.id}`) == null && verifi.get(`verifi_message_${member.guild.id}`) == null) {
member.send("Please send a message in this DM with the characters you see below to begin verification for " + member.guild.name + " (Verification Step 1/1) **The characters should be all together, and with proper capitalization.**"
+ "\n*Why? This server has verification enabled to prevent automated raiding. This test proves that you are a human.*\n**:warning:** Keep in mind that the lowercase version of 'L' may look like a '1'! **:warning:**")

} else if (verifi.get(`verifi_onestep_${member.guild.id}`) == null && verifi.get(`verifi_message_${member.guild.id}`) !== null) {
member.send("Please send a message in this DM with the characters you see below to begin verification for " + member.guild.name + " (Verification Step 1/1) **The characters should be all together, and with proper capitalization.**"
+ `\nMessage from server: "${verifi.get(`verifi_message_${member.guild.id}`)}"`
+ "\n*Why? This server has verification enabled to prevent automated raiding. This test proves that you are a human.*\n**:warning:** Keep in mind that the lowercase version of 'L' may look like a '1'! **:warning:**")
} else if (verifi.get(`verifi_onestep_${member.guild.id}`) !== null && verifi.get(`verifi_message_${member.guild.id}`) !== null) {
member.send("Please send a message in this DM with the characters you see below to begin verification for " + member.guild.name + " (Verification Step 1/2) **The characters should be all together, and with proper capitalization.**"
+ `\nMessage from server: "${verifi.get(`verifi_message_${member.guild.id}`)}"`
+ "\n*Why? This server has verification enabled to prevent automated raiding. This test proves that you are a human.*\n**:warning:** Keep in mind that the lowercase version of 'L' may look like a '1'! **:warning:**")
} else {
member.send("Please send a message in this DM with the characters you see below to begin verification for " + member.guild.name + " (Verification Step 1/2) **The characters should be all together, and with proper capitalization.**"
+ "\n*Why? This server has verification enabled to prevent automated raiding. This test proves that you are a human.*\n**:warning:** Keep in mind that the lowercase version of 'L' may look like a '1'! **:warning:**")
}



var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)

const filter = response => {
						 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
					 };
					 function send() {
		setTimeout(function(){
					 try {
					 member.send(attachment)
					 .then(msg => {
							msg.channel.awaitMessages(filter, { max: 1, time: 240000, errors: ['time'] })
								.then(collected => {
										if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {

											if (verifi.get(`verifi_onestep_${member.guild.id}`) == null) {

												verify()
												return;
											}


											msg.channel.send("Excellent job! Please now complete step 2 to finish verification:")

											var ranPromptNum2 = Math.round(Math.random() * (10 - 1) + 1)
											switch (ranPromptNum2) {
											case 1:

																																			const filter21 = (reaction, user) => {
												return ['🐱', '👎', '🍉'].includes(reaction.emoji.name) && user.id === memID;
											}
														member.send("React with the emoji that matches the following description: *A common domestic house pet.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🐱')
															.then(() => msg.react('👎'))
															.then(() => msg.react('🍉'))
															.then(() => {


															msg.awaitReactions(filter21, { max: 1, time: 60000, errors: ['time'] })
													.then(collected => {
														const reaction = collected.first()

														if (reaction.emoji.name === '🐱') {
															verify()
														}
														if (reaction.emoji.name === '👎') {
															fail()
														}
														if (reaction.emoji.name === '🍉') {
															fail()
														}

											})
											})})

											break;

											case 2:



												const filter22 = (reaction, user) => {
												return ['😅', '💩', '😡'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *An angry face.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('😅')
												.then(() => msg.react('💩'))
												.then(() => msg.react('😡'))
												.then(() => {


												msg.awaitReactions(filter22, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '😡') {
													verify()
												}
												if (reaction.emoji.name === '💩') {
												fail()
												}
												if (reaction.emoji.name === '😅') {
												fail()
												}

												})
												})})



											break;

											case 3:



												const filter23 = (reaction, user) => {
												return ['🍴', '😬', '🙌'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *Two utensils used for consuming food.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('😬')
												.then(() => msg.react('🍴'))
												.then(() => msg.react('🙌'))
												.then(() => {


												msg.awaitReactions(filter23, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '🍴') {
														verify()
												}
												if (reaction.emoji.name === '😬') {
												fail()
												}
												if (reaction.emoji.name === '🙌') {
												fail()
												}

												})
												})})



											break;

											case 4:



												const filter24 = (reaction, user) => {
												return ['🌓', '😬', '🦴'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *A part of the human body that forms a skeleton.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('🌓')
												.then(() => msg.react('😬'))
												.then(() => msg.react('🦴'))
												.then(() => {


												msg.awaitReactions(filter24, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '🦴') {
										verify()
												}
												if (reaction.emoji.name === '🌓') {
												fail()
												}
												if (reaction.emoji.name === '😬') {
												fail()
												}

												})
												})})



											break;

											case 5:



												const filter25 = (reaction, user) => {
												return ['🤥', '🍬', '😫'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *A piece of candy said to help concentration.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('🤥')
												.then(() => msg.react('🍬'))
												.then(() => msg.react('😫'))
												.then(() => {


												msg.awaitReactions(filter25, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '🍬') {
													verify()
												}
												if (reaction.emoji.name === '🤥') {
												fail()
												}
												if (reaction.emoji.name === '😫') {
												fail()
												}

												})
												})})



											break;

											case 6:



												const filter26 = (reaction, user) => {
												return ['🐉', '😫', '🍉'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *A piece of fruit with a red interior and green exterior.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('🐉')
												.then(() => msg.react('😫'))
												.then(() => msg.react('🍉'))
												.then(() => {


												msg.awaitReactions(filter26, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '🍉') {
													verify()
												}
												if (reaction.emoji.name === '🐉') {
												fail()
												}
												if (reaction.emoji.name === '😫') {
												fail()
												}

												})
												})})



											break;

											case 7:



												const filter27 = (reaction, user) => {
												return ['🐝', '🤯', '🍉'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *A human organ used for tasting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('🤯')
												.then(() => msg.react('🐝'))
												.then(() => msg.react('👅'))
												.then(() => {


												msg.awaitReactions(filter27, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '👅') {
													verify()
												}
												if (reaction.emoji.name === '🐝') {
												fail()
												}
												if (reaction.emoji.name === '🤯') {
												fail()
												}

												})
												})})



											break;

											case 8:



												const filter28 = (reaction, user) => {
												return ['🦴', '🙌', '🔪'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *An object used for cutting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.* *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('🔪')
												.then(() => msg.react('🦴'))
												.then(() => msg.react('🙌'))
												.then(() => {


												msg.awaitReactions(filter28, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '🔪') {
													verify()
												}
												if (reaction.emoji.name === '🦴') {
												fail()
												}
												if (reaction.emoji.name === '🙌') {
												fail()
												}

												})
												})})



											break;

											case 9:



												const filter29 = (reaction, user) => {
												return ['🤺', '🚗', '🐋'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *A four wheeled vehicle that travels along roads.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.* *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('🤺')
												.then(() => msg.react('🚗'))
												.then(() => msg.react('🐋'))
												.then(() => {


												msg.awaitReactions(filter29, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '🚗') {
													verify()
												}
												if (reaction.emoji.name === '🐋') {
												fail()
												}
												if (reaction.emoji.name === '🤺') {
												fail()
												}

												})
												})})



											break;

											case 10:



												const filter30 = (reaction, user) => {
												return ['❤️', '🏍️', '🧩'].includes(reaction.emoji.name) && user.id === memID;
												}
												member.send("React with the emoji that matches the following description: *A two wheeled vechicle with an engine.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
												msg.react('🏍️')
												.then(() => msg.react('🧩'))
												.then(() => msg.react('❤️'))
												.then(() => {


												msg.awaitReactions(filter30, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
												const reaction = collected.first()

												if (reaction.emoji.name === '🏍️') {
													verify()
												}
												if (reaction.emoji.name === '🧩') {
												fail()
												}
												if (reaction.emoji.name === '❤️') {
												fail()
												}

												})
												})})



											break;


}




										} else {


											const filter9034 = response => {
																	 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
																 };

																 member.send("Incorrect. Please try again.").then(msg => {
																		msg.channel.awaitMessages(filter9034, { max: 1, time: 60000 }) //errors: ['time'] })
																			.then(collected => {
																					if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {

var ranPromptNum = Math.round(Math.random() * (10 - 1) + 1)

switch (ranPromptNum) {

case 1:

																						const filter7 = (reaction, user) => {
return ['🐱', '👎', '🍉'].includes(reaction.emoji.name) && user.id === memID;
}
	member.send("React with the emoji that matches the following description: *A common domestic house pet.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🐱')
		.then(() => msg.react('👎'))
		.then(() => msg.react('🍉'))
		.then(() => {


		msg.awaitReactions(filter7, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🐱') {
		verify()
	}
	if (reaction.emoji.name === '👎') {
		fail()
	}
	if (reaction.emoji.name === '🍉') {
		fail()
	}

})
})})

break;

case 2:



const filter8 = (reaction, user) => {
return ['😅', '💩', '😡'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *An angry face.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('😅')
.then(() => msg.react('💩'))
.then(() => msg.react('😡'))
.then(() => {


msg.awaitReactions(filter8, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '😡') {
verify()
}
if (reaction.emoji.name === '💩') {
fail()
}
if (reaction.emoji.name === '😅') {
fail()
}

})
})})



break;

case 3:



const filter9 = (reaction, user) => {
return ['🍴', '😬', '🙌'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *Two utensils used for consuming food.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('😬')
.then(() => msg.react('🍴'))
.then(() => msg.react('🙌'))
.then(() => {


msg.awaitReactions(filter9, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '🍴') {
verify()
}
if (reaction.emoji.name === '😬') {
fail()
}
if (reaction.emoji.name === '🙌') {
fail()
}

})
})})



break;

case 4:



const filter10 = (reaction, user) => {
return ['🌓', '😬', '🦴'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *A part of the human body that forms a skeleton.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('🌓')
.then(() => msg.react('😬'))
.then(() => msg.react('🦴'))
.then(() => {


msg.awaitReactions(filter10, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '🦴') {
verify()
}
if (reaction.emoji.name === '🌓') {
fail()
}
if (reaction.emoji.name === '😬') {
fail()
}

})
})})



break;

case 5:



const filter11 = (reaction, user) => {
return ['🤥', '🍬', '😫'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *A piece of candy said to help concentration.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('🤥')
.then(() => msg.react('🍬'))
.then(() => msg.react('😫'))
.then(() => {


msg.awaitReactions(filter11, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '🍬') {
verify()
}
if (reaction.emoji.name === '🤥') {
fail()
}
if (reaction.emoji.name === '😫') {
fail()
}

})
})})



break;

case 6:



const filter12 = (reaction, user) => {
return ['🐉', '😫', '🍉'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *A piece of fruit with a red interior and green exterior.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('🐉')
.then(() => msg.react('😫'))
.then(() => msg.react('🍉'))
.then(() => {


msg.awaitReactions(filter12, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '🍉') {
verify()
}
if (reaction.emoji.name === '🐉') {
fail()
}
if (reaction.emoji.name === '😫') {
fail()
}

})
})})



break;

case 7:



const filter13 = (reaction, user) => {
return ['🐝', '🤯', '🍉'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *A human organ used for tasting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('🤯')
.then(() => msg.react('🐝'))
.then(() => msg.react('👅'))
.then(() => {


msg.awaitReactions(filter13, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '👅') {
verify()
}
if (reaction.emoji.name === '🐝') {
fail()
}
if (reaction.emoji.name === '🤯') {
fail()
}

})
})})



break;

case 8:



const filter14 = (reaction, user) => {
return ['🦴', '🙌', '🔪'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *An object used for cutting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('🔪')
.then(() => msg.react('🦴'))
.then(() => msg.react('🙌'))
.then(() => {


msg.awaitReactions(filter14, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '🔪') {
verify()
}
if (reaction.emoji.name === '🦴') {
fail()
}
if (reaction.emoji.name === '🙌') {
fail()
}

})
})})



break;

case 9:



const filter15 = (reaction, user) => {
return ['🤺', '🚗', '🐋'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *A four wheeled vehicle that travels along roads.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('🤺')
.then(() => msg.react('🚗'))
.then(() => msg.react('🐋'))
.then(() => {


msg.awaitReactions(filter15, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '🚗') {
verify()
}
if (reaction.emoji.name === '🐋') {
fail()
}
if (reaction.emoji.name === '🤺') {
fail()
}

})
})})



break;

case 10:



const filter16 = (reaction, user) => {
return ['❤️', '🏍️', '🧩'].includes(reaction.emoji.name) && user.id === memID;
}
member.send("React with the emoji that matches the following description: *A two wheeled vechicle with an engine.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
msg.react('🏍️')
.then(() => msg.react('🧩'))
.then(() => msg.react('❤️'))
.then(() => {


msg.awaitReactions(filter16, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
const reaction = collected.first()

if (reaction.emoji.name === '🏍️') {
verify()
}
if (reaction.emoji.name === '🧩') {
fail()
}
if (reaction.emoji.name === '❤️') {
fail()
}

})
})})



break;

}

																					} else {
																						fail()
																					}
										})

									})
								}





								})
								//.catch(collected => {
									//member.send("**You didn't respond to the captcha in time!** You can rejoin the server to try verification again, but you have been automatically kicked.").then(() => {
									//	member.kick("Didn't respond to the verification prompt in time. Action performed automatically by Verifi.")
									//	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {
//
									//	} else {
									//	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
									//	const kickedEmbed = new Discord.MessageEmbed()
									//	.setColor('#FF0000')
									//	.setTitle('A member was kicked from the server for not responding to the verification prompt in time.')
									//	.setDescription('They can rejoin if they want to attempt verification again.')
									//	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
									//	.addField("Member User ID:", member.id)
									//		member.guild.channels.cache.get(syslog).send(kickedEmbed);
									//	}

//
//
							//})
							//})
							})




} catch (err) {
iter++;
if (iter > 49) {
member.send(":x: We ran into an issue...")
return verify();
}
return send();
}
}, 800);
}



send()



		// VERIFICATION END
});

client.on('message', async msg => {

if (msg.author.bot) return;

if (msg.content == `like yes my sexy raccoon, let's drink monster and cuddle`) return msg.reply("sounds lovely~ gimme ur eyebags *nom nom*")

if (msg.content.includes(`boob`) && msg.content.includes(`~`)) return msg.reply("boob's eyebags are mine! ~~***arf arf***~~")


	if (msg.mentions.users.first()) {
	if (msg.mentions.users.first().id == '697523856973496430') {
		if (msg.channel.type !== 'dm') {
		if (verifi.get(`verifi_customprefix_${msg.guild.id}`) == null) {
			msg.channel.send("The prefix for the server you are currently in is `v!>`! This means the help command is `v!>help`.")
		} else {
			msg.channel.send("The prefix for the server you are currently in is `" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "`! This means the help command is `" + verifi.get(`verifi_customprefix_${msg.guild.id}`) + "help`.")
		}
		} else {
			msg.channel.send("Mention me again, but in a server, and I'll tell you the prefix for that server!")
		}
	}
}

if (msg.channel.type !== 'dm') {
if (verifi.get(`verifi_customprefix_${msg.guild.id}`) == null) {
	var prefix = `v!>`;
} else {
	var prefix = await verifi.get(`verifi_customprefix_${msg.guild.id}`);
}
} else {
	var prefix = `v!>`;
}

	if (!msg.content.startsWith(String((prefix)))) return;
	



	const args = msg.content.slice(String(prefix).length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);


if (msg.author.id != '386122458362806272') {
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(msg.author.id)) {
		const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return msg.reply(`You need to wait ${timeLeft.toFixed(1)} more second(s) before using \`${command.name}\` again.`);
	}
} else {
	timestamps.set(msg.author.id, now);
setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);
}

}
if (command.args && !args.length) {

let reply = `:x: This command requires arguments!`;

if (command.usage) {
	reply += "\n```\nProper usage: " + command.usage + "\n```"
}

return msg.channel.send(reply)

}


if (msg.channel.type !== 'dm') {
if (verifi.get(`verifi_modrole_${msg.guild.id}`) == null) {
 if (msg.member.hasPermission('MANAGE_GUILD')) {
if (Math.floor(Math.random() * (5 - 1 + 1 + 1)) == 3) {
	msg.channel.send("Want patchnotes, notifications for when Verifi will be going offline, and support for your issues with the bot? Join Verifi's discord server at: https://discord.gg/cRvsBpA")
}

}
} else {
 if (msg.member.roles.cache.has(verifi.get(`verifi_modrole_${msg.guild.id}`))) {
if (Math.floor(Math.random() * (5 - 1 + 1 + 1)) == 3) {
	msg.channel.send("Want patchnotes, notifications for when Verifi will be going offline, and support for your issues with the bot? Join Verifi's discord server at: https://discord.gg/cRvsBpA")
}

}
}
if (Math.floor(Math.random() * (20 - 1 + 1 + 1)) == 3) {
	msg.channel.send("||boob.. <3||")
}

}

//}

if (!["feedback", "help", "info", "invite", "ping", "preview", "problems", "stats"].includes(commandName)) {
if (msg.channel.type == 'dm') return msg.channel.send("This command needs to be run in a server text channel!")
try {
if (msg.guild.ownerID !== msg.author.id) {
if (verifi.get(`verifi_modrole_${msg.guild.id}`) == null) {
 if (!msg.member.hasPermission('MANAGE_GUILD')) return msg.channel.send("Uh oh, you don't have the required permissions to run this command. You have to have the **MANAGE SERVER** permission to change Verifi configuration settings.")
} else {
 if (!msg.member.roles.cache.has(verifi.get(`verifi_modrole_${msg.guild.id}`))) return msg.channel.send("Uh oh, you don't have the required permissions to run this command. You have to have the role a server administrator set to change Verifi configuration settings.")
}
}
} catch (err) {
msg.reply(":x: Failed to validate permissions! Please report this to Excuze.")
}
}




try {
 command.execute(msg, args);
} catch (error) {
	console.error(error);
	msg.reply('there was an error trying to execute that command!');
}

	// other commands...
});

client.login('token');
