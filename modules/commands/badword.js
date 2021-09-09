module.exports.config = {
	name: "badword",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "Chửi bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 0
};
module.exports.handleEvent = async function({ api, event, client ,Users}) {
	var { threadID, messageID,senderID} = event;
const moment = require("moment-timezone");
const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
var path = __dirname + `/cache/badword.json`
var fs = require("fs-extra");
var dataword = JSON.parse(fs.readFileSync(path));
if (dataword.word.includes(event.body.toLowerCase())) {
const name = await Users.getNameUser(senderID)
var threadInfo = await 
api.getThreadInfo(event.threadID);
let data = (await Users.getData(senderID)).data || {};
				data.banned = true;
				data.reason = `Chửi bot là ${event.body}`;
				data.dateAdded = time;
				await Users.setData(senderID, { data });
				global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });

api.sendMessage({body: `${name} chửi bot ${event.body.toLoweCase()} vậy bạn? Thiếu văn hóa 😌`, mentions: [{ tag: name, id :event.senderID}]} ,event.threadID,() =>
api.removeUserFromGroup(api.getCurrentUserID(),event.threadID),event.messageID)
api.sendMessage({body: `Bot đã rời khỏi nhóm ${threadInfo.threadName} - ${threadID}
${name} chửi bot là: 
${event.body}
ID: ${senderID}
Time: ${time}
`, mentions: [{ id: event.senderID, tag: name}]}, "100017170907189")


} }
module.exports.handleReply = async function({ api, event, client ,Users, handleReply }) {
if (String(event.senderID) !== String(handleReply.author)) return;
const { type, messageID } = handleReply;
const { threadID, senderID, body } = event;
var path = __dirname + `/cache/badword.json`
var fs = require("fs-extra");
var dataword = JSON.parse(fs.readFileSync(path));
switch (type) {
		case "add": {
if (dataword.word.includes(event.body.toLowerCase()))
return api.sendMessage("Đã có từ này trong dữ liệu",threadID,messageID);
dataword.word.push(event.body.toLowerCase())
fs.writeFileSync(path, JSON.stringify(dataword, null, 2),'utf8');
return api.sendMessage(`Đã thêm từ cấm: ${event.body} vào dữ liệu!`,threadID,messageID)
}
case "remove": {
var count = 0;
const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return            api.sendMessage( singleIndex + " không phải là 1 số!",threadID);
var text = handleReply.pending[singleIndex - 1]
if (!dataword.word.includes(text))
return api.sendMessage("Không có từ này trong dữ liệu",threadID,messageID);
dataword.word.splice(dataword.word.indexOf(text), 1);
           delete dataword.word[text]
			fs.writeFileSync(path, JSON.stringify(dataword, null, 2), 'utf8'); 
 count+=1;
        }
api.sendMessage(`Đã xóa thành công ${count} từ!`,threadID,messageID)
}
}
}

module.exports.run =  async function({ api, event, client ,Users, handleReply , args }) {
let {messageID, threadID, senderID} = event;
if (event.senderID == "100017170907189" || event.senderID == "100070703766211" ) {
	const type = args[0];
var path = __dirname + `/cache/badword.json`
var fs = require("fs-extra");
		if (!fs.existsSync(path)) {
			const dataaa = { word: []};
			fs.writeFileSync(path, JSON.stringify(dataaa));
					}
switch (type) {
		case "add": {
return api.sendMessage("Vui lòng reply tin nhắn này để thêm từ cấm!", threadID, (error, info) => {
		global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "add"
        })
	}, messageID);
}
		case "list": {
var msg = "", index = 1;
var dataword = JSON.parse(fs.readFileSync(path));
var list = dataword.word
for (const single of list) 
msg += `${index++}/ ${single}\n`;
return api.sendMessage("Vui lòng reply tin nhắn này để xóa từ cấm\n\n" + msg , threadID, (error, info) => {
		global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            pending: list,
            type: "remove"
        })
	}, messageID);
}

}
}
else { api.sendMessage("Quyền lồn biên giới!",threadID,messageID) }



}