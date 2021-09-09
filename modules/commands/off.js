module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Phạm Minh Duy",
	description: "Khởi động lại bot",
	commandCategory: "system",
	cooldowns: 5
};
module.exports.run = ({ event, api }) => {
api.sendMessage("Đang tắt hệ thống...\nTurn off.....", event.threadID, () => process.exit(0));
}