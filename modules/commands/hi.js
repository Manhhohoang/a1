module.exports.config = {
	name: "hi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "Chào mem",
	commandCategory: "system",
	usages: "",
	cooldowns: 0
};
module.exports.handleEvent = async function({ api, event, client ,Users}) {
	var { threadID, messageID,senderID} = event;
var path = __dirname + `/cache/hi.gif`
var fs = require("fs-extra");
const axios = require('axios')	
const name = await Users.getNameUser(senderID)
var data = [ "hi", "hi bot", "hello bot", "chào bot", "chào", 
"hello" ]
if (data.includes(event.body.toLowerCase() ) ) {
  let getdata = (await axios.get(`https://cdn.fbsbx.com/v/t59.2708-21/241655863_368223658176229_7335869101063938920_n.gif?_nc_cat=110&ccb=1-5&_nc_sid=041f46&_nc_ohc=gshjiEYUwIsAX9t2xTW&_nc_ht=cdn.fbsbx.com&oh=69652ea66e6380af368cd234fad3ecc5&oe=613AA577`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, "utf-8"));

api.sendMessage({body: `Xin chào ${name}!!!`,
attachment: fs.createReadStream(path),
mentions: [{ tag: name, id : senderID}] },threadID, () => fs.unlinkSync(path),messageID)
}
var list = [ "bye", "tạm biệt", "bye bot", "tạm biệt bot", "goodbye", "good bye", "pp" ]
if (list.includes(event.body.toLowerCase() ) ) {
  let getdata = (await axios.get(`https://cdn.fbsbx.com/v/t59.2708-21/241431713_866775247563595_3772874341184164119_n.gif?_nc_cat=102&ccb=1-5&_nc_sid=041f46&_nc_ohc=gfkTwDYvmzkAX-s7B2k&_nc_ht=cdn.fbsbx.com&oh=905b3c4039b8b2d81eedab72fa3717eb&oe=613AB6C7`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, "utf-8"));

api.sendMessage({body: `Tạm biệt ${name} nhé!!!`,
attachment: fs.createReadStream(path),
mentions: [{ tag: name, id : senderID}] },threadID, () => fs.unlinkSync(path),messageID)
}

}
module.exports.run =  async function({ api, event, client ,Users, handleReply , args }) {}