module.exports.config = {
  name: "baucua",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Phạm Minh Duy",
  description: "Bầu cua",
  commandCategory: "Game", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Currencies }) {
const { getData, increaseMoney, decreaseMoney } = Currencies;
const { threadID, messageID, senderID } = event;
const fs = require("fs")
if ( args.join() == "" ) { api.sendMessage({body:`Hướng dẫn chơi game bầu cua: baucua [tên hoặc bất kì ký hiệu nào liên quan]`,attachment: fs.createReadStream(__dirname + "/cache/baucua.png") },threadID,messageID);
}
else {

var a =Math.floor(Math.random() * 5)
var b = Math.floor(Math.random() * 5)
var c = Math.floor(Math.random() * 5);
var img =[];
img.push(fs.createReadStream(__dirname + "/cache/baucua" + a +".png"));
img.push(fs.createReadStream(__dirname + "/cache/baucua" + b+".png"));
img.push(fs.createReadStream(__dirname + "/cache/baucua" + c+".png"));

var data = await Currencies.getData(event.senderID);
var money = data.money
if ( !args[1] ) {
var mo = 1000
if ( mo > money ) return api.sendMessage(`Bạn không đủ ${mo} đô để tham gia trò chơi!`,threadID,messageID);
}
else {
var mo = parseInt(args[1])
if ( mo > money ) return api.sendMessage(`Bạn không đủ ${mo} đô để tham gia trò chơi!`,threadID,messageID);
}

if ( args[0] == "hươu" || args[0] == "0" || args[0] == "nai" ) {
var d = 0, con = "nai";
if ( a == 0 )  await increaseMoney(senderID, mo);
if ( b == 0 )  await increaseMoney(senderID, mo);
if ( c == 0 )  await increaseMoney(senderID, mo);

}

else if ( args[0] == "bầu" || args[0] == "1" || args[0] =="bí" ) {
var d = 1, con="bầu";
if ( a == 1 )  await increaseMoney(senderID, mo);
if ( b == 1 )  await increaseMoney(senderID, mo);
if ( c == 1 )  await increaseMoney(senderID, mo);

}

else if ( args[0] == "gà" || args[0] == "2" || args[0] =="🐣" || args[0] =="🐔" || args[0] =="🐓" || args[0] =="🐤" || args[0] =="🐥" ) {
var d = 2, con="gà";
if ( a == 2 )  await increaseMoney(senderID, mo);
if ( b == 2 )  await increaseMoney(senderID, mo);
if ( c == 2 )  await increaseMoney(senderID, mo);

}
else if ( args[0] == "cá" || args[0] == "3" || args[0] =="🐳" || args[0] =="🐋" || args[0] =="🐬" || args[0] =="🦭" || args[0] =="🐟" || args[0] =="🐠" || args[0] =="🐡" || args[0] =="🦈") {
var d = 3, con="cá";
if ( a == 3 )  await increaseMoney(senderID, mo);
if ( b == 3 )  await increaseMoney(senderID, mo);
if ( c == 3 )  await increaseMoney(senderID, mo);

}
else if ( args[0] == "cua" || args[0] == "4"  ) {
var d = 4, con="cua";
if ( a == 4 )  await increaseMoney(senderID, mo);
if ( b == 4 )  await increaseMoney(senderID, mo);
if ( c == 4 )  await increaseMoney(senderID, mo);

}
else if ( args[0] == "tôm" || args[0] =="tép" || args[0] == "5"  || args[0] =="🍤" || args[0] =="🦐") {
var d = 5, con="tôm";
if ( a == 5 )  await increaseMoney(senderID, mo);
if ( b == 5 )  await increaseMoney(senderID, mo);
if ( c == 5 )  await increaseMoney(senderID, mo);

}
var tong = 0
if ( a == d || b == d || c == d) {
if ( a == d ) tong = tong + mo;
if ( b == d ) tong = tong + mo;
if ( c == d ) tong = tong + mo;
api.sendMessage({body:`Bạn đã thắng ${tong} đô!
Bạn đã chọn ${con}
Kết quả là: `,
attachment: img},threadID,messageID) 
}
else{
await decreaseMoney(senderID, mo);
api.sendMessage({body:`Bạn đã thua ${mo} đô!
Bạn đã chọn ${con}
Kết quả là:
`, attachment: img},threadID,messageID)
} 
}
};