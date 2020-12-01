require('dotenv').config() //npm i dotenv

const Discord = require('discord.js'); //npm install discord.js
const client = new Discord.Client();

const toss = ["Head", "Tail"];

//function to check login
client.on('ready', () => {
    console.log(`Bot Name: ${client.user.tag}\nSuccessfully logged in✔`);
  });
  

  //handleing messages
client.on('message', msg => {
    if (msg.content === 'Hi') {
      msg.reply('Hello');
      msg.react("🤍")
    }
    else if (msg.content === '!random' || msg.content === '!Random') {
        //msg.reply(Math.floor(Math.random()*100));
        msg.channel.send(Math.floor(Math.random()*100));
      }
      else if (msg.content === '!toss' || msg.content === '!Toss') {
        //msg.reply(Math.floor(Math.random()*100));
        msg.channel.send(toss[Math.floor(Math.random()*2)]);
      }
      
    
});
  
client.login(process.env.BOT_TOKEN);