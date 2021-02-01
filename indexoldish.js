const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
const bootversion = '1.1'
const verifi = new db.table(`verifi`)
const Canvas = require('canvas')
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzUyMzg1Njk3MzQ5NjQzMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkwNDU3MTE1fQ.kEiYvryebQfYlXnbQnmpblDsO-pFhOVhl2wdtvxNf0Q', client);




var prefix = `v!>`;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
	const command = require(`./commands/${file}`);


	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}



const cooldowns = new Discord.Collection();

client.once('ready', () => {
client.user.setActivity('for new members | v!>help', { type: 'WATCHING' })



	console.log('Code functioning, requesting DBL API...');

	setInterval(() => {
         dbl.postStats(client.guilds.size);
     }, 900000);

		 console.log("DBL posting interval established!")
		 console.log("Successfully booted Verifi!")
		 console.log("Listening on " + client.guilds.size + " servers.")
		 console.log("Verbose boot completed at " + Date())

//client.guilds.forEach(guild => { console.log(guild.name) })
});

dbl.on('posted', () => {
  console.log('Server count posted to DBL!');
})


client.on('guildMemberAdd', async member => {

if (member.guild.id == '574943603466436628') return;

if (verifi.get(`verifi_joinlog_${member.guild.id}`) == null) verifi.set(`verifi_joinlog_${member.guild.id}`, '1')
if (verifi.get(`verifi_failnokicklog_${member.guild.id}`) == null) verifi.set(`verifi_failnokicklog_${member.guild.id}`, '1')
if (verifi.get(`verifi_kicklog_${member.guild.id}`) == null) verifi.set(`verifi_kicklog_${member.guild.id}`, '1')
if (verifi.get(`verifi_botver_${member.guild.id}`) == null) verifi.set(`verifi_botver_${member.guild.id}`, '1')


var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)

	if (verifi.get(`verifi_status_${member.guild.id}`) == null) verifi.set(`verifi_status_${member.guild.id}`, '1')

	if (verifi.get(`verifi_role_${member.guild.id}`) == null || verifi.get(`verifi_role_${member.guild.id}`) == 'off') var missing1 = '1'
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == null || verifi.get(`verifi_role_${member.guild.id}`) == 'off') var missing2 = '1'

