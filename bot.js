require('dotenv').config(); //npm i dotenv
const express = require('express'); //npm i express


const Discord = require('discord.js'); //npm install discord.js
const client = new Discord.Client();

const toss = ["Head", "Tail"];
const game1 = ["Rock", "Paper", "Scissor"];

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
      else if (msg.content === '!rock' || msg.content === '!paper') {
        //msg.reply(Math.floor(Math.random()*100));
        const cpu = game1[Math.floor(Math.random()*3)];
        if(msg.content === '!rock' && cpu === 'Scissor'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        else if(msg.content === '!paper' && cpu === 'Rock'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        else if(msg.content === '!scissor' && cpu === 'Paper'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        else if(msg.content === '!paper' && cpu === 'Paper'){
          msg.channel.send(cpu);
          msg.channel.send("Draw 😀");
        }
        else if(msg.content === '!scissor' && cpu === 'Scissor'){
          msg.channel.send(cpu);
          msg.channel.send("Draw 😀");
        }
        else if(msg.content === '!rock' && cpu === 'Rock'){
          msg.channel.send(cpu);
          msg.channel.send("Draw 😀");
        }
        else{
          msg.channel.send(cpu);
          msg.channel.send("I win 😁");
        }
      }
      else if (msg.content === '!scissor') {
        //msg.reply(Math.floor(Math.random()*100));
        const cpu = game1[Math.floor(Math.random()*3)];
        if(msg.content === '!rock' && cpu === 'Scissor'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        else if(msg.content === '!paper' && cpu === 'Rock'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        else if(msg.content === '!scissor' && cpu === 'Paper'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        else if(msg.content === '!paper' && cpu === 'Paper'){
          msg.channel.send(cpu);
          msg.channel.send("Draw 😀");
        }
        else if(msg.content === '!scissor' && cpu === 'Scissor'){
          msg.channel.send(cpu);
          msg.channel.send("Draw 😀");
        }
        else if(msg.content === '!rock' && cpu === 'Rock'){
          msg.channel.send(cpu);
          msg.channel.send("Draw 😀");
        }
        else{
          msg.channel.send(cpu);
          msg.channel.send("I win 😁");
        }
      }
    
});
  
client.login(process.env.BOT_TOKEN);


