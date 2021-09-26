module.exports.config = {
    name: "blackjack",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Blackjack",
    commandCategory: "Game",
    usages: "",
    cooldowns: 0,
    dependencies: []
};
module.exports.handleEvent = async function ({ event, api, Users }) {
const { senderID, threadID, body, messageID } = event;
var fs = require("fs-extra");
var data = JSON.parse(fs.readFileSync(__dirname + `/cache/blackjack.json`));

if ( !data.author.includes(senderID) ) return;
var bai = data.blackjack[threadID][senderID]
var thoi = [
"thôi",
"dừng",
"dằn",
"thoy",
"thoi",
"ngưng",
"đủ"
]
if ( thoi.includes(body.toLowerCase() ) ) {
if ( data.lan[threadID][senderID].length == 0 ) {
if ( data.may[threadID][senderID] < data.tong[threadID][senderID][1]   || data.may[threadID][senderID] > 21 ) {
api.sendMessage(`Bạn thắng!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][1]}
Bài của bạn là: ${bai[1]} || ${bai[2]}`,threadID,messageID)
}
else if ( data.may[threadID][senderID] > data.tong[threadID][senderID][1] || data.tong[threadID][senderID][2] > 21)
{ api.sendMessage(`Bạn thua!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][1]}
Bài của bạn là: ${bai[1]} || ${bai[2]}`,threadID,messageID)
}
else { api.sendMessage(`Huề!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][1]}
Bài của bạn là: ${bai[1]} || ${bai[2]}`,threadID,messageID); }
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
} 
else if ( data.lan[threadID][senderID].length == 1 ) {
if ( data.may[threadID][senderID] < data.tong[threadID][senderID][2]  || data.may[threadID][senderID] > 21 ) {
api.sendMessage(`Bạn thắng!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][2]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
`,threadID,messageID)
}
else if ( data.may[threadID][senderID] > data.tong[threadID][senderID][2] ){ api.sendMessage(`Bạn thua!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][2]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
`,threadID,messageID)
}
else { api.sendMessage(`Huề!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][2]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}`,threadID,messageID); }

delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
} 
else if ( data.lan[threadID][senderID].length == 2 ) {
if ( data.may[threadID][senderID] < data.tong[threadID][senderID][3]  || data.may[threadID][senderID] > 21) {
api.sendMessage(`Bạn thắng!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][3]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
|| ${bai[4]}`,threadID,messageID)
}
else if ( data.may[threadID][senderID] > data.tong[threadID][senderID][3] ) { api.sendMessage(`Bạn thua!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][3]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
|| ${bai[4]}`,threadID,messageID)
}
else { api.sendMessage(`Huề!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][1]}
Bài của bạn là: ${bai[1]} || ${bai[2]}`,threadID,messageID); }

delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
}

}



if ( body.toLowerCase() == "tiếp" || body.toLowerCase() == "nữa" || body.toLowerCase() == "thêm" ) {
data.lan[threadID][senderID].push(senderID)
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2),'utf8');
if ( data.lan[threadID][senderID].length == 1 ) {
if ( 21 < data.tong[threadID][senderID][2] && 21 < data.may[threadID][senderID] ) {
return api.sendMessage(`Huề!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][2]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
`,threadID,messageID);
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
}
else if ( 21 < data.tong[threadID][senderID][2] ) {
return api.sendMessage(`Bạn thua!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][2]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
`,threadID,messageID);
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
}
else { api.sendMessage(`Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}`,threadID,messageID) }
}
if ( data.lan[threadID][senderID].length == 2 ) {
if ( 21 < data.tong[threadID][senderID][3] && 21 < data.may[threadID][senderID] ) {
return api.sendMessage(`Huề!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][3]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
|| ${bai[4]}`,threadID,messageID);
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
}
else if ( 21 < data.tong[threadID][senderID][3] ) {
return api.sendMessage(`Bạn thua!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][3]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
|| ${bai[4]}`,threadID,messageID);
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
}
else { api.sendMessage(`Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]} || ${bai[4]}`,threadID,messageID) }
}
if ( data.lan[threadID][senderID].length == 3 ) {
if ( 21 < data.tong[threadID][senderID][4] && 21 < data.may[threadID][senderID] ) {
return api.sendMessage(`Huề!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][4]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
|| ${bai[4]} || ${bai[5]}`,threadID,messageID);
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
}
else if ( 21 < data.tong[threadID][senderID][4] ) {
return api.sendMessage(`Bạn thua!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][4]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]}
|| ${bai[4]} || ${bai[5]}`,threadID,messageID);
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8'); 
}
else { api.sendMessage(`
Ngũ Linh!!!
Máy: ${data.may[threadID][senderID]}
Bạn: ${data.tong[threadID][senderID][4]}
Bài của bạn là: ${bai[1]} || ${bai[2]} || ${bai[3]} || ${bai[4]} || ${bai[5]}`,threadID,messageID)
delete data.author[senderID]			
delete data.blackjack[threadID][senderID]			
delete data.may[threadID][senderID]			
delete data.lan[threadID][senderID]			
delete data.tong[threadID][senderID]
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2), 'utf8');  }
}



}

}
module.exports.run = async function({ api, event, args, Currencies}) {
const { senderID, threadID, body, messageID } = event;

var fs = require("fs-extra");
		if (!fs.existsSync(__dirname + `/cache/blackjack.json`)) {
			const dataaa = {blackjack: {}, tong:{}, may:{}, lan: {}, author: [] };
			fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(dataaa));
					}
