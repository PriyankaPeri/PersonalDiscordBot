require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    const date = new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Kuwait",
    });
    const time = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kuwait",
    });
    console.log(`Hey there!
Current Date: ${date}
Current Time: ${time}`);
});
const game=(choice,msg)=> {
    let botchoice = Math.floor(Math.random() * 3);
    const converter = { R: 0, P: 1, S: 2 };
    let pc = converter[choice.content];
    if (botchoice === pc) msg.channel.send("It's a Tie!");
    if ((botchoice + pc) % 2 === 0) {
        [botchoice, pc] = [pc, botchoice];
    }
    if (botchoice > pc) {
        msg.channel.send("Eat your hat, the bot wins!");
    }
    if (pc > botchoice) {
        msg.channel.send("Pants down, you win!");
    }
}
client.on("message", (msg) => {
    if (msg.content === "stop") {
        client.removeListener(game);
    }
}) 
client.on("message", (msg) => {
    if (msg.content === "!game rps") {
        msg.channel.send("Pick R-Rock P-Paper S-Scissors");
        client.on("message", (choice) => game(choice, msg));
    }
});
client.login(process.env.BT);
