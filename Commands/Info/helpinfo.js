const Discord = require("discord.js");

module.exports = {
    name: "helpinfo",
    description: "Get Info Commands",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Info Commands")
        .setDescription("`botinfo`, `devteam`, `emojiid`, `help`, `invite`, `ping`, `report`, `userinfo`, `userid`, `serverinfo`, `suggest`")
        .setColor("RANDOM");

        message.channel.send(embed);
    }
}