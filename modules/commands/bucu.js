module.exports.config = {
  name: "bulon",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Phạm Minh Duy",
  description: "Bú lồn",
  commandCategory: "Game", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
var mention = Object.keys(event.mentions)[0];
const na = await Users.getNameUser(mention);
let getdata = (await axios.get(`https://cdn.fbsbx.com/v/t59.2708-21/212488572_3101505923402557_6385961675390293429_n.gif?_nc_cat=105&ccb=1-5&_nc_sid=041f46&_nc_ohc=lLhLA36T1K8AX_1862-&_nc_ht=cdn.fbsbx.com&oh=7058889262a9689796d558cb9e39f0b4&oe=61352EA0`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync( __dirname + '/cache/bulon.gif', Buffer.from(getdata, 'utf-8'));
api.sendMessage({body: `Mlem mlem ${na}` , mentions: [{id: mention, tag: na }],  attachment: fs.createReadStream( __dirname + '/cache/bulon.gif')},event.threadID,event.messageID)
};