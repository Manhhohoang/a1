module.exports.config = {
  name: "tson",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Phạm Minh Duy",
  description: "Thiên Sơn",
  commandCategory: "Info", 
  usages: "", 
  cooldowns: 5,
  dependencies: [] 
};
module.exports.run = async function({ api, event }) {
const fs = global.nodemodule["fs-extra"];
if ( event.threadID == "5484434428295648" ) {
api.sendMessage( {
				attachment: fs.createReadStream(__dirname + `/cache/tson.jpeg`)
			}, event.threadID, event.messageID) }
else if ( event.threadID == "4649254765093993" ) {
api.sendMessage( {
				attachment: fs.createReadStream(__dirname + `/cache/tson.jpeg`)
			}, event.threadID, event.messageID) }

else { api.sendMessage("Quyền lồn biên giới!",event.threadID,event.messageID) }
};