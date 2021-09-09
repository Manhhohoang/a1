module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Phạm Minh Duy",
	description: "Khởi động lại bot",
	commandCategory: "system",
	cooldowns: 5
};
module.exports.run = ({ event, api }) => {
api.sendMessage("Đang khởi động lại hệ thống...", event.threadID, () => process.exit(1));
}