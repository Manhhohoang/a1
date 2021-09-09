module.exports.config = {
    name: "call",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Gửi tin nhắn đến admin",
    commandCategory: "other",
    usages: "tin nhắn",
    cooldowns: 5,
    dependencies: ""
  };
  module.exports.handleReply = async function({ api, event, handleReply, Users, args }) {
    if (String(event.senderID) !== String(handleReply.author) ) return;
const name = await Users.getNameUser(event.senderID)
switch(handleReply.type) {
      case "admin": { 
var arraytag = []
arraytag.push({tag: handleReply.mem, id: handleReply.idmem})
arraytag.push({tag: name, id : event.senderID})
api.sendMessage({ body: 
      `${handleReply.mem}
⚠️Phản hồi từ admin ${name} đến bạn:
${event.body}\n\n》Phản hồi tin nhắn này để trả lời《`, mentions: arraytag }, handleReply.id, (e, data) => global.client.handleReply.push({
    name: this.config.name, idmem: event.senderID, mem: name,
    author: event.senderID, id: event.threadID, 
    messageID: data.messageID,
    type: "mem" }), handleReply.messID);
return api.sendMessage("✔Đã gửi tin nhắn thành công!","100017170907189", event.messageID)

}   

case "mem" : {
api.sendMessage({body: `⚠️Phản hồi từ ${name}:
${event.body}`, mentions: [{
      id: event.senderID,
      tag: name
    }] }, "100017170907189" , (e, data) => global.client.handleReply.push({
      name: this.config.name, idmem: handleReply.idmem, mem: handleReply.mem, 
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: handleReply.id,
      type: "admin"
              }), handleReply.messageID )
return api.sendMessage("✔Đã gửi tin nhắn thành công!",event.threadID,event.messageID)
}


}}
module.exports.run = async function({ api, event, args, Users }) {
var a = "100017170907189"
    if (!args[0])
return api.sendMessage("[!] Bạn chưa nhập nội dung [!] ",event.threadID,event.messageID);
const name = await Users.getNameUser(event.senderID)
const namee = await Users.getNameUser(a)
var idbox = event.threadID
var threadInfo = await api.getThreadInfo(event.threadID);
var threadName = threadInfo.threadName;
const moment = require("moment-timezone");
idm= event.senderID
var time= moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:s || DD/MM/YYYY");
api.sendMessage({body: `✔Đã gửi tin nhắn thành công đến Admin ${namee}\n\n❌Bạn sẽ bị ban nếu đùa giỡn❌`, mentions: [{id: a, tag: namee}] }, idbox, event.messageID) 
api.sendMessage({body: `⚠️Tên box: ${threadName}\n🔎ID: ${event.threadID}\nTên: ${name}\nID: ${event.senderID}\nTime: ${time} \n\nNội dung: ${args.join(" ")}
`, mentions: [{ id: event.senderID, tag: name }] }, a, (error, info, ) =>
              global.client.handleReply.push({
                name: this.config.name, mem: name, idmem: idm,
                messageID: info.messageID,
                author: event.senderID,
                messID: event.messageID,
                id: idbox,
                type: "admin"
              }) )







};