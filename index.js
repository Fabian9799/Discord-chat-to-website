require('dotenv').config();
const http = require("http");
const express = require('express')
const app = express()
const server = http.createServer(app);
const WebSocket = require('ws')
const wss = new WebSocket.Server({ server });
const port = 3000
const Discord = require('discord.js');
const client = new Discord.Client();
// Websocket On connection
wss.on("connection", function(ws, req) {})

// Express / used Public folder
app.use('/', express.static('public'))

// Start express server 
server.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

// Discord
client.on('ready', () => {
    console.log('Bot online!');
});

// Create an event listener for messages
client.on('message', message => {
    const args = message.content.split(' ');
    if (message.channel.id == process.env.DISCORD_CHANNEL_ID && message.channel.guild.id == process.env.DISCORD_SERVER_ID) {
        let data = {
            "message": message.content,
            "username": message.author.username,
            "avatar": message.author.avatar,
            "id": message.author.id
        }
        console.log(message.content);

        if ((message.content.includes('<a') || message.content.includes('<:')) && message.content.includes('>')) {
            console.log(message.content);

            const { Util } = require('discord.js');
            for (const rawEmoji of args) {
                const parsedEmoji = Util.parseEmoji(rawEmoji)
                if (parsedEmoji.id) {
                    const extension = parsedEmoji.animated ? ".gif" : ".png";
                    const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`

                    data = {
                        "message": "",
                        "username": message.author.username,
                        "avatar": message.author.avatar,
                        "id": message.author.id,
                        "emoji": url
                    }

                }
            }
        }
        console.log(data)
        wss.clients.forEach(function each(client) {
            client.send(JSON.stringify(data));

        });
    }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);