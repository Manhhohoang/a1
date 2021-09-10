module.exports.config = {
	name: "avt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "Làm avt vip pro",
	commandCategory: "other",
	usages: "[Số nhân vật]",
	cooldowns: 5
};
module.exports.handleReply = async function({ api, event, client ,Users, handleReply }) {
if (String(event.senderID) !== String(handleReply.author)) return;
const { type } = handleReply;
    const { readFileSync, createReadStream, unlinkSync,writeFileSync } = global.nodemodule["fs-extra"];
const axios = require('axios')
switch (type) {

case "chunen" : {
api.unsendMessage(handleReply.messageID)
var str = event.body.toLowerCase()
str = str.replace(/ạ|Ạ/g, "%E1%BA%A1"); 
str = str.replace(/á|Á/g,"%C3%A1")
str = str.replace(/à|À/g,"%C3%A0")
str = str.replace(/ả|Ả/g, "%E1%BA%A3")  
 str = str.replace(/ã|Ã/g, "%C3%A3")
 str = str.replace(/â|Â/g, "%C3%A2")
str = str.replace(/ầ|Ầ/g, "%E1%BA%A7")
  str = str.replace(/ấ|Ấ/g, "%E1%BA%A5")
  str =str.replace(/ậ|Ậ/g, "%E1%BA%AD")
  str=str.replace(/é|É/g,"%C3%A9")
str=str.replace(/ê|Ê/g, "%C3%AA")
str=str.replace(/ề|Ề/g, "%E1%BB%81")
str=str.replace(/ị|Ị/g,"%E1%BB%8B")
str=str.replace(/ù|Ù/g,"%C3%B9")
str=str.replace(/ễ|Ễ/g,"%E1%BB%87")
str=str.replace(/ệ|Ệ/g,"%E1%BB%B3")
str=str.replace(/ỳ|Ỳ/g,"%E1%BB%85")
str=str.replace(/ũ|Ũ/g,"%C3%B5")
str=str.replace(/õ|Õ/g,"%E1%BB%97")
str=str.replace(/ỗ|Ỗ/g,"%C5%A9")
str=str.replace(/ồ|Ồ/g,"%E1%BB%93")
str=str.replace(/ý|Ý/g,"%C3%BD")
str=str.replace(/ọ|Ọ/g, "%E1%BB%8D")
str = str.replace(/ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|ẹ|ẻ|ẽ|ế|ể/g,"e"); 
  str = str.replace(/ì|í|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ỏ|ô|ố|ộ|ổ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
  str = str.replace(/ú|ụ|ủ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỵ|ỷ|ỹ/g,"y");
  str = str.replace(/đ/g,"d"); 

  
  
return api.sendMessage(`
✔Đã tìm thấy chữ nền: ${event.body}

[!] Vui lòng phản hồi tin nhắn này để nhập chữ ký!`,event.threadID,(e, info)=> {
global.client.handleReply.push({
            name: this.config.name, maso: handleReply.maso , chunen: str,
  chunenn: event.body,
            messageID: info.messageID,
            author: event.senderID,
            type: "chuky"
})
},event.messageID)

}


case "chuky": {
api.unsendMessage(handleReply.messageID)
 var pa =__dirname + `/cache/avt${event.messageID}.png`;
let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/90588343_202866341010781_4560037954361229312_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_1MC6L_YGUIAX9u_5ge&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=f6a5eb4940d19e853d125c7a8761940d&oe=615E3640`, { responseType: 'arraybuffer' })).data;

  writeFileSync(pa, Buffer.from(getdata, "utf-8"));  
 var str = event.body
str = str.replace(/ạ|Ạ/g, "%E1%BA%A1"); 
str = str.replace(/á|Á/g,"%C3%A1")
str = str.replace(/à|À/g,"%C3%A0")
str = str.replace(/ả|Ả/g, "%E1%BA%A3")  
 str = str.replace(/ã|Ã/g, "%C3%A3")
 str = str.replace(/â|Â/g, "%C3%A2")
str = str.replace(/ầ|Ầ/g, "%E1%BA%A7")
  str = str.replace(/ấ|Ấ/g, "%E1%BA%A5")
  str =str.replace(/ậ|Ậ/g, "%E1%BA%AD")
  str=str.replace(/é|É/g,"%C3%A9")
str=str.replace(/ê|Ê/g, "%C3%AA")
str=str.replace(/ề|Ề/g, "%E1%BB%81")
str=str.replace(/ị|Ị/g,"%E1%BB%8B")
str=str.replace(/ù|Ù/g,"%C3%B9")
str=str.replace(/ễ|Ễ/g,"%E1%BB%87")
str=str.replace(/ệ|Ệ/g,"%E1%BB%B3")
str=str.replace(/ỳ|Ỳ/g,"%E1%BB%85")
str=str.replace(/ũ|Ũ/g,"%C3%B5")
str=str.replace(/õ|Õ/g,"%E1%BB%97")
str=str.replace(/ỗ|Ỗ/g,"%C5%A9")
str=str.replace(/ồ|Ồ/g,"%E1%BB%93")
str=str.replace(/ý|Ý/g,"%C3%BD")
str=str.replace(/ọ|Ọ/g, "%E1%BB%8D")
str = str.replace(/ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|ẹ|ẻ|ẽ|ế|ể/g,"e"); 
  str = str.replace(/ì|í|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ỏ|ô|ố|ộ|ổ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
  str = str.replace(/ú|ụ|ủ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỵ|ỷ|ỹ/g,"y");
  str = str.replace(/đ/g,"d"); 
  str = str.replace(/Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A"); str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ế|Ể/g, "E"); str = str.replace(/Ì|Í|Ỉ|Ĩ/g, "I"); str = str.replace(/Ò|Ó|Ỏ|Ô|Ố|Ộ|Ổ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O"); str = str.replace(/Ú|Ụ|Ủ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U"); str = str.replace(/Ỳ|Ỵ|Ỷ|Ỹ/g, "Y"); str = str.replace(/Đ/g, "D");
return api.sendMessage({body:`✔Đã tìm thấy chữ ký: ${event.body}

[!] Vui lòng phản hồi tin nhắn này để nhập màu
(Bằng tiếng anh)`, attachment: createReadStream(pa)},event.threadID,(e, info)=> {unlinkSync(pa);
global.client.handleReply.push({
            name: this.config.name, maso: handleReply.maso , chunen: handleReply.chunen,chunenn:handleReply.chunenn,
chuky: str,chukyy: event.body,
            messageID: info.messageID,
            author: event.senderID,
            type: "mau"
})
},event.messageID)

}
case "mau" : {
api.unsendMessage(handleReply.messageID)
 var time = Date.now()
const path = __dirname + `/cache/avt${event.messageID}.png`;
await global.utils.downloadFile(`https://taoanhdep.kaysil.dev/v1/wibu/create?id_nhanvat=${handleReply.maso}&chu_nen=${handleReply.chunen}&chu_ky=${handleReply.chuky}&mau_nen=${event.body}`, path);


  
const name = await Users.getNameUser(event.senderID);
api.sendMessage("",event.threadID,() => api.sendMessage(`✔ Đã tìm thấy màu: ${event.body}

⚠️Đang tải vui lòng đợi...
Ping hiện tại là: ${Date.now() - time}ms`,event.threadID,(e,data) =>{
  api.sendMessage({body: `Đây là avt của ${name}
Mã số nhân vật: ${handleReply.maso}
Chữ nền: ${handleReply.chunenn}
Chữ ký: ${handleReply.chukyy}
Màu: ${event.body} `, attachment: createReadStream(path),
mentions: [{ tag: name, id : event.senderID}] }, event.threadID, () =>{api.unsendMessage(data.messageID)

unlinkSync(path) }, handleReply.messageID)} ,event.messageID))

return ;

}


}}





module.exports.run = async ({ event, api, args, Users }) => {
    const { readFileSync, createReadStream, unlinkSync,writeFileSync } = global.nodemodule["fs-extra"];
const {threadID,messageID,senderID} = event;
const axios = require('axios')
if ( args.join() == "" ) {const path = __dirname + `/cache/avt.png`;

let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/224562072_2963197620566393_778022445891977121_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=JoJ6eGuQjOYAX9DVL4Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=26ab4dfd30b78354383083781b350231&oe=615E4EC0`, { responseType: 'arraybuffer' })).data;
  writeFileSync(path, Buffer.from(getdata, 'utf-8'));
var time = Date.now()
return api.sendMessage("",event.threadID, () => api.sendMessage({body: `Ping hiện tại: ${Date.now() - time }ms

Tạo avt siêu xịn sò 💁‍♂️💁‍♂️💁‍♂️

Nhập ${global.config.PREFIX}avt search để xem mã số

Cú pháp: Mã số nhân vật ( bé hơn 237 ), chữ nền (Không dấu không cách), chữ ký (Không dấu không cách), màu nền (tiếng anh hoặc mã bên dưới)

Ví dụ:

${global.config.PREFIX}avt 124 `, attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID))
}
if ( args[0] == "search" )
{api.sendMessage( `
ĐÂY LÀ DANH SÁCH NHÂN VẬT:

ace: 197
ai ohto: 20
ainz ooal gown: 43
akaza: 57
albedo: 116
amajiki: 138
anos: 125
aqua: 35
asta: 131
asuma: 230
asuna: 174
ayaka: 29
baji: 66
bakugou: 177
bakura ryou: 91
black goku: 235
brandish: 167
chaheain: 184
cherry: 130
chifuyu: 64
chitanda eru: 183
dabi: 142
darkness: 37
dazai: 139
deidara: 213
dimaria yesta: 137
dio: 185
doflamingo: 199
doraemon: 118
draken: 62
elaina: 102
emilia: 11
emma: 61
eren: 159
erza: 165
fischl: 24
fubuki: 107
gaara: 223
gajeel: 172
ganyu: 26
gilgamesh: 78
gin: 126
gintoki: 16
giorno giovanna: 187
giyuu: 51
gohan: 234
gray: 164
gura: 176
hair black: 135
haitani ran: 67
haitani rindou: 68
hanako: 31
hanji zoe: 161
hanma: 72
hashirama: 224
hidan: 215
hina: 59
hinata hyuga: 229
hinata: 152
hiroomi: 122
hy tomboy: 0
ichigo: 111
imaushi: 73
inosuke: 48
inuyasha: 94
iruma: 98
itachi: 214
izana kurokawa: 70
izumi sagiri: 117
jean: 25
jinmori: 144
jotaro: 186
juuzou: 8
kageyama tobio: 153
kaguya: 42
kaiba: 80
kaito kid: 193
kakashi: 205
kakuzu: 212
kaneki ken: 7
kanna: 188
kaori: 175
karma: 74
kawaragi senju: 69
kazutora: 71
kenma: 123
keqing: 23
killua zoldyck: 30
kirito: 173
kisaki: 63
kisame: 216
kiyotaka ayanokōji: 93
kokushibou: 50
konan: 210
koro sensei: 14
kotori: 76
kuroko: 143
kurumi: 41
kushina: 221
kyaru: 38
l lawlie: 145
langa: 141
laxus: 169
levi: 158
lisa: 22
loli: 189
luck voltia: 132
lucy: 163
luffy: 194
luna: 149
madara: 225
mahito: 84
mai: 121
makomo: 55
marik ishtar: 92
megumi: 83
megumin: 36
midoriya: 133
mikasa: 160
mikey: 60
miku: 39
milim: 44
minato: 222
mirai: 103
mirajane: 166
misaki taro: 181
mitsuha: 237
mitsuya: 65
mizuhara chizuru: 3
mona: 21
monika: 99
muichirou: 53
nagato: 209
nagisa: 75
nakano ichika: 86
nakano itsuki: 90
nakano miku: 88
nakano nino: 87
nakano yotsuba: 89
nami: 200
nanami mami: 4
nanami: 19
naraku: 146
naruto: 203
natsu: 162
nezuko: 46
nico: 198
nobita: 119
obito: 211
oikawa tooru: 155
oreki: 182
orochimaru: 219
qiqi trinh: 28
raiden mei herrscher: 12
raiden mei: 13
raiden shogun: 27
ran: 191
raphtalia: 17
rei ayanami: 97
reki: 140
rem: 10
rengoku: 56
rikka: 81
rimuru: 150
ruby rose: 77
runa: 15
saber: 32
sabito: 54
sakura nanamine: 113
sakura saber: 33
sakura: 206
sakurasawa sumi: 6
sanji: 196
sarashina ruka: 5
sasori: 217
sasuke: 204
sato kazuma: 34
satoru gojo: 190
sesshoumaru: 147
shanks: 201
shido: 40
shigeo kageyama: 101
shikamaru: 226
shin: 128
shinichi: 192
shinobu: 52
shizuka: 120
siesta: 124
sistine fibel: 95
songoku: 232
sting eucliffe: 170
sukuna: 18
sungjinwoo: 178
syalis: 96
takegawa hotaru: 127
takemichi: 58
taki: 236
tamako: 115
tanaka: 154
tanjiro: 45
tanmoshi: 108
tatumaki: 106
temari: 227
tenten: 220
tobirama: 231
todoroki: 157
toga himiko: 134
toge inumaki: 82
tomoe: 148
trafalgar law: 202
tsubasa: 179
tsukishima: 151
tusnade: 207
uchiha shisui: 228
umaru: 104 saitama: 105
usagi tsukino: 129
uzaki: 156
vegeta: 233
violet: 114
wakabayashi: 180
wendy: 171
xiao: 85
yahiko: 208
yamauchi sakura: 9
yato: 1
yoriichi: 49
yosano akiko: 112
yugi: 79
yumeko: 136
yuri: 100
yuu otosaka: 2
yuzaki masa: 109
zenitsu: 47
zeref: 168
zero two: 110
zetsu: 218
zoro: 195
`,event.threadID,event.messageID)

}
else {
var maso = args.join("")
var ma = maso.match(/\d/g);
var mas = ma.join("");
if ( mas > 237 || mas < 1 ) return api.sendMessage(`⚠️Mã số nhân vật không hợp lệ⚠️

Vui lòng nhập ${global.config.PREFIX}avt search để xem mã số chính xác!`,event.threadID,event.messageID);
api.sendMessage(`✔Mã số nhân vật đã chọn là: ${mas}

[!] Vui lòng phản hồi tin nhắn này để nhập chữ nền!`,threadID, (e, info ) => {
global.client.handleReply.push({
            name: this.config.name, maso: mas,
            messageID: info.messageID, 
            author: event.senderID,
            type: "chunen"
})
},messageID)

}
};