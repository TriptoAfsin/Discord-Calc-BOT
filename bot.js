require('dotenv').config(); //npm i dotenv
const express = require('express'); //npm i express


const Discord = require('discord.js'); //npm install discord.js
const client = new Discord.Client();



const toss = ["Head", "Tail"];
const dice = [1,2,3,4,5,6];


const greetings = ["hi", "Hi", "Hello", "hello", "hey", "How are you?", "wassup", "whatsup", "whats up", "Whatsup"];
const greetReply = ["Hey 😀", "Hello", "Hi there 😀", "Hi", "Hello 😊"];
const rpsGame = ["!rock", "!paper", "!scissor"];
const game1 = ["Rock", "Paper", "Scissor"];
const helpText = ["!help", "!Help"];
const rpsLogic = {
  '!rock': {weakTo: 'Paper', strongTo: 'Scissor'},
  '!paper': {weakTo: 'Scissor', strongTo: 'Rock'},
  '!scissor': {weakTo: 'Rock', strongTo: 'Paper'}
}

const help = `Commands: \n 1. !toss: does coin toss\n 2. !dice: does dice roll \n 3. !random: gives a random number(1-100)\n 4. !rock, !paper, !scissor : rock, paper, scissor game`;

//function to check login
client.on('ready', () => {
    console.log(`Bot Name: ${client.user.tag}\nSuccessfully logged in✔`);
});
  

  //handleing messages
client.on('message', msg => {

    if (greetings.includes(msg.content)) {
      msg.reply(greetReply[Math.floor(Math.random()*greetReply.length)]);
      msg.react("🤍");
    }

    else if(helpText.includes(msg.content)){
      msg.reply(help);
    }

    //random
    else if (msg.content === '!random' || msg.content === '!Random') {
       
        msg.channel.send(Math.floor(Math.random()*100));
    }

    //toss
    else if (msg.content === '!toss' || msg.content === '!Toss') {
        msg.channel.send(`${toss[Math.floor(Math.random()*2)]}`);
    }

    //dice roll

    else if (msg.content === '!dice' || msg.content === '!Dice') {
      msg.channel.send(dice[Math.floor(Math.random()*dice.length)]);
  }

      //rock, paper , scissor 
    else if (rpsGame.includes(msg.content)) {
        const cpu = game1[Math.floor(Math.random()*3)];

        //user wins
        if(rpsLogic[msg.content].strongTo === cpu){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }

        /*
        else if(msg.content === '!paper' && cpu === 'Rock'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        else if(msg.content === '!scissor' && cpu === 'Paper'){
          msg.channel.send(cpu);
          msg.channel.send("You win 💯");
        }
        */

         //bot wins
         else if(rpsLogic[msg.content].weakTo === cpu){
          msg.channel.send(cpu);
          msg.channel.send("I win 😁");
        }

        //draws
        else{
          msg.channel.send(cpu);
          msg.channel.send("Draw 😀");
        }
      }
    
});
  
client.login(process.env.BOT_TOKEN);


