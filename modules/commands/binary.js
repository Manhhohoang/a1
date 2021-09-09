module.exports.config = {
	name: "bin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "Chuyển văn bản thành hệ nhị phân",
	commandCategory: "game",
	dependencies: {},
	usages: "text",
	cooldowns: 5
};

module.exports.run = ({ api, event, args }) => {
 let a = args.join(" ");
var msg = ""
for ( var i=0; i <a.length;i++) {
msg += a.charCodeAt(i).toString(2) + " "

}
api.sendMessage(msg,event.threadID,event.messageID)
};
