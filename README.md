# Table of contents
* [Features](#features)
*   [Prerequisites](#prerequisites)
*  [Installation](#installation)
   * [Download repo](#download-repo)
   * [Config files](#config-files)
   * [Install packages & start](#install-packages--start)
*  [ToDo](#todo)

![enter image description here](https://i.imgur.com/uK3ts7u.png)
# Features
Shows your discord messages from a specified channel on a website


# Prerequisites
**NodeJS** version **16.5.0**
# Installation
## Download repo
    gh repo clone Fabian9799/PhilipsHue-Discord-Bot
## Config files
 1. Rename .env.example to .env
 2. Change all the default values in your .env file
 
|KEY| VALUE |
|--|--|
| TOKEN | Your bot token from https://discord.com/developers/ |
| DISCORD_CHANNEL_ID | Your Discord channel id |
| DISCORD_SERVER_ID | Id of the Discord Server |

if you are using HTTPS change `ws://` to `wss://` in script.js line 2
## Install packages & start

    npm i
    npm run dev

## Done!

visit localhost:3000 and start typing in discord

# ToDo
 - [ ] Show Custom Emojis
 - [ ] Show Embeds
 - [ ] Show Images

