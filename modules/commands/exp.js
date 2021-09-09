module.exports.config = {
  name: "exp",
  version: "1.0.0", 
  hasPermssion: 2,
  credits: "Phạm Minh Duy",
  description: "sửa exp",
  commandCategory: "system", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Currencies, Users }) {
const { threadID, messageID, senderID, mentions } = event;
if (args[0] == "me" ) { 
var data = await Currencies.getData(event.senderID);
        var exp = data.exp
if (args[1] == "+" )
{
api.sendMessage(`Đã cộng ${args[2]} exp`,threadID,messageID)
Currencies.setData(event.senderID, options = {exp:exp + parseInt(args[2] ) })
}
if (args[1] == "-" )
{
api.sendMessage(`Đã trừ ${args[2]} exp`,threadID,messageID)
Currencies.setData(event.senderID, options = {exp:exp - parseInt(args[2]) })
}

}

else if (Object.keys(event.mentions).length != 0) 
{
var mention = Object.keys(mentions)[0];
var data = await Currencies.getData(mention);
        var exp = data.exp
const name = await Users.getNameUser(mention);
if ( args[1] == "+") {
api.sendMessage(`Đã cộng ${args[2]} exp của ${name}`,threadID,messageID)
Currencies.setData(mention, options = {exp:exp + parseInt(args[2]) })
}
if ( args[1] == "-") {
api.sendMessage(`Đã trừ ${args[2]} exp của ${name}`,threadID,messageID)
Currencies.setData(mention, options = {exp:exp - parseInt(args[2]) })
}
}
else if (event.type == "message_reply") {
var data = await Currencies.getData(event.messageReply.senderID);
        var exp = data.exp
const name = await Users.getNameUser(event.messageReply.senderID);
if ( args[0] == "+") {
api.sendMessage(`Đã cộng ${args[1]} exp của ${name}`,threadID,messageID)
Currencies.setData(event.messageReply.senderID, options = {exp:exp + parseInt(args[1]) })
}
if ( args[0] == "-") {
api.sendMessage(`Đã trừ ${args[1]} exp của ${name}`,threadID,messageID)
Currencies.setData(event.messageReply.senderID, options = {exp:exp - parseInt(args[1]) })
}
}


}