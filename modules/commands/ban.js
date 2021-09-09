module.exports.config = {
	name: "ban",
	version: "3.3.5",
	hasPermssion: 1,
	credits: "Phạm Minh Duy",
	description: "Ban vĩnh viễn thành viên",
	commandCategory: "group",
	usages: "tag hoặc reply ib, unban [id], list",
	cooldowns: 0
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
	let {messageID, threadID, senderID,mentions} = event;
	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('❎Bot cần quyền quản trị viên nhóm để sử dụng lệnh này\nVui lòng thêm và thử lại!', threadID, messageID);
	var fs = require("fs-extra");
		if (!fs.existsSync(__dirname + `/cache/databan.json`)) {
			const dataaa = {ban: {}, server: [] };
			fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(dataaa));
					}
var databan = JSON.parse(fs.readFileSync(__dirname + `/cache/databan.json`));

if(!databan.ban.hasOwnProperty(threadID)) {

			databan.ban[threadID] = []; 
			fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
  	
  }

 if(args[0] == "reset") {
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Chỉ qtv nhóm mới có thể sử dụng lệnh reset!', threadID, messageID);
  	databan.ban[threadID]= []
  	fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
  	api.sendMessage("Đã reset toàn bộ dữ liệu Ban của nhóm!", threadID, messageID);
  }

else if(args[0] == "server.reset") {
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Chỉ qtv nhóm mới có thể sử dụng lệnh reset!', threadID, messageID);
  	databan.server= []
  	fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
  	api.sendMessage("Đã reset toàn bộ dữ liệu Ban của nhóm!", threadID, messageID);
  }




else if(args[0] == "unban") {
  	var id = parseInt(args[1]), mybox = databan.ban[threadID];
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Chỉ qtv nhóm mới có thể sử dụng lệnh unban!', threadID, messageID);
	
  	if(!id) return api.sendMessage("❎Cần nhập id người cần xóa khỏi danh sách bị cấm vào nhóm", threadID, messageID);
  	databan.ban[threadID];
if (!mybox.includes(args[1])) return api.sendMessage(`Người dùng mang id ${id} chưa bị Ban`,threadID,messageID);
else {
		api.sendMessage(`✅Đã xóa người dùng có id ${id} khỏi danh sách Ban`, threadID, messageID);
			mybox.splice(mybox.indexOf(id), 1);
			delete databan.ban[threadID][id]
			fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2), 'utf8'); 
}
  }


else if(args[0] == "server.unban") {
  	var id = parseInt(args[1]), mybox = databan.server;
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Chỉ qtv nhóm mới có thể sử dụng lệnh unban!', threadID, messageID);
	
  	if(!id) return api.sendMessage("❎Cần nhập id người cần xóa khỏi danh sách ban toàn server", threadID, messageID);
  	databan.server;
if (!mybox.includes(args[1])) return api.sendMessage(`Người dùng mang id ${id} chưa bị Ban toàn server`,threadID,messageID);
else {
		api.sendMessage(`✅Đã xóa người dùng có id ${id} khỏi danh sách`, threadID, messageID);
			mybox.splice(mybox.indexOf(id), 1);
			delete databan.server[id]
			fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2), 'utf8'); 
}
  }







else if (args[0] == "add" ) { 
var id = parseInt(args[1])
if(!id) return api.sendMessage("❎Cần nhập id người cần ban", threadID, messageID);
const name = await Users.getNameUser(args[1]);
if (databan.ban[threadID].includes(args[1])) {api.sendMessage("Đã ban người dùng từ trước\nName: " + name + "\nID: " + id,event.threadID,event.messageID); }
else {
databan.ban[threadID].push(args[1])
fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2),'utf8');
api.sendMessage("Đã ban thành công người dùng",threadID,() => api.removeUserFromGroup(id,threadID),event.messageID) }
}

else if (args[0] == "server" ) { 
var id = parseInt(args[1])
if(!id) return api.sendMessage("❎Cần nhập id người cần ban", threadID, messageID);
const name = await Users.getNameUser(args[1]);
if (databan.server.includes(args[1])) {api.sendMessage("Đã ban toàn server người dùng từ trước\nName: " + name + "\nID: " + id,event.threadID,event.messageID); }
else {

databan.server.push(args[1])
fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2),'utf8');
api.sendMessage(`Đã ban toàn server thành công!\nName: ${name} \nID: ${id}`,threadID,() => api.removeUserFromGroup(id,threadID),event.messageID) } 
}






else if(args[0] == "list") {
  	var mybox = databan.ban[threadID];
api.sendMessage(mybox,threadID)
  	var msg = "";
  	for(const iduser of mybox) {
  		const name = await Users.getNameUser(iduser);
  		msg += "╔Name: " + name + "\n╚ID: " + iduser + "\n";
  	}
  	msg == "" ? api.sendMessage("✅Chưa có ai bị Ban", threadID, messageID) : api.sendMessage("[Nhóm này hiện có: " + mybox.length + " thành viên bị ban]"+"\n❎Những thành viên đã bị Ban:\n"+msg, threadID, messageID);
  } 


else if(args[0] == "server.list") {
  	var mybox = databan.server;
  	var msg = "";
  	for(const iduser of mybox) {
  		const name = await Users.getNameUser(iduser);
  		msg += "╔Name: " + name + "\n╚ID: " + iduser + "\n";
  	}
  	msg == "" ? api.sendMessage("✅Chưa có ai bị Ban toàn server", threadID, messageID) : api.sendMessage("[Danh sách ban toàn server có: " + mybox.length + " người]"+"\n❎Những thành viên đã bị Ban:\n"+msg, threadID, messageID);
  } 






else if (Object.keys(event.mentions).length != 0) {
var mention = Object.keys(mentions);
const name = await Users.getNameUser(mention);
if (databan.ban[threadID].includes(mention)) {api.sendMessage("Đã ban người dùng từ trước\nName: " + name + "\nID: " + mention,event.threadID,event.messageID); }
else {
for ( let o in mention ) {
databan.ban[threadID].push(mention[o]) 
fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2),'utf8');
api.sendMessage("Đã ban thành công người dùng",threadID,() => api.removeUserFromGroup(mention[o],threadID),event.messageID) }  
}
}


else if (event.type == "message_reply") {
const name = await Users.getNameUser(event.messageReply.senderID);
if (databan.ban[threadID].includes(event.messageReply.senderID)) {api.sendMessage("Đã ban người dùng từ trước\nName: " + name + "\nID: " + event.messageReply.senderID,event.threadID,event.messageID); }
else {
databan.ban[threadID].push(event.messageReply.senderID)
fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2),'utf8');
api.sendMessage("Đã ban thành công người dùng!",threadID,() =>
api.removeUserFromGroup(event.messageReply.senderID,threadID),event.messageID) } 
 }

else { api.sendMessage("Vui lòng tag hoặc reply ib người muốn ban",event.threadID, event.messageID) }


  };