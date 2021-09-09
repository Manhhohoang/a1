module.exports.config = {
	name: "botngu",
	version: "1.0.0",
	credits: "Phạm Minh Duy",
	hasPermssion: 0,
	description: "end",
	commandCategory: "System",
	usages: "",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
var { senderID, threadID, messageID} = event;
api.sendMessage("Đã kích hoạt quá trình tự hủy!",threadID,messageID)
setTimeout(() => api.sendMessage("Còn 40s",threadID,messageID),10000)
setTimeout(() => api.sendMessage("Còn 30s",threadID,messageID), 20000)
setTimeout(() => api.sendMessage("Còn 20s",threadID,messageID),30000)
setTimeout(() => api.sendMessage("Còn 10s",threadID,messageID),40000)
setTimeout(() => api.sendMessage("Shut down...",threadID,messageID),50000)
setTimeout(() => api.removeUserFromGroup(api.getCurrentUserID(),threadID), 52000)
}