if (missing1 == '1' || missing2 == '1'){
if (missing1 == '1' && missing2 == '1') {
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {
return member.guild.owner.send("Your server needs to have `v!>setrole` and `v!>setkickstatus` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
	} else {
return	member.guild.channels.get(syslog).send(member.guild.owner + ", your server needs to have `v!>setrole` and `v!>setkickstatus` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
}
} else if (missing1 == '1') {
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {
		return member.guild.owner.send("Your server needs to have `v!>setrole` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
	} else {
	return member.guild.channels.get(syslog).send(member.guild.owner + ", your server needs to have `v!>setrole` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
}
} else if (missing2 == '1') {
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {
		 member.guild.owner.send("Your server needs to have `v!>setkickstatus` configured for verification to work properly! A member just joined and was auto-verified because these settings need to be configured for verification to work properly.")
	} else {
	 member.guild.channels.get(syslog).send(member.guild.owner + ", your server needs to have `v!>setkickstatus` configured for verification to work properly! A member just joined and was auto-verified because these settings need to be configured for verification to work properly.")
}
	member.addRole(verifi.get(`verifi_role_${member.guild.id}`))

if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

	return member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

}
return;
}

}

if (member.user.bot) {

if (verifi.get(`verifi_botver_${member.guild.id}`) == '1') {

var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
const verEmbed = new Discord.RichEmbed()
.setColor('#00FF00')
.setTitle('A bot was automatically verified on the server!')
.setDescription("Whenever a bot joins your server, it is automatically verified, as bots are obviously not able to complete verification.")
.addField("Bot Username + Tag:", member.user.username + '#' + member.user.discriminator)
.addField("Bot User ID:", member.id)
member.guild.channels.get(syslog).send(verEmbed);

}

member.addRole(verifi.get(`verifi_role_${member.guild.id}`))

if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

	return member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

}



}

	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_joinlog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const joinEmbed = new Discord.RichEmbed()
	.setColor('#0000FF')
	.setTitle('A new member joined the server!')
	.setDescription('Verification will now commence.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
    member.guild.channels.get(syslog).send(joinEmbed);
}



		//VERIFICATION START

		const canvas = Canvas.createCanvas(700, 250);
		const ctx = canvas.getContext('2d');

		const background = await Canvas.loadImage("./lol.png");
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

		ctx.strokeStyle = '#74037b';
		ctx.strokeRect(0, 0, canvas.width, canvas.height);

		// Select the font size and  type from one of the natively available fonts

		ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
		// Select the style that will be used to fill the text in
		ctx.fillStyle = '#ffffff';
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
		ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
		ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
		ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
		ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
//		ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
//		var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
//		if (rotatevar == 2) ctx.rotate(0.03)
	//	if (rotatevar == 1) ctx.rotate(-0.03)
	//	var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

	//	if (testiewestie == 1) {
	//	var ranChar6 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
	//	} else {
	//	  var ranChar6 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
	//	}
	//	ctx.fillText(ranChar6, 462, 135)
//    ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
//    var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
//    if (rotatevar == 2) ctx.rotate(0.03)
//    if (rotatevar == 1) ctx.rotate(-0.03)
//    var ranChar7 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
//    ctx.fillText(ranChar7, 512, 135)
//    ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
//    var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
//    if (rotatevar == 2) ctx.rotate(0.03)
//    if (rotatevar == 1) ctx.rotate(-0.03)
//    var ranChar8 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
//    ctx.fillText(ranChar8, 562, 135)

	//	ctx.fillText(msg.author.username, canvas.width / 2.5, canvas.height / 1.8);

		ctx.beginPath();
		ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();

const background2 = await Canvas.loadImage("./lol.png");

//    	const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({ format: 'jpg' }));
//  	ctx.drawImage(avatar, 25, 25, 200, 200);

		const attachment = new Discord.Attachment(canvas.toBuffer(), 'captcha.png');

const memID = member.id


		member.send("Please enter the characters you see below to begin verification for " + member.guild.name + " (Verification Step 1/2)")
		if (verifi.get(`verifi_message_${member.guild.id}`) == null || verifi.get(`verifi_message_${member.guild.id}`) == 'disable') {

		} else {
			member.send(`Message from server: "${verifi.get(`verifi_message_${member.guild.id}`)}"`)
		}
		member.send("*Why? This server has verification enabled to prevent automated raiding. This test proves that you are a human.*")

var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)

		const filter = response => {
								 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
							 };

							 member.send(attachment).then(msg => {
									msg.channel.awaitMessages(filter, { max: 1, time: 240000 }) //errors: ['time'] })
										.then(collected => {
												if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {




													var ranPromptNum2 = Math.round(Math.random() * (10 - 1) + 1)

													if (ranPromptNum2 == 1) {

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
																	member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																		if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																			member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																		}

																member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
																if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

																} else {
																	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
																const verEmbed = new Discord.RichEmbed()
																.setColor('#00FF00')
																.setTitle('A member verified on the server!')
																.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
																.addField("Member User ID:", member.id)
															    member.guild.channels.get(syslog).send(verEmbed);
															}
															if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
																verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
															}

															})
													      }
													      if (reaction.emoji.name === '👎') {
																	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
																		member.send("That was incorrect. You will now be kicked from the server.").then(() => {
																		member.kick()
																		if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

																		} else {
																		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
																		const kickEmbed = new Discord.RichEmbed()
																		.setColor('#FF0000')
																		.setTitle('A member was kicked from the server for failing verification.')
																		.setDescription('They can rejoin if they want to attempt verification again.')
																		.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
																		.addField("Member User ID:", member.id)
																			member.guild.channels.get(syslog).send(kickEmbed);
																		}

																	})
																	} else {
																		member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
																		if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

																		} else {
																		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
																		const oofEmbed = new Discord.RichEmbed()
																		.setColor('#87ceeb')
																		.setTitle('A member failed verification but was not kicked because of your settings.')
																		.setDescription('They can rejoin if they want to attempt verification again.')
																		.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
																		.addField("Member User ID:", member.id)
																			member.guild.channels.get(syslog).send(oofEmbed);
																		}
																	}
																	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
																		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
																	}
													      }
													      if (reaction.emoji.name === '🍉') {
																	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
																		member.send("That was incorrect. You will now be kicked from the server.").then(() => {
																		member.kick()
																		if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

																		} else {
																		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
																		const kickEmbed = new Discord.RichEmbed()
																		.setColor('#FF0000')
																		.setTitle('A member was kicked from the server for failing verification.')
																		.setDescription('They can rejoin if they want to attempt verification again.')
																		.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
																		.addField("Member User ID:", member.id)
																			member.guild.channels.get(syslog).send(kickEmbed);
																		}
																	})
																	} else {
																		member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
																		if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

																		} else {
																		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
																		const oofEmbed = new Discord.RichEmbed()
																		.setColor('#87ceeb')
																		.setTitle('A member failed verification but was not kicked because of your settings.')
																		.setDescription('They can rejoin if they want to attempt verification again.')
																		.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
																		.addField("Member User ID:", member.id)
																			member.guild.channels.get(syslog).send(oofEmbed);
																		}
																	}
																	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
																		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
																	}
													      }

													})
													})})

													}

													if (ranPromptNum2 == 2) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '💩') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '😅') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 3) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '😬') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '🙌') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 4) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '🌓') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '😬') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 5) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '🤥') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '😫') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 6) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '🐉') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '😫') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 7) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '🐝') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '🤯') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 8) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '🦴') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '🙌') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 9) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '🐋') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '🤺') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}

													if (ranPromptNum2 == 10) {



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
															member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

																if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

																	member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

																}

														member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

														} else {
															var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const verEmbed = new Discord.RichEmbed()
														.setColor('#00FF00')
														.setTitle('A member verified on the server!')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(verEmbed);
													}
													if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
														verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
													}
													})
														}
														if (reaction.emoji.name === '🧩') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}
														if (reaction.emoji.name === '❤️') {
														if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
														member.send("That was incorrect. You will now be kicked from the server.").then(() => {
														member.kick()
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const kickEmbed = new Discord.RichEmbed()
														.setColor('#FF0000')
														.setTitle('A member was kicked from the server for failing verification.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(kickEmbed);
														}
														})
														} else {
														member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
														if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

														} else {
														var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
														const oofEmbed = new Discord.RichEmbed()
														.setColor('#87ceeb')
														.setTitle('A member failed verification but was not kicked because of your settings.')
														.setDescription('They can rejoin if they want to attempt verification again.')
														.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
														.addField("Member User ID:", member.id)
															member.guild.channels.get(syslog).send(oofEmbed);
														}
														}
														if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
															verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
														}
														}

														})
														})})



													}







												} else {


													const filter2 = response => {
																			 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
																		 };

																		 member.send("Incorrect. Please try again.").then(msg => {
																				msg.channel.awaitMessages(filter2, { max: 1, time: 60000 }) //errors: ['time'] })
																					.then(collected => {
																							if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {

var ranPromptNum = Math.round(Math.random() * (10 - 1) + 1)

if (ranPromptNum == 1) {

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
				member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

					if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

						member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

					}

			member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
			if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

			} else {
				var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
			const verEmbed = new Discord.RichEmbed()
			.setColor('#00FF00')
			.setTitle('A member verified on the server!')
			.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
			.addField("Member User ID:", member.id)
				member.guild.channels.get(syslog).send(verEmbed);
		}
		if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
			verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
		}
		})
      }
      if (reaction.emoji.name === '👎') {
				if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
					member.send("That was incorrect. You will now be kicked from the server.").then(() => {
					member.kick()
					if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

					} else {
					var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
					const kickEmbed = new Discord.RichEmbed()
					.setColor('#FF0000')
					.setTitle('A member was kicked from the server for failing verification.')
					.setDescription('They can rejoin if they want to attempt verification again.')
					.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
					.addField("Member User ID:", member.id)
						member.guild.channels.get(syslog).send(kickEmbed);
					}
				})
				} else {
					member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
					if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

					} else {
					var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
					const oofEmbed = new Discord.RichEmbed()
					.setColor('#87ceeb')
					.setTitle('A member failed verification but was not kicked because of your settings.')
					.setDescription('They can rejoin if they want to attempt verification again.')
					.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
					.addField("Member User ID:", member.id)
						member.guild.channels.get(syslog).send(oofEmbed);
					}
				}
				if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
					verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
				}
      }
      if (reaction.emoji.name === '🍉') {
				if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
					member.send("That was incorrect. You will now be kicked from the server.").then(() => {
					member.kick()
					if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

					} else {
					var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
					const kickEmbed = new Discord.RichEmbed()
					.setColor('#FF0000')
					.setTitle('A member was kicked from the server for failing verification.')
					.setDescription('They can rejoin if they want to attempt verification again.')
					.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
					.addField("Member User ID:", member.id)
						member.guild.channels.get(syslog).send(kickEmbed);
					}
				})
				} else {
					member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
					if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

					} else {
					var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
					const oofEmbed = new Discord.RichEmbed()
					.setColor('#87ceeb')
					.setTitle('A member failed verification but was not kicked because of your settings.')
					.setDescription('They can rejoin if they want to attempt verification again.')
					.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
					.addField("Member User ID:", member.id)
						member.guild.channels.get(syslog).send(oofEmbed);
					}
				}
				if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
					verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
				}
      }

})
})})

}

