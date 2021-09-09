module.exports.config = {
	name: "rnamead",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "Đổi biệt admin",
	commandCategory: "other",
	usages: "[name]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
if (event.senderID == "100017170907189" ) {
	const name = args.join(" ")
var all = global.data.allThreadID || []
for ( let a of all ) {
	 api.changeNickname(`${name}`, a, event.senderID); }
api.sendMessage("Completed!",event.threadID,event.messageID)
}
else { api.sendMessage("Quyền lồn biên giới!",event.threadID,event.messageID) }
}
