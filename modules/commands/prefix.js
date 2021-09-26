const fs = require("fs");
module.exports.config = {
name: "prefix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "",
	commandCategory: "noprefix",
	usages: "",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event,Threads, client, __GLOBAL }) {
	var { threadID, messageID } = event;
let data = (await Threads.getData(threadID)).data || {};
const prefix = (data.hasOwnProperty("PREFIX")) ? data.PREFIX : global.config.PREFIX;
var time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
		hours = hours < 10 ? "0" + hours : hours
		minutes = minutes < 10 ? "0" + minutes : minutes
		seconds = seconds < 10 ? "0" + seconds : seconds
const timeStart = Date.now();

	if (event.body.indexOf("prefix")==0 || (event.body.indexOf("Prefix")==0)) {
			api.sendMessage("",threadID, () => api.sendMessage(`Bot đã hoạt động được: ${hours}:${minutes}:${seconds}\nPing: ${Date.now() - timeStart}ms \nPrefix của bot là: \n ${prefix}`, threadID, messageID));
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