if (ranPromptNum == 2) {



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
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '💩') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '😅') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 3) {



	const filter8 = (reaction, user) => {
	return ['🍴', '😬', '🙌'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *Two utensils used for consuming food.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('😬')
	.then(() => msg.react('🍴'))
	.then(() => msg.react('🙌'))
	.then(() => {


	msg.awaitReactions(filter8, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🍴') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '😬') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '🙌') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 4) {



	const filter9 = (reaction, user) => {
	return ['🌓', '😬', '🦴'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *A part of the human body that forms a skeleton.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('🌓')
	.then(() => msg.react('😬'))
	.then(() => msg.react('🦴'))
	.then(() => {


	msg.awaitReactions(filter9, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🦴') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '🌓') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '😬') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 5) {



	const filter10 = (reaction, user) => {
	return ['🤥', '🍬', '😫'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *A piece of candy said to help concentration.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('🤥')
	.then(() => msg.react('🍬'))
	.then(() => msg.react('😫'))
	.then(() => {


	msg.awaitReactions(filter10, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🍬') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '🤥') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '😫') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 6) {



	const filter11 = (reaction, user) => {
	return ['🐉', '😫', '🍉'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *A piece of fruit with a red interior and green exterior.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('🐉')
	.then(() => msg.react('😫'))
	.then(() => msg.react('🍉'))
	.then(() => {


	msg.awaitReactions(filter11, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🍉') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '🐉') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '😫') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 7) {



	const filter12 = (reaction, user) => {
	return ['🐝', '🤯', '🍉'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *A human organ used for tasting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('🤯')
	.then(() => msg.react('🐝'))
	.then(() => msg.react('👅'))
	.then(() => {


	msg.awaitReactions(filter12, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '👅') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '🐝') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '🤯') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 8) {



	const filter13 = (reaction, user) => {
	return ['🦴', '🙌', '🔪'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *An object used for cutting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('🔪')
	.then(() => msg.react('🦴'))
	.then(() => msg.react('🙌'))
	.then(() => {


	msg.awaitReactions(filter13, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🔪') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '🦴') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '🙌') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 9) {



	const filter14 = (reaction, user) => {
	return ['🤺', '🚗', '🐋'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *A four wheeled vehicle that travels along roads.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('🤺')
	.then(() => msg.react('🚗'))
	.then(() => msg.react('🐋'))
	.then(() => {


	msg.awaitReactions(filter14, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🚗') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '🐋') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '🤺') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}

if (ranPromptNum == 10) {



	const filter15 = (reaction, user) => {
	return ['❤️', '🏍️', '🧩'].includes(reaction.emoji.name) && user.id === memID;
	}
	member.send("React with the emoji that matches the following description: *A two wheeled vechicle with an engine.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	msg.react('🏍️')
	.then(() => msg.react('🧩'))
	.then(() => msg.react('❤️'))
	.then(() => {


	msg.awaitReactions(filter15, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first()

	if (reaction.emoji.name === '🏍️') {
		member.addRole(verifi.get(`verifi_role_${member.guild.id}`)).then(() => {

			if (verifi.get(`verifi_remrole_${member.guild.id}`) !== 'disable' && verifi.get(`verifi_remrole_${member.guild.id}`) !== null) {

				member.removeRole(verifi.get(`verifi_remrole_${member.guild.id}`))

			}

	member.send("You have successfully completed verification! Thank you for your time. You may now return to " + member.guild.name + " and start chatting!")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled') {

	} else {
		var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A member verified on the server!')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(verEmbed);
}
if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
}
})
	}
	if (reaction.emoji.name === '🧩') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}
	if (reaction.emoji.name === '❤️') {
	if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
	member.send("That was incorrect. You will now be kicked from the server.").then(() => {
	member.kick()
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const kickEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle('A member was kicked from the server for failing verification.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(kickEmbed);
	}
	})
	} else {
	member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
	if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

	} else {
	var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
	const oofEmbed = new Discord.RichEmbed()
	.setColor('#87ceeb')
	.setTitle('A member failed verification but was not kicked because of your settings.')
	.setDescription('They can rejoin if they want to attempt verification again.')
	.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
	.addField("Member User ID:", member.id)
		member.guild.channels.get(syslog).send(oofEmbed);
	}
	}
	if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
		verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
	}
	}

	})
	})})



}



																							} else {
																								if (verifi.get(`verifi_kickmem_${member.guild.id}`) == '1') {
																								member.send("That was incorrect. You will now be kicked from the server.").then(() => {
																								member.kick()
																								if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${member.guild.id}`) == '0') {

																								} else {
																								var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
																								const kickEmbed = new Discord.RichEmbed()
																								.setColor('#FF0000')
																								.setTitle('A member was kicked from the server for failing verification.')
																								.setDescription('They can rejoin if they want to attempt verification again.')
																								.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
																								.addField("Member User ID:", member.id)
																									member.guild.channels.get(syslog).send(kickEmbed);
																								}
																								})
																								} else {
																								member.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
																								if (verifi.get(`verifi_syschannel_${member.guild.id}`) == null || verifi.get(`verifi_syschannel_${member.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${member.guild.id}`) == '0') {

																								} else {
																								var syslog = verifi.get(`verifi_syschannel_${member.guild.id}`)
																								const oofEmbed = new Discord.RichEmbed()
																								.setColor('#87ceeb')
																								.setTitle('A member failed verification but was not kicked because of your settings.')
																								.setDescription('They can rejoin if they want to attempt verification again.')
																								.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
																								.addField("Member User ID:", member.id)
																									member.guild.channels.get(syslog).send(oofEmbed);
																								}
																								}
																								if (verifi.get(`verifi_status_${member.guild.id}`) == '1') {
																									verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
																								}
																							}
												})

											})
										}





										})
									})



























		// VERIFICATION END
});

client.on('message', async msg => {

	if (!msg.content.startsWith(prefix)) return;
	if (msg.author.bot && msg.author.id !== '653721694342479904') return;
//if (msg.channel.type !== 'dm') {
	//let fetched = await db.fetch(`prefix_${msg.guild.id}`); // code if need arises: let fetched = await db.fetch(`prefix_${msg.guild.id}`);
	//if (fetched === null) prefix = '-'; //if it hasn't been set up, set to default
	//else prefix = fetched; //if it is defined, set it to the defined characters.
//} else {
	//prefix = '-'
//}


	const args = msg.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

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

//if (commandName == 'stats') {

//const statEmbed = new Discord.RichEmbed()
//.setColor('#87ceeb')
//.setThumbnail('https://cdn.discordapp.com/attachments/693240321894514730/697553620228636782/pfp.png')
//.setTitle("Quick Stats (Global)")
//.addField("Total attempts verified with Verifi:", verifi.get(`verifi_totalver`))
//.addField("Total attempts blocked with Verifi:", verifi.get(`verifi_totalstop`))
//.addField("Number of servers Verifi is guarding:", client.guilds.size)
//.addField('Current version:', '1.0')
//.setFooter("Thanks for using Verifi. Seriously. It means a lot to me.")
//msg.channel.send(statEmbed)

//return;
//}


// start here: member

client.on('guildMemberUpdate', async newMember => {

if (newMember.guild.id !== '574943603466436628') return;

if (newMember.roles.has('592039843765157908')) {

	if (verifi.get(`verifi_joinlog_${newMember.guild.id}`) == null) verifi.set(`verifi_joinlog_${newMember.guild.id}`, '1')
	if (verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == null) verifi.set(`verifi_failnokicklog_${newMember.guild.id}`, '1')
	if (verifi.get(`verifi_kicklog_${newMember.guild.id}`) == null) verifi.set(`verifi_kicklog_${newMember.guild.id}`, '1')
	if (verifi.get(`verifi_botver_${newMember.guild.id}`) == null) verifi.set(`verifi_botver_${newMember.guild.id}`, '1')


	var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)

		if (verifi.get(`verifi_status_${newMember.guild.id}`) == null) verifi.set(`verifi_status_${newMember.guild.id}`, '1')

		if (verifi.get(`verifi_role_${newMember.guild.id}`) == null || verifi.get(`verifi_role_${newMember.guild.id}`) == 'off') var missing1 = '1'
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == null || verifi.get(`verifi_role_${newMember.guild.id}`) == 'off') var missing2 = '1'

	if (missing1 == '1' || missing2 == '1'){
	if (missing1 == '1' && missing2 == '1') {
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {
	return newMember.guild.owner.send("Your server needs to have `v!>setrole` and `v!>setkickstatus` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
		} else {
	return	newMember.guild.channels.get(syslog).send(newMember.guild.owner + ", your server needs to have `v!>setrole` and `v!>setkickstatus` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
	}
	} else if (missing1 == '1') {
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {
			return newMember.guild.owner.send("Your server needs to have `v!>setrole` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
		} else {
		return newMember.guild.channels.get(syslog).send(newMember.guild.owner + ", your server needs to have `v!>setrole` configured for verification to work properly! A member just joined and is unable to verify because these aren't configured!")
	}
	} else if (missing2 == '1') {
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {
			 newMember.guild.owner.send("Your server needs to have `v!>setkickstatus` configured for verification to work properly! A member just joined and was auto-verified because these settings need to be configured for verification to work properly.")
		} else {
		 newMember.guild.channels.get(syslog).send(newMember.guild.owner + ", your server needs to have `v!>setkickstatus` configured for verification to work properly! A member just joined and was auto-verified because these settings need to be configured for verification to work properly.")
	}
	return newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`))
	}

	}

	if (newMember.user.bot) {

	if (verifi.get(`verifi_botver_${newMember.guild.id}`) == '1') {

	var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
	const verEmbed = new Discord.RichEmbed()
	.setColor('#00FF00')
	.setTitle('A bot was automatically verified on the server!')
	.setDescription("Whenever a bot joins your server, it is automatically verified, as bots are obviously not able to complete verification.")
	.addField("Bot Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
	.addField("Bot User ID:", newMember.id)
	newMember.guild.channels.get(syslog).send(verEmbed);

	}

	return newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`))



	}

		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_joinlog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const joinEmbed = new Discord.RichEmbed()
		.setColor('#0000FF')
		.setTitle('A new member joined the server!')
		.setDescription('Verification will now commence.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
	    newMember.guild.channels.get(syslog).send(joinEmbed);
	}



			//VERIFICATION START

			const canvas = Canvas.createCanvas(700, 250);
			const ctx = canvas.getContext('2d');

			const background = await Canvas.loadImage("./lol.png");
			ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

			ctx.strokeStyle = '#74037b';
			ctx.strokeRect(0, 0, canvas.width, canvas.height);

			// Select the font size and  type from one of the natively available fonts

			ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
			// Select the style that will be used to fill the text in
			ctx.fillStyle = '#ffffff';
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
			ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
			ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
			ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
			ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
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
	//		ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
	//		var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
	//		if (rotatevar == 2) ctx.rotate(0.03)
		//	if (rotatevar == 1) ctx.rotate(-0.03)
		//	var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

		//	if (testiewestie == 1) {
		//	var ranChar6 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
		//	} else {
		//	  var ranChar6 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
		//	}
		//	ctx.fillText(ranChar6, 462, 135)
	//    ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
	//    var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
	//    if (rotatevar == 2) ctx.rotate(0.03)
	//    if (rotatevar == 1) ctx.rotate(-0.03)
	//    var ranChar7 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
	//    ctx.fillText(ranChar7, 512, 135)
	//    ctx.font = Math.round(Math.random() * (52 - 48) + 48) + 'px sans-serif';
	//    var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
	//    if (rotatevar == 2) ctx.rotate(0.03)
	//    if (rotatevar == 1) ctx.rotate(-0.03)
	//    var ranChar8 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
	//    ctx.fillText(ranChar8, 562, 135)

		//	ctx.fillText(msg.author.username, canvas.width / 2.5, canvas.height / 1.8);

			ctx.beginPath();
			ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.clip();

	const background2 = await Canvas.loadImage("./lol.png");

	//    	const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({ format: 'jpg' }));
	//  	ctx.drawImage(avatar, 25, 25, 200, 200);

			const attachment = new Discord.Attachment(canvas.toBuffer(), 'captcha.png');

	const memID = newMember.id


			newMember.send("Please enter the characters you see below to begin verification for " + newMember.guild.name + " (Verification Step 1/2)")
			if (verifi.get(`verifi_message_${newMember.guild.id}`) == null || verifi.get(`verifi_message_${newMember.guild.id}`) == 'disable') {

			} else {
				newMember.send(`Message from server: "${verifi.get(`verifi_message_${newMember.guild.id}`)}"`)
			}
			newMember.send("*Why? This server has verification enabled to prevent automated raiding. This test proves that you are a human.*")

	var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)

			const filter = response => {
									 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
								 };

								 newMember.send(attachment).then(msg => {
										msg.channel.awaitMessages(filter, { max: 1, time: 240000 }) //errors: ['time'] })
											.then(collected => {
													if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {




														var ranPromptNum2 = Math.round(Math.random() * (10 - 1) + 1)

														if (ranPromptNum2 == 1) {

																																						const filter21 = (reaction, user) => {
														  return ['🐱', '👎', '🍉'].includes(reaction.emoji.name) && user.id === memID;
														}
														      newMember.send("React with the emoji that matches the following description: *A common domestic house pet.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
														        msg.react('🐱')
														        .then(() => msg.react('👎'))
														        .then(() => msg.react('🍉'))
																		.then(() => {


														        msg.awaitReactions(filter21, { max: 1, time: 60000, errors: ['time'] })
														    .then(collected => {
														      const reaction = collected.first()

														      if (reaction.emoji.name === '🐱') {
																		newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
																	newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
																	if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

																	} else {
																		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
																	const verEmbed = new Discord.RichEmbed()
																	.setColor('#00FF00')
																	.setTitle('A member verified on the server!')
																	.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
																	.addField("Member User ID:", newMember.id)
																    newMember.guild.channels.get(syslog).send(verEmbed);
																}
																if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																	verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
																}

																})
														      }
														      if (reaction.emoji.name === '👎') {
																		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
																			newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
																			newMember.kick()
																			if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

																			} else {
																			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
																			const kickEmbed = new Discord.RichEmbed()
																			.setColor('#FF0000')
																			.setTitle('A member was kicked from the server for failing verification.')
																			.setDescription('They can rejoin if they want to attempt verification again.')
																			.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
																			.addField("Member User ID:", newMember.id)
																				newMember.guild.channels.get(syslog).send(kickEmbed);
																			}

																		})
																		} else {
																			newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
																			if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

																			} else {
																			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
																			const oofEmbed = new Discord.RichEmbed()
																			.setColor('#87ceeb')
																			.setTitle('A member failed verification but was not kicked because of your settings.')
																			.setDescription('They can rejoin if they want to attempt verification again.')
																			.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
																			.addField("Member User ID:", newMember.id)
																				newMember.guild.channels.get(syslog).send(oofEmbed);
																			}
																		}
																		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
																		}
														      }
														      if (reaction.emoji.name === '🍉') {
																		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
																			newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
																			newMember.kick()
																			if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

																			} else {
																			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
																			const kickEmbed = new Discord.RichEmbed()
																			.setColor('#FF0000')
																			.setTitle('A member was kicked from the server for failing verification.')
																			.setDescription('They can rejoin if they want to attempt verification again.')
																			.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
																			.addField("Member User ID:", newMember.id)
																				newMember.guild.channels.get(syslog).send(kickEmbed);
																			}
																		})
																		} else {
																			newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
																			if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

																			} else {
																			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
																			const oofEmbed = new Discord.RichEmbed()
																			.setColor('#87ceeb')
																			.setTitle('A member failed verification but was not kicked because of your settings.')
																			.setDescription('They can rejoin if they want to attempt verification again.')
																			.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
																			.addField("Member User ID:", newMember.id)
																				newMember.guild.channels.get(syslog).send(oofEmbed);
																			}
																		}
																		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
																		}
														      }

														})
														})})

														}

														if (ranPromptNum2 == 2) {



															const filter22 = (reaction, user) => {
															return ['😅', '💩', '😡'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *An angry face.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('😅')
															.then(() => msg.react('💩'))
															.then(() => msg.react('😡'))
															.then(() => {


															msg.awaitReactions(filter22, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '😡') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '💩') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '😅') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 3) {



															const filter23 = (reaction, user) => {
															return ['🍴', '😬', '🙌'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *Two utensils used for consuming food.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('😬')
															.then(() => msg.react('🍴'))
															.then(() => msg.react('🙌'))
															.then(() => {


															msg.awaitReactions(filter23, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '🍴') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '😬') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '🙌') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 4) {



															const filter24 = (reaction, user) => {
															return ['🌓', '😬', '🦴'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *A part of the human body that forms a skeleton.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🌓')
															.then(() => msg.react('😬'))
															.then(() => msg.react('🦴'))
															.then(() => {


															msg.awaitReactions(filter24, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '🦴') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '🌓') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '😬') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 5) {



															const filter25 = (reaction, user) => {
															return ['🤥', '🍬', '😫'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *A piece of candy said to help concentration.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🤥')
															.then(() => msg.react('🍬'))
															.then(() => msg.react('😫'))
															.then(() => {


															msg.awaitReactions(filter25, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '🍬') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '🤥') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '😫') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", member.user.username + '#' + member.user.discriminator)
															.addField("Member User ID:", member.id)
																member.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 6) {



															const filter26 = (reaction, user) => {
															return ['🐉', '😫', '🍉'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *A piece of fruit with a red interior and green exterior.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🐉')
															.then(() => msg.react('😫'))
															.then(() => msg.react('🍉'))
															.then(() => {


															msg.awaitReactions(filter26, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '🍉') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '🐉') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '😫') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 7) {



															const filter27 = (reaction, user) => {
															return ['🐝', '🤯', '🍉'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *A human organ used for tasting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🤯')
															.then(() => msg.react('🐝'))
															.then(() => msg.react('👅'))
															.then(() => {


															msg.awaitReactions(filter27, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '👅') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '🐝') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '🤯') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 8) {



															const filter28 = (reaction, user) => {
															return ['🦴', '🙌', '🔪'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *An object used for cutting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.* *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🔪')
															.then(() => msg.react('🦴'))
															.then(() => msg.react('🙌'))
															.then(() => {


															msg.awaitReactions(filter28, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '🔪') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '🦴') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '🙌') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 9) {



															const filter29 = (reaction, user) => {
															return ['🤺', '🚗', '🐋'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *A four wheeled vehicle that travels along roads.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.* *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🤺')
															.then(() => msg.react('🚗'))
															.then(() => msg.react('🐋'))
															.then(() => {


															msg.awaitReactions(filter29, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '🚗') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '🐋') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '🤺') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}

														if (ranPromptNum2 == 10) {



															const filter30 = (reaction, user) => {
															return ['❤️', '🏍️', '🧩'].includes(reaction.emoji.name) && user.id === memID;
															}
															newMember.send("React with the emoji that matches the following description: *A two wheeled vechicle with an engine.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
															msg.react('🏍️')
															.then(() => msg.react('🧩'))
															.then(() => msg.react('❤️'))
															.then(() => {


															msg.awaitReactions(filter30, { max: 1, time: 60000, errors: ['time'] })
															.then(collected => {
															const reaction = collected.first()

															if (reaction.emoji.name === '🏍️') {
																newMember.addRole('575080353199292417')
																newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
															newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

															} else {
																var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const verEmbed = new Discord.RichEmbed()
															.setColor('#00FF00')
															.setTitle('A member verified on the server!')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(verEmbed);
														}
														if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
															verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
														}
														})
															}
															if (reaction.emoji.name === '🧩') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}
															if (reaction.emoji.name === '❤️') {
															if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
															newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
															newMember.kick()
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const kickEmbed = new Discord.RichEmbed()
															.setColor('#FF0000')
															.setTitle('A member was kicked from the server for failing verification.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(kickEmbed);
															}
															})
															} else {
															newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
															if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

															} else {
															var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
															const oofEmbed = new Discord.RichEmbed()
															.setColor('#87ceeb')
															.setTitle('A member failed verification but was not kicked because of your settings.')
															.setDescription('They can rejoin if they want to attempt verification again.')
															.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
															.addField("Member User ID:", newMember.id)
																newMember.guild.channels.get(syslog).send(oofEmbed);
															}
															}
															if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
															}
															}

															})
															})})



														}







													} else {


														const filter2 = response => {
																				 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
																			 };

																			 newMember.send("Incorrect. Please try again.").then(msg => {
																					msg.channel.awaitMessages(filter2, { max: 1, time: 60000 }) //errors: ['time'] })
																						.then(collected => {
																								if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {

	var ranPromptNum = Math.round(Math.random() * (10 - 1) + 1)

	if (ranPromptNum == 1) {

																									const filter7 = (reaction, user) => {
	  return ['🐱', '👎', '🍉'].includes(reaction.emoji.name) && user.id === memID;
	}
	      newMember.send("React with the emoji that matches the following description: *A common domestic house pet.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
	        msg.react('🐱')
	        .then(() => msg.react('👎'))
	        .then(() => msg.react('🍉'))
					.then(() => {


	        msg.awaitReactions(filter7, { max: 1, time: 60000, errors: ['time'] })
	    .then(collected => {
	      const reaction = collected.first()

	      if (reaction.emoji.name === '🐱') {
					newMember.addRole('575080353199292417')
					newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
				newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
				if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

				} else {
					var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
				const verEmbed = new Discord.RichEmbed()
				.setColor('#00FF00')
				.setTitle('A member verified on the server!')
				.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
				.addField("Member User ID:", newMember.id)
					newMember.guild.channels.get(syslog).send(verEmbed);
			}
			if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
				verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
			}
			})
	      }
	      if (reaction.emoji.name === '👎') {
					if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
						newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
						newMember.kick()
						if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

						} else {
						var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
						const kickEmbed = new Discord.RichEmbed()
						.setColor('#FF0000')
						.setTitle('A member was kicked from the server for failing verification.')
						.setDescription('They can rejoin if they want to attempt verification again.')
						.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
						.addField("Member User ID:", newMember.id)
							newMember.guild.channels.get(syslog).send(kickEmbed);
						}
					})
					} else {
						newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
						if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

						} else {
						var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
						const oofEmbed = new Discord.RichEmbed()
						.setColor('#87ceeb')
						.setTitle('A member failed verification but was not kicked because of your settings.')
						.setDescription('They can rejoin if they want to attempt verification again.')
						.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
						.addField("Member User ID:", newMember.id)
							newMember.guild.channels.get(syslog).send(oofEmbed);
						}
					}
					if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
						verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
					}
	      }
	      if (reaction.emoji.name === '🍉') {
					if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
						newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
						newMember.kick()
						if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

						} else {
						var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
						const kickEmbed = new Discord.RichEmbed()
						.setColor('#FF0000')
						.setTitle('A member was kicked from the server for failing verification.')
						.setDescription('They can rejoin if they want to attempt verification again.')
						.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
						.addField("Member User ID:", newMember.id)
							newMember.guild.channels.get(syslog).send(kickEmbed);
						}
					})
					} else {
						newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
						if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

						} else {
						var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
						const oofEmbed = new Discord.RichEmbed()
						.setColor('#87ceeb')
						.setTitle('A member failed verification but was not kicked because of your settings.')
						.setDescription('They can rejoin if they want to attempt verification again.')
						.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
						.addField("Member User ID:", newMember.id)
							newMember.guild.channels.get(syslog).send(oofEmbed);
						}
					}
					if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
						verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
					}
	      }

	})
	})})

	}

	if (ranPromptNum == 2) {



		const filter8 = (reaction, user) => {
		return ['😅', '💩', '😡'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *An angry face.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('😅')
		.then(() => msg.react('💩'))
		.then(() => msg.react('😡'))
		.then(() => {


		msg.awaitReactions(filter8, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '😡') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '💩') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '😅') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 3) {



		const filter8 = (reaction, user) => {
		return ['🍴', '😬', '🙌'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *Two utensils used for consuming food.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('😬')
		.then(() => msg.react('🍴'))
		.then(() => msg.react('🙌'))
		.then(() => {


		msg.awaitReactions(filter8, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '🍴') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '😬') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '🙌') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 4) {



		const filter9 = (reaction, user) => {
		return ['🌓', '😬', '🦴'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *A part of the human body that forms a skeleton.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🌓')
		.then(() => msg.react('😬'))
		.then(() => msg.react('🦴'))
		.then(() => {


		msg.awaitReactions(filter9, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '🦴') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '🌓') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '😬') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 5) {



		const filter10 = (reaction, user) => {
		return ['🤥', '🍬', '😫'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *A piece of candy said to help concentration.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🤥')
		.then(() => msg.react('🍬'))
		.then(() => msg.react('😫'))
		.then(() => {


		msg.awaitReactions(filter10, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '🍬') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '🤥') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '😫') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 6) {



		const filter11 = (reaction, user) => {
		return ['🐉', '😫', '🍉'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *A piece of fruit with a red interior and green exterior.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🐉')
		.then(() => msg.react('😫'))
		.then(() => msg.react('🍉'))
		.then(() => {


		msg.awaitReactions(filter11, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '🍉') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '🐉') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '😫') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 7) {



		const filter12 = (reaction, user) => {
		return ['🐝', '🤯', '🍉'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *A human organ used for tasting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🤯')
		.then(() => msg.react('🐝'))
		.then(() => msg.react('👅'))
		.then(() => {


		msg.awaitReactions(filter12, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '👅') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '🐝') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '🤯') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 8) {



		const filter13 = (reaction, user) => {
		return ['🦴', '🙌', '🔪'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *An object used for cutting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🔪')
		.then(() => msg.react('🦴'))
		.then(() => msg.react('🙌'))
		.then(() => {


		msg.awaitReactions(filter13, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '🔪') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '🦴') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '🙌') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 9) {



		const filter14 = (reaction, user) => {
		return ['🤺', '🚗', '🐋'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *A four wheeled vehicle that travels along roads.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🤺')
		.then(() => msg.react('🚗'))
		.then(() => msg.react('🐋'))
		.then(() => {


		msg.awaitReactions(filter14, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '🚗') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '🐋') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '🤺') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}

	if (ranPromptNum == 10) {



		const filter15 = (reaction, user) => {
		return ['❤️', '🏍️', '🧩'].includes(reaction.emoji.name) && user.id === memID;
		}
		newMember.send("React with the emoji that matches the following description: *A two wheeled vechicle with an engine.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
		msg.react('🏍️')
		.then(() => msg.react('🧩'))
		.then(() => msg.react('❤️'))
		.then(() => {


		msg.awaitReactions(filter15, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
		const reaction = collected.first()

		if (reaction.emoji.name === '🏍️') {
			newMember.addRole('575080353199292417')
			newMember.addRole(verifi.get(`verifi_role_${newMember.guild.id}`)).then(() => {
		newMember.send("You have successfully completed verification! Thank you for your time. You may now return to " + newMember.guild.name + " and start chatting!")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled') {

		} else {
			var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const verEmbed = new Discord.RichEmbed()
		.setColor('#00FF00')
		.setTitle('A member verified on the server!')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(verEmbed);
	}
	if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
		verifi.set(`verifi_totalver`, verifi.get(`verifi_totalver`) + 1)
	}
	})
		}
		if (reaction.emoji.name === '🧩') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}
		if (reaction.emoji.name === '❤️') {
		if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
		newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
		newMember.kick()
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const kickEmbed = new Discord.RichEmbed()
		.setColor('#FF0000')
		.setTitle('A member was kicked from the server for failing verification.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(kickEmbed);
		}
		})
		} else {
		newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
		if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

		} else {
		var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
		const oofEmbed = new Discord.RichEmbed()
		.setColor('#87ceeb')
		.setTitle('A member failed verification but was not kicked because of your settings.')
		.setDescription('They can rejoin if they want to attempt verification again.')
		.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
		.addField("Member User ID:", newMember.id)
			newMember.guild.channels.get(syslog).send(oofEmbed);
		}
		}
		if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
			verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
		}
		}

		})
		})})



	}



																								} else {
																									if (verifi.get(`verifi_kickmem_${newMember.guild.id}`) == '1') {
																									newMember.send("That was incorrect. You will now be kicked from the server.").then(() => {
																									newMember.kick()
																									if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_kicklog_${newMember.guild.id}`) == '0') {

																									} else {
																									var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
																									const kickEmbed = new Discord.RichEmbed()
																									.setColor('#FF0000')
																									.setTitle('A member was kicked from the server for failing verification.')
																									.setDescription('They can rejoin if they want to attempt verification again.')
																									.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
																									.addField("Member User ID:", newMember.id)
																										newMember.guild.channels.get(syslog).send(kickEmbed);
																									}
																									})
																									} else {
																									newMember.send("That was incorrect. Rejoin the server if you'd like to attempt verification again.")
																									if (verifi.get(`verifi_syschannel_${newMember.guild.id}`) == null || verifi.get(`verifi_syschannel_${newMember.guild}`) == 'disabled' || verifi.get(`verifi_failnokicklog_${newMember.guild.id}`) == '0') {

																									} else {
																									var syslog = verifi.get(`verifi_syschannel_${newMember.guild.id}`)
																									const oofEmbed = new Discord.RichEmbed()
																									.setColor('#87ceeb')
																									.setTitle('A member failed verification but was not kicked because of your settings.')
																									.setDescription('They can rejoin if they want to attempt verification again.')
																									.addField("Member Username + Tag:", newMember.user.username + '#' + newMember.user.discriminator)
																									.addField("Member User ID:", newMember.id)
																										newMember.guild.channels.get(syslog).send(oofEmbed);
																									}
																									}
																									if (verifi.get(`verifi_status_${newMember.guild.id}`) == '1') {
																										verifi.set(`verifi_totalstop`, verifi.get(`verifi_totalstop`) + 1)
																									}
																								}
													})

												})
											}





											})
										})

}

})


try {
 command.execute(msg, args);
} catch (error) {
	console.error(error);
	msg.reply('there was an error trying to execute that command!');
}

	// other commands...
});

client.login('token');
