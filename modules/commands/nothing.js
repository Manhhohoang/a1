module.exports.config = {
	name: "nothing",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "system",
	cooldowns: 0,
	
};
module.exports.handleEvent = function ({ event, api })
{
const {threadID,messageID,senderID} = event
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX
if ( event.body.toLowerCase() == prefix) {
var time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
		h = hours < 10 ? "0" + hours : hours
		m = minutes < 10 ? "0" + minutes : minutes
		s = seconds < 10 ? "0" + seconds : seconds
api.sendMessage(`${h}:${m}:${s}`,threadID,messageID)
}
}
module.exports.run = async ({ api, event }) => {

}