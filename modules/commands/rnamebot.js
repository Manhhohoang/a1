module.exports.config = {
	name: "rnamebot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Phạm Minh Duy",
	description: "Đổi biệt bot",
	commandCategory: "other",
	usages: "[name]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
	const name = args.join(" ")
var all = global.data.allThreadID || []
for ( let a of all ) {
	 api.changeNickname(`${name}`, a, api.getCurrentUserID() ); }
api.sendMessage("Completed!",event.threadID,event.messageID)
}