var data = JSON.parse(fs.readFileSync(__dirname + `/cache/blackjack.json`));

if(!data.blackjack.hasOwnProperty(threadID)) {

			data.blackjack[threadID] = {}; 
			fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2));
  	
  }

if ( !data.author.includes(senderID) ) data.author.push(senderID);
data.lan[threadID] = {}
data.lan[threadID][senderID] = []
data.blackjack[threadID][senderID] = []
data.blackjack[threadID][senderID].push(`b`)
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2),'utf8');

var a1 = Math.floor(Math.random() * 51 ) + 1,
a2 = Math.floor(Math.random() * 51 ) + 1,
a3 = Math.floor(Math.random() * 51 ) + 1,
a4 = Math.floor(Math.random() * 51 ) + 1,
a5 = Math.floor(Math.random() * 51 ) + 1,
may = Math.floor(Math.random() * 8 ) + 15;
if ( may == 23 ) {
may = 21
var bla = 23
}
var a = [ "a" ];
a.push(`${a1}`)
a.push(`${a2}`)
a.push(`${a3}`)
a.push(`${a4}`)
a.push(`${a5}`)

for ( let c = 1; c < 6; c++ ) {
var test = a[c] - 52;
if ( test < 0 ) test = a[c] - 39;
if ( test < 0 ) test = a[c] - 26;
if ( test < 0 ) test = a[c] - 13;
if ( test < 0 ) test = a[c];
if ( test == 0 ) test = 10;
a[c] = test;
if ( a[c] == 11 || a[c] == 12  ) a[c] = 10;
data.blackjack[threadID][senderID].push(`${a[c]}`)
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2),'utf8');
}
var tong1= parseInt(a[1]) + parseInt(a[2]),
tong2= parseInt(a[1]) + parseInt(a[2]) + parseInt(a[3]),
tong3= parseInt(a[1]) + parseInt(a[2]) + parseInt(a[3]) + parseInt(a[4]),
tong4= parseInt(a[1]) + parseInt(a[2]) + parseInt(a[3]) + parseInt(a[4]) + parseInt(a[5]);

data.may[threadID] = {}
data.may[threadID][senderID] = []
data.may[threadID][senderID].push(may)
data.tong[threadID] = {}
data.tong[threadID][senderID] = {}
data.tong[threadID][senderID][1] = []
data.tong[threadID][senderID][1].push(tong1)
data.tong[threadID][senderID][2] = []
data.tong[threadID][senderID][2].push(tong2)
data.tong[threadID][senderID][3] = []
data.tong[threadID][senderID][3].push(tong3)
data.tong[threadID][senderID][4] = []
data.tong[threadID][senderID][4].push(tong4)
fs.writeFileSync(__dirname + `/cache/blackjack.json`, JSON.stringify(data, null, 2),'utf8');


if ( a[1] == 1 && a[2] == 10 && bla == 23 || a[1] == 10 && a[2] == 1 && bla == 23 ) {
if ( a[1] == 1 ) a[1] = 11;
else if ( a[2] == 1 ) a[2] = 11;
return api.sendMessage(`Huề!
Máy: ${may}
Bạn: ${a[1]} || ${a[2]} `,threadID, messageID);
}



if ( a[1] == 1 && a[2] == 10 || a[1] == 10 && a[2] == 1 ) {
if ( a[1] == 1 ) a[1] = 11;
else if ( a[2] == 1 ) a[2] = 11;
return api.sendMessage(`BLACK JACK
${a[1]} || ${a[2]} `,threadID, messageID);
}
else if ( bla == 23 ) return api.sendMessage(`Máy BLACK JACK
11 || 10`, threadID, messageID);
api.sendMessage(`Đây là bài của bạn:

${a[1]} || ${a[2]}`,threadID,messageID)


};