module.exports.config = {
  name: "hack",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Phạm Minh Duy",
  description: "hack exp/money",
  commandCategory: "system", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Currencies }) {
const { threadID, messageID, senderID, mentions } = event;
var data = await Currencies.getData(event.senderID);
        var exp = data.exp
var money = data.money
if (args.join() == "") { api.sendMessage(`
》》Giá 100 đô = 1 exp 《《
${global.config.PREFIX}hack [số exp] exp

${global.config.PREFIX}hack [số tiền] money`,threadID,messageID) 
}

if ( args[1] == "exp" ) {
var b = args[0] * 100
if ( money < b )
return api.sendMessage("Không đủ tiền",threadID,mesageID)
else {
var ex = exp + parseInt(args[0])
var mo = money - b
Currencies.setData(event.senderID, options = {exp:exp + parseInt(args[0]) } )
Currencies.setData(event.senderID, options = {money:money - b } )
api.sendMessage(`Đã chuyển ${b} đô thành ${args[0]} exp
Exp mới: ${ex}
Money mới: ${mo}`,threadID,messageID)
}
}

if ( args[1] == "money" ) {
var b = args[0] / 100
if ( exp < b )
return api.sendMessage("Không đủ exp",threadID,mesageID)
else {
var ex = exp
var mo = money + parseInt(args[0])
Currencies.setData(event.senderID, options = {exp:exp - b } )
Currencies.setData(event.senderID, options = {money:money + parseInt(args[0])  } )
api.sendMessage(`Đã chuyển ${b} exp thành ${args[0]} đô
Exp mới: ${ex}
Money mới: ${mo}`,threadID,messageID)
}
}



};