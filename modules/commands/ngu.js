const fs = require("fs");
module.exports.config = {
    name: "ngu",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "Phạm Minh Duy",
    description: "ngu",
    commandCategory: "Chat",
    usages: "",
    cooldowns: 5,
    dependencies: {},
}

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "ngu") ? api.sendMessage({
				body: " bủh bủh lmao 🌚",
				attachment: fs.createReadStream(__dirname + `/cache/ngu.mp3`)
			}, event.threadID,event.messageID ) : '';
module.exports.run = () => {}