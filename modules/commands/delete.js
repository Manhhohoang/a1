module.exports.config = {
	name: "delete",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Phạm Minh Duy",
	description: "Xóa tin nhắn box",
	commandCategory: "System",
	cooldowns: 0
}

module.exports.run = async function ({ event, api }) {
  api.sendMessage("Tiến hành xóa tin nhắn...",event.threadID, () => api.deleteThread(event.threadID) )
}