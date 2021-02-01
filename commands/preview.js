const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const handler = require('../index.js')
const client = handler.realclient;
const verifi = new db.table(`verifi`)
const Canvas = require('canvas')

module.exports = {
  name: 'preview',
  cooldown: 12,
  description: 'Allows you to see how your verification looks.. Interactive!',
  async execute(msg, args) {

if (msg.channel.type == 'dm') return msg.channel.send("This command needs to be run in a server text channel!")

    function verify() {
      msg.channel.send("This is where you would get the verification role!")
    }

    function fail() {
      msg.channel.send("This is where you would fail the verification.")
    }

if (verifi.get(`verifi_onestep_${msg.guild.id}`) == null) {
msg.channel.send("This is how your verification prompt will appear to any new members! **The preview is now interactive!** V\nPlease send a message in this DM with the characters you see below to begin verification for " + msg.guild.name + " (Verification Step 1/1)")


} else {
msg.channel.send("This is how your verification prompt will appear to any new members! **The preview is now interactive!** V\nPlease send a message in this DM with the characters you see below to begin verification for " + msg.guild.name + " (Verification Step 1/2)")

}



const canvas = Canvas.createCanvas(700, 250);
const ctx = canvas.getContext('2d');

var background = await Canvas.loadImage("./gray.png");

ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

if (verifi.get(`verifi_verimg_${msg.guild.id}`) !== null) {
ctx.fillStyle = verifi.get(`verifi_verimg_${msg.guild.id}`);
ctx.fillRect(0, 0, canvas.width, canvas.height);

}


// Select the font size and  type from one of the natively available fonts

ctx.font = Math.round(Math.random() * (52 - 24) + 48) + 'px sans-serif';
// Select the style that will be used to fill the text in
if (verifi.get(`verifi_textcolor_${msg.guild.id}`) == null) {
  ctx.fillStyle = '#ffffff';
} else {
  ctx.fillStyle = verifi.get(`verifi_textcolor_${msg.guild.id}`);
}
// rotate text
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.05)
if (rotatevar == 1) ctx.rotate(-0.05)
// Actually fill the text with a solid color

var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar1 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
  var ranChar1 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar1, 212, 135)
ctx.font = Math.round(Math.random() * (52 - 24) + 48) + 'px sans-serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.05)
if (rotatevar == 1) ctx.rotate(-0.05)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar2 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
  var ranChar2 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar2, 262, 135)
ctx.font = Math.round(Math.random() * (52 - 24) + 48) + 'px sans-serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.05)
if (rotatevar == 1) ctx.rotate(-0.05)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar3 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
  var ranChar3 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar3, 312, 135)
ctx.font = Math.round(Math.random() * (52 - 24) + 48) + 'px sans-serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.05)
if (rotatevar == 1) ctx.rotate(-0.05)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar4 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
  var ranChar4 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar4, 362, 135)
ctx.font = Math.round(Math.random() * (52 - 24) + 48) + 'px sans-serif';
var rotatevar = Math.round(Math.random() * (2 - 1) + 1)
if (rotatevar == 2) ctx.rotate(0.05)
if (rotatevar == 1) ctx.rotate(-0.05)
var testiewestie = Math.round(Math.random() * (2 - 1) + 1)

if (testiewestie == 1) {
var ranChar5 = Math.round(Math.random() * (36 - 1) + 1).toString(36)
} else {
  var ranChar5 = Math.round(Math.random() * (36 - 1) + 1).toString(36).toUpperCase()
}
ctx.fillText(ranChar5, 412, 135)


const memID = msg.author.id
const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'captcha.png');

		if (verifi.get(`verifi_message_${msg.guild.id}`) == null) {

		} else {
			msg.channel.send(`Message from server: "${verifi.get(`verifi_message_${msg.guild.id}`)}"`)
		}
		msg.channel.send("*Why? This server has verification enabled to prevent automated raiding. This test proves that you are a human.*\n**:warning:** Keep in mind that the lowercase version of 'L' may look like a '1'! **:warning:**")

const filter = response => {
								 return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
							 };

msg.channel.send(attachment).then(msg => {
   msg.channel.awaitMessages(filter, { max: 1, time: 240000 }) //errors: ['time'] })
     .then(collected => {
         if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {

           if (verifi.get(`verifi_onestep_${msg.guild.id}`) == null) {

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
      msg.channel.send("React with the emoji that matches the following description: *A common domestic house pet.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *An angry face.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *Two utensils used for consuming food.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *A part of the human body that forms a skeleton.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *A piece of candy said to help concentration.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *A piece of fruit with a red interior and green exterior.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *A human organ used for tasting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *An object used for cutting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.* *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *A four wheeled vehicle that travels along roads.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.* *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
  msg.channel.send("React with the emoji that matches the following description: *A two wheeled vechicle with an engine.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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


const filter2 = response => {
             return response.content.toLowerCase(); // item.answers.some(answer => answer.toLowerCase() ===
           };

           msg.channel.send("Incorrect. Please try again.").then(msg => {
              msg.channel.awaitMessages(filter2, { max: 1, time: 60000 }) //errors: ['time'] })
                .then(collected => {
                    if (collected.first().content == ranChar1 + ranChar2 + ranChar3 + ranChar4 + ranChar5) {

var ranPromptNum = Math.round(Math.random() * (10 - 1) + 1)

switch (ranPromptNum) {

case 1:

                      const filter7 = (reaction, user) => {
return ['🐱', '👎', '🍉'].includes(reaction.emoji.name) && user.id === memID;
}
msg.channel.send("React with the emoji that matches the following description: *A common domestic house pet.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *An angry face.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *Two utensils used for consuming food.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *A part of the human body that forms a skeleton.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *A piece of candy said to help concentration.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *A piece of fruit with a red interior and green exterior.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *A human organ used for tasting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *An object used for cutting.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *A four wheeled vehicle that travels along roads.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
msg.channel.send("React with the emoji that matches the following description: *A two wheeled vechicle with an engine.* (Verification Step 2/2) *Please wait for all 3 options to pop up before selecting one, or the prompt may glitch and you'll have to rejoin the server.*").then(msg => {
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
})


  }}
