require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    const date = new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Kuwait' });
    const time = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kuwait'})
    console.log(`Hey there!
Current Date: ${date}
Current Time: ${time}`);

});
client.login(process.env.BT);