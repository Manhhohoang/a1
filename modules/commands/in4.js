module.exports.config = {
	name: "in4",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "Lợi",
	description: "xem thông tin nhóm chat của bạn",
	commandCategory: "Info",
	usages: "in4",
	cooldowns: 5,
	
};
module.exports.run = async ({ api, event}) => {
api.sendMessage("mày có tư cách để xin info bot à?:)", event.threadID);
}