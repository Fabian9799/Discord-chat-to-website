require('dotenv').config();
const http = require("http");
// Express
const express = require('express')
const app = express()
const server = http.createServer(app); //create a server
// Websocket
const WebSocket = require('ws')
const wss = new WebSocket.Server({ server });
const port = 3000
// Discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

// Websocket On connection
wss.on("connection", function (ws, req) {
})

// Express / used Public folder
app.use('/', express.static('public'))

// Start express server 
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Discord
client.on('ready', () => {
  console.log('Bot online!');
});

// Create an event listener for messages
client.on('message', message => {
  if(message.channel.id == process.env.DISCORD_CHANNEL_ID && message.channel.guild.id == process.env.DISCORD_SERVER_ID){
    let data = {
      "message": message.content,
      "username": message.author.username,
      "avatar": message.author.avatar,
      "id": message.author.id
    }
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(data));
    });
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);