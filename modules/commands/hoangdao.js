module.exports.config = {
	name: "hoangdao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "Cung hoàng đạo",
	commandCategory: "Game",
	usages: "",
	cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
const { threadID, messageID } = event;
const fs = require("fs")
const axios = require('axios')
var d = parseInt(args[2])
var b = parseInt(args[0])
var c = parseInt(args[1])
var a = c*100 + b
const moment = require("moment-timezone");
  var time = moment.tz('Asia/Ho_Chi_Minh').format('YYYY');
let path = __dirname + '/cache/hoangdao.png';
  
if (args.join() == "") { 
 let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/90574575_668546770619944_4603598010893467648_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=WmSx2UFXxkYAX8Yzcoi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=f0e8ae31a4ed84fdd984805a11c343a4&oe=615BDEE8`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body: `[!]Thiếu[!] Ngày Tháng Năm
Để xem thông tin về cung hoàng đạo`, attachment: fs.createReadStream(path)},threadID,messageID) }


else if ( args[2] > time ) return api.sendMessage("Mới từ tương lai đến à :)",threadID,messageID)

else if ( a < 101 || a > 1231 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) 

else if ( c < 13 )
{ if ( d%4 == 0 && c == 2 && b > 29 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) ;
 else if ( d%4 !== 0 && c == 2 && b > 28 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) ;

else if ( c > 7 ) { c = c +1 }
else if ( c % 2 == 0 && b > 30 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) ;
else if ( b > 31 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) 
}


if ( 320 < a && a < 420) {
  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/122182839_347919473162084_575473566837997200_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=pgkaq3vtLVAAX9tg9Lg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4010642a39d680c811f306361f55bab2&oe=61563368`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body: `♈Aries - Bạch Dương (21/3 - 19/4)

✡Tuyên ngôn: “Tôi là tôi - Còn cậu thì không phải (là tôi)!”
✔Điểm mạnh: Dám nghĩ dám làm, can đảm, cần cù, sức mạnh của ý chí cao
❌Điểm yếu: Thiếu kiên nhẫn, nóng nảy`, attachment: fs.createReadStream(path)},threadID,messageID); 
}


if ( 419 < a && a <  521 ) {
  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/124187442_305558323766845_3965862274684456967_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MfRhbt5e1i8AX9rr7Hw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4c1c04c1cf2991e9d9cf18e9860e0861&oe=6159700F`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


return api.sendMessage({body:`♉Taurus - Kim Ngưu (20/4 - 20/5)

✡Tuyên ngôn: “Cái gì có thể mua được, cái đó là của tôi”
✔Điểm mạnh: Tự tin, kiên định, gọn gàng, tốt bụng, giàu năng lượng.
❌Điểm yếu: Cố chấp, thù dai
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if (  520 < a  && a < 622 ) {
  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/125161514_300278057700160_1557734089915687952_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=mx3NS2yeSe0AX8ydXy4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=c7b754a303a08c1a0ec081d0f16b51f6&oe=615927CF`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♊Gemini - Song Tử (21/5 - 21/6)

✡Tuyên ngôn: “Bạn thích vụ này rồi đấy, nói tiếp, nói tiếp đi!”
✔Điểm mạnh: Khéo léo, hài hước, thuyết phục
❌Điểm yếu: Dễ dàng thay đổi, hay lo lắng
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if (  621 < a  && a < 723 ){
  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/123490906_1003924536737290_6428465347233499918_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=sYRL0xEYk8YAX-2Vnij&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=52409639c036b3f3bd1d831d2a0dae91&oe=61576D47`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♋Cancer - Cự Giải (22/6 - 22/7)

✡Tuyên ngôn: “Thật đau lòng khi phải nói chia ly - Nên xin đừng cất bước ra đi!”
✔Điểm mạnh: Nhạy cảm, hợp lý, con người của gia đình
❌Điểm yếu: Ủ rũ, cáu kỉnh, độc đoán
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if (722  < a && a < 823 ) { 
  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/240405150_886850922236390_6609835736284157370_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-Zn3dLiSbU0AX99Bgmi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b074e0b47dd8273153410eb232eb3d48&oe=61593E75`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♌Leo - Sư Tử (23/7 - 22/8)

✡Tuyên ngôn: “Màn trình diễn phải tiếp tục - để tôi thể hiện chứ!”
✔Điểm mạnh: Tự tin, can đảm, quý phái, duy tâm
❌Điểm yếu: Bốc đồng, độc đoán, thích khoái lạc
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if ( 822 < a && a < 923 ) {  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/240916828_1039226393504456_3715097051876307991_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=U-k-OQg81lIAX_GD-ww&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=8637d3c4f652c230385d2db84721535d&oe=61592809`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♍Virgo - Xử Nữ (23/8 - 22/9)

✡Tuyên ngôn: “Em vừa tạo một danh sách - và còn kiểm tra nó hai lần.”
✔Điểm mạnh: Gọn gàng, cần cù, điềm tĩnh, thông minh sắc sảo
❌Điểm yếu: Thích bắt lỗi, cầu toàn, quan tâm đến vật chất
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if ( 922 < a && a < 1023 ) {  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/124398757_408468886840699_55154546606279747_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ZrrlHfAuFWEAX9_xV8H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=96d462f28005810fd780ad9fbf400e13&oe=6158BB40`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♎Libra - Thiên Bình (23/9 - 22/10)

✡Tuyên ngôn: “Chúng mình cùng hội cùng thuyền - Nên cưa đôi nha!”
✔Điểm mạnh: Mang cảm giác về vẻ đẹp, khôn ngoan, hữu ích, thân thiện
❌Điểm yếu: Thất thường, thờ ơ, thích sự tiện lợi
`, attachment: fs.createReadStream(path)},threadID,messageID); }

if (  1022 < a && a < 1123 ) {  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/124181825_2718061195116115_4973609214376999732_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=pupInEgiESMAX-THFFY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=3b4d47a23841eac9c122523d32334b29&oe=6157E8B0`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♏Scorpio - Bọ cạp (23/10 - 22/11) 

✡Tuyên ngôn: “Tin tôi đi - cậu không cần phải biết những bí mật của tôi đâu!”
✔Điểm mạnh: Quyết tâm, chăm chỉ
❌Điểm yếu: Thù hằn, thiếu tự chủ, bắt buộc, không tha thứ
`, attachment: fs.createReadStream(path)},threadID,messageID); }

