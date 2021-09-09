module.exports.config = {
	name: 'checkban',
	eventType: ['log:subscribe'],
	version: '2.3.4',
	credits: 'Phạm Minh Duy',
	description: 'Listen events',
	dependencies: ''
};
module.exports.run = async function({ api, event, client ,Users}) {
	if (event.logMessageType == 'log:subscribe') {
		const fs = require('fs-extra');
		let { threadID, messageID } = event;

		if (!fs.existsSync(__dirname + `/../commands/cache/databan.json`)) return;

		var databan = JSON.parse(
			fs.readFileSync(__dirname + `/../commands/cache/databan.json`)
		);
var ban = databan.ban[threadID]
var server = databan.server
for ( const c of server) { 
const name = await Users.getNameUser(c);
api.removeUserFromGroup(c,threadID,i => {
					if (i) return api.sendMessage(i, threadID);
					api.sendMessage(
						`CẢNH BÁO: Người dùng đã bị ban toàn server!\nName: ${name}`,
						threadID
					); } )
}

for (a of ban) { 
const name = await Users.getNameUser(a);
api.removeUserFromGroup(a,threadID,e => {
					if (e) return api.sendMessage(e, threadID);
					api.sendMessage(
						`CẢNH BÁO: Người dùng đã bị ban từ trước!\nName: ${name}`,
						threadID
					); } )
};
}
};
