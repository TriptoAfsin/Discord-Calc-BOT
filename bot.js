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

  const greetings = ["hi", "Hi", "Hello", "hello", "hey", "How are you?", "wassup", "whatsup", "whats up", "Whatsup"];
  const greetReply = ["Hey😀", "Hello", "Hi there😀", "Hi", "Hello😊"];


    if (greetings.includes(msg.content)) {
      msg.reply(greetReply[Math.floor(Math.random()*greetReply.length)]);
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
      else if (msg.content === '!rock' || msg.content === '!paper' || msg.content === '!scissor') {
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