if ( 1122 < a && a < 1222 ) {  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/175624176_453419179062057_1591838481152276225_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MpaHMdR8d_4AX8oJ8xI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=664468bbad211bb221ff0f24ffef6f76&oe=61592980`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♐Sagittarius - Nhân Mã (23/11 - 21/12)

✡Tuyên ngôn: “Tôi tin rằng tất cả chúng ta ở đây đều có vai trò gì đó!”
✔Điểm mạnh: Cởi mở, từ thiện, thích phiêu lưu, dám nghĩ dám làm
❌Điểm yếu: Bồn chồn, bướng bỉnh`
, attachment: fs.createReadStream(path)},threadID,messageID); } 

if ( 119 < a  && a < 219) {  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/124172893_1105093426578993_4175846944545439630_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=7f_oKseY9TAAX_9Izl0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0ea80651dd11bd7e101ce92496d13e68&oe=6157BED0`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♒Aquarius - Bảo Bình (20/1 - 18/2)

✡Tuyên ngôn: “Tôi là một cái vung tròn tròn úp trên một cái nồi méo méo trong một thế giới cong queo!”
✔Điểm mạnh: Tốt bụng, đáng tin, trung thành
❌Điểm yếu: Tức giận, vô cảm
`, attachment: fs.createReadStream(path)},threadID,messageID); } 

if ( 218 < a  && a < 321) {  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/124107918_419313079075124_6585691222196101860_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=v6NItgsaXpAAX-hh08D&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9e08f8207b335d0fbdecb5c611d39df9&oe=615676D4`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♓Pisces - Song Ngư (19/2 - 20/3)

✡Tuyên ngôn: “Với một trái tim rộng mở, tôi bơi đến tận vùng nước sâu thẳm nhất của vạn vật!”
✔Điểm mạnh: Nhạy cảm, dễ tính, vui vẻ, ấm áp
❌Điểm yếu: Mơ mộng, bồn chồn, thiếu tự tin
`, attachment: fs.createReadStream(path)},threadID,messageID); } 

if ( 1221 < a  && a < 1232 || 100 < a  && a < 120 ) { 
  let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/124577968_2152874168179027_8758420964607195906_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xIoVqLbWsAYAX-bRScs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4b8916b904745d01b5e0fc5a64b31aa8&oe=61595F4D`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♑Capricorn - Ma Kết (22/12 - 19/1)

✡Tuyên ngôn: “Đời bắt tôi đợi - Nhưng tôi là kẻ xứng đáng mà!”
✔Điểm mạnh: Kiên trì, quyết đoán, nghiêm túc, ít nói, sắc sảo
❌Điểm yếu: Khó tình, cố chấp, bi quan
`, attachment: fs.createReadStream(path)},threadID,messageID);} 
};