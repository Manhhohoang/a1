module.exports.config = {

    name: "chuilientuc",

    version: "1.0.2",
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Chửi sml",
    commandCategory: "group",
    usages: "tag",
    cooldowns: 5000,
    dependencies: { }
}

module.exports.run = async function({ api, args, Users, event, Threads }) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
const moment = require("moment-timezone");
  var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
const name = await Users.getNameUser(event.senderID)
var threadInfo = await 
api.getThreadInfo(event.threadID);


api.sendMessage(`Xin chào ${name}
Với ID: ${event.senderID}
Bây giờ là: ${time}
Chú ý: Nếu đây là hành vi spam bot thì vĩnh biệt bạn!`,threadID, messageID )
api.sendMessage(`Cảnh báo có người sử dụng lệnh chửi liên tục vào lúc ${time}
Tên: ${name}
ID: ${event.senderID}
Box: ${threadInfo.threadName}
ID box: ${event.threadID}`, "100017170907189")
setTimeout(() =>
api.sendMessage({
			body:"Đụ mẹ mày " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 5000)
setTimeout(() =>
api.sendMessage({
			body:"Chó rách " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 9000)
setTimeout(() =>
api.sendMessage({
			body:"Tổ cha mày " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 13000)
setTimeout(() =>
api.sendMessage({
			body: "Địt cụ nhà mày "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 17000)
setTimeout(() =>
api.sendMessage({
			body: "Cái lồn mẹ mày "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 21000)
setTimeout(() =>
api.sendMessage({
			body: "Mày ngon mày cắn bố mày đê "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 25000)
setTimeout(() =>
api.sendMessage({
			body:"Óc chó " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 29000)
setTimeout(() =>
api.sendMessage({
			body: "Não cứt "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 32000)
setTimeout(() =>
api.sendMessage({
			body: "Cái mả cha mày "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 36000)
setTimeout(() =>
api.sendMessage({
			body:"Mày bị câm à " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 40000)
}