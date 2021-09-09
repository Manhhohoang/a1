module.exports.config = {
    name: "cony",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Xem tỉ lệ có ny trong năm",
    commandCategory: "Lover",
    usages: "",
    cooldowns: 5,
    dependencies: []
}
module.exports.run = async function({ api, args, Users, event}) {
const fs = require("fs");
const axios = global.nodemodule["axios"]
let getdata = (await axios.get(`https://cdn.fbsbx.com/v/t59.2708-21/50278618_311466889499328_8302795360879771648_n.gif?_nc_cat=100&ccb=1-5&_nc_sid=041f46&_nc_ohc=EutcSKsSuesAX_bDGg5&_nc_ht=cdn.fbsbx.com&oh=7e00bceef4ada86f728aace4e17121cf&oe=6138FC98`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(__dirname + `/cache/cony.gif`, Buffer.from(getimg, "utf-8"));
	
var a = Math.floor(Math.random() * 100);
var msg = {body: "Tỉ lệ có ny của bạn trong năm nay,\n....hmmmm....\nRơi vào: " + a + "%",
	attachment: fs.createReadStream(__dirname + `/cache/cony.gif`)
			}
api.sendMessage(msg
,event.threadID,() => fs.unlinkSync(__dirname + "/cache/cony.gif"),event.messageID)
}