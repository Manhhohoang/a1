module.exports.config = {
	name: "donate",
	version: "1.0.0",
	credits: "Phạm Minh Duy",
	hasPermssion: 0,
	description: "Donate",
	commandCategory: "Info",
	usages: "",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
api.sendMessage(`
Bạn có thể donate cho Admin qua:
Momo: 0706042940
SHB Bank: 1013033063
Cảm ơn 🖤
`,event.threadID,event.messageID)
}