module.exports.config = {
	name: "hanhtinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "tên hành tinh",
	commandCategory: "Game",
	cooldowns: 5,
	dependencies: {}
};

module.exports.run = async ({ api, event, args }) => {
const { threadID, messageID, senderID } = event;
const fs = require("fs")
const axios = require('axios')
let path = __dirname + '/cache/earth.png';
if ( args.join() == "") { 
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/88218148_2909513759104700_670159007213682688_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=tQkaqqx6810AX-L8l4g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=495a099ca70d24e672569092ba3c34df&oe=61545D4A`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

api.sendMessage({
body: `Nhập ${global.config.PREFIX}hanhtinh [Tên]
Hiện tại có
☆1 Ngôi sao:
Sun - Mặt trời
☆9 Hành Tinh:
Mecury - Sao thủy
Venus - Sao kim
Earth - Trái đất
Moon - Mặt trăng
Mars - Sao hỏa
Jupiter - Sao thổ
Saturn - Sao mộc
Uranus - Sao thiên vương
Neptune - Sao hải vương
☆5 Hành Tinh Lùn:
Ceres
Pluto
Haumea
Makemake
Eris`, attachment: fs.createReadStream(path)
},threadID,messageID); }


switch (args[0]) {
case "earth": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/86870195_2514855128626397_2794332317215096832_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=GXzim9RLnMUAX9j66vI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=dedf74cccbbaa0c501d11f854cadbcec&oe=615604D0`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Trái đất - Earth
Bán trục lớn 149 597 887 km hay 1,00000011 AU.

Chu vi 940 × 106 km hay 6,283 AU.
Độ lệch tâm 0,01671022
Chu kỳ 365,25696 ngày hay 1,0000191 năm.

Chu kỳ biểu kiến không áp dụng.
Vận tốc quỹ đạo: 
- trung bình 29,783 km/s.
- tối đa 30,287 km/s. 
- tối thiểu 29,291 km/s.
Áp suất khí quyển tại bề mặt 101,3 kPa 
Cấu tạo của khí quyển
Nitơ (N2) 78,08%
Oxy(O2) 20,95%
Argon (Ar) 0,93%
Carbon dioxide (CO2) 0,038%
Hơi nước (H2O) 1% (thay đổi theo điều kiện thời tiết)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "mecury": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/100951101_2632373256975089_8956169610130882560_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=erqosq6L6CkAX96Z3n3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0761dfb7e48b06c6b6d9f86218582c12&oe=6155B33D`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Thủy - Mecury
Bán kính trung bình 2.439,7 ± 1,0 km2 hay 0,3829 Trái Đất

Hình cầu dẹt
Diện tích bề mặt 7,48×107 km2 hay0,147 Trái Đất

Thể tích 6,083×1010 km3 hay 0,056 Trái Đất

Khối lượng 3,3022×1023 kg hay 0,055 Trái Đất

Áp suất khí quyển bề măt rất nhỏ
Thành phần khí quyển
42% Phân tử Oxy 
29,0% Natri
22,0% Hiđrô 
6,0% Heli
0,5% Kali 
Rất ít Agon, Nitơ, Cacbon dioxide, Hơi nước, Xenon, Krypton và Neon

`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}


case "venus": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/235627061_1323792864690439_630667436441182437_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=lKrkDIGkqqgAX8BnZEL&_nc_oc=AQly3LJEw_y7TUguW3B9z-G5Ctm0cbI7Py2qcbp_QzPX67XALUMjE8B3EURhAaoX45U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=cdd38c95dc81253113ba0331c733492f&oe=61568ECF`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Kim - Venus
Bán kính trung bình

6.051,8 ± 1,0 km hay 0,949 9 Trái Đất

Hình cầu dẹt
Diện tích bề mặt 4,60×108 km hay 20,902 Trái Đất

Thể tích 9,28×1011 km3 hay 0,866 Trái Đất

Khối lượng 4,868 5×1024 kg hay 0,815 Trái Đất

Áp suất khí quyển bề mặt 92 bar (9,2 MPa)
Thành phần khí quyển

~96,5% CO2
~3,5% N2
0,015% SO2
0,007% Ar
0,002% hơi nước
0,001 7% CO
0,001 2% He
0,000 7% Ne 
rất ít OCS 
rất ít HCl
rất ít HF

`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "mars": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/186477758_472487997164093_1468604556319472025_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rYqseF0zyqIAX9ApQeU&_nc_oc=AQnFmnKtY1hICZrrVbsVTgh_EDOk6q2Evdy0XjrIJVh2Sg90Ywr6GJccGuAAnhsQeRU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=92f64d36cfed9b0f89caa4f297511757&oe=6155C552`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Hỏa - Mars
Bán kính Xích đạo 3.396,2 ± 0,1 km hay 0,533 Trái Đất
Bán kính cực 3.376,2 ± 0,1 km
Hình cầu dẹt 0,005 89 ± 0,000 15
Diện tích bề mặt 144.798.500 km2 hay 0,284 Trái Đất
Thể tích 1,6318×1011 km3 hay 0,151 Trái Đất
Khối lượng 6,4185×1023 kg hay 0,107 Trái Đất
Áp suất khí quyển bề mặt 0,636 (0,4–0,87) kPa
Thành phần khí quyển(tỷ lệ mol)
95,32% Carbon dioxide
2,7% Nitrogen
1,6% Argon
0,13% Oxygen
0,08% Carbon monoxide
210 ppm hơi nước
100 ppm Nitơ monoxide
15 ppm Hydro
2,5 ppm Neon
850 ppb HDO
300 ppb Krypton
130 ppb fomanđêhít
80 ppb Xenon
30 ppb Ozone
18 ppb Hydro peroxide
10 ppb Metan`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}


case "jupiter": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/101549574_619126168691314_8415072836858675200_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=k51LU15Ow9AAX8vhlPN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=2b206a035c050e1c44649b3033779864&oe=6154224E`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Mộc - Jupiter
Bán kính trung bình 69.911 ± 6 km
Bán kính Xích đạo 71.492 ± 4 km hay 11,209 Trái Đất

Bán kính cực 66.854 ± 10 km hay 10,517 Trái Đất

Hình cầu dẹt 0,06487 ± 0,00015
Diện tích bề mặt 6,1419×1010 km2 hay 121,9 Trái Đất
Thể tích 1,4313×1015 km3 hay 1321,3 Trái Đất

Khối lượng 1,8986×1027 kg hay 317,8 Trái Đất hay 1/1047 Mặt Trời

Áp suất khí quyển bề mặt 20–200 kPa (lớp mây)
Biên độ cao 27 km
Thành phần khí quyển
89,8±2,0% hydro (H2)
10,2±2,0% heli
~0,3% methan
~0,026% amonia
~0,003% hydro deuteri (HD)
0,0006% ethan
0,0004% nước
Băng:amonia 
nước 
amoni hyđro sulfit(NH4SH)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "saturn": {
    let getdata = (await axios.get(`https://cdn.fbsbx.com/v/t59.2708-21/240843396_1503042516744877_3478009890982263040_n.gif?_nc_cat=105&ccb=1-5&_nc_sid=041f46&_nc_ohc=dHvClUP6nCIAX9qpTKX&_nc_ht=cdn.fbsbx.com&oh=ac51d6af976e9a30b6ef9913e397f2dc&oe=61362917`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Mộc - Saturn
Bán kính Xích đạo

60.268 ± 4 km hay 9,4492 Trái Đất

Bán kính cực 54364 ± 10 km hay 8,5521 Trái Đất

Hình cầu dẹt 0,09796 ± 0,00018 
Diện tích bề mặt 4,27×1010 km² hay 83,703 Trái Đất

Thể tích 8,2713×1014 km3 hay 763,59 Trái Đất

Khối lượng 5,6846×1026 kg hay 95,152 Trái Đất

Biên độ cao59,5 km 
Thành phần khí quyển
~96%Hiđrô (H2)
~3%Heli
~0.4%Mêtan
~0.01%Amonia
~0.01%Hydrogen deuteride (HD)
0.0007%Êtan
Băng:
Amonia
Nước
Amoni hydrosulfide (NH4SH)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}
case "uranus": {
    let getdata = (await axios.get(`https://cdn.fbsbx.com/v/t59.2708-21/240843396_1503042516744877_3478009890982263040_n.gif?_nc_cat=105&ccb=1-5&_nc_sid=041f46&_nc_ohc=SLo4DYpJeEAAX_p7YFf&_nc_ht=cdn.fbsbx.com&oh=941bdff5806fcb3db201d34c25b98829&oe=61323497`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Thiên Vương - Uranus
Bán kính Xích đạo 25.559 ± 4 km hay 4,007 Trái Đất
Bán kính cực 24.973 ± 20 km hay 3,929 Trái Đất
Hình cầu dẹt 0,0229 ± 0,0008
Chu vi 159.354,1 km
Diện tích bề mặt 8,1156×109 km2 hay 15,91 Trái Đất
Thể tích 6,833×1013 km3
63,086 Trái Đất
Khối lượng(8,6810 ± 0,0013)×1025 kg hay14,536 Trái Đất
Biên độ cao 27,7 km
Thành phần khí quyển(Dưới 1,3 bar)
83 ± 3%Hiđrô (H2)
15 ± 3%Heli
2,3%Mêtan
0,009% Hydrogen deuteride (0,007– HD (0,015%) )
Băng: Amonia
Nước 
Amonium hydrosulfide (NH4SH)
Mêtan (CH4)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}
case "neptune": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/89102258_159964845024729_9159027607080009728_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_N7J8_LryrEAX9Gphz1&_nc_oc=AQmKwNLF0--hwm3slc8KaZvIpx4QEiD19ZcfEGQVHCIagQQIaQseIAihZ-yBOZnG6co&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=7f75f39296ba61fee121df81376a7e97&oe=61556CFB`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Hải Vương - Neptune
Bán kính Xích đạo 24.764 ± 15 km hay 3,883 Trái Đất
Bán kính cực 24.341 ± 30 km hay 3,829 Trái Đất
Hình cầu dẹt 0,0171 ± 0,0013
Biên độ cao 19,7 ± 0,6 km
Thành phần khí quyển
80±3.2% Hydro (H2)
19±3.2% Heli (He)
1.5±0.5% Mêtan (CH4)
~0.019%Hydrogen deuteride (HD)
~0.00015%Êtan (C2H6)

Băng:
Amonia (NH3)
Nước (H2O)
Amoni hydrosulfide (NH4SH)
Mêtan (?)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "sun": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/137205928_244050803901645_2423687519467052612_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=NjPG2s-3GYYAX92Xn29&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=5a4ac76384b8c4fc590e174089d82566&oe=61550935`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Mặt Trời - Sun
Đường kính trung bình 1,392 ×106 km hay 109 lần Trái Đất
Độ dẹt 9×10-6
Diện tích bề mặt 6,0877 ×1012 km²
(11.900 lần Trái Đất)
Thể tích 1,4122 ×1018 km³ (1.300.000 lần Trái Đất)
Khối lượng1,9891 ×1030 kg 332.946 lần Trái Đất)
Thành phần
Hiđrô 73,46%
Heli 24,85%
Ôxy 0,77%
Cacbon 0,29%
Sắt 0,16%
Lưu huỳnh 0,12%
Neon 0,12%
Nitơ 0,09%
Silic 0,07%
Magiê 0,05%`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}


case "moon": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/48397287_311278802927980_4802860106603560960_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=1at_Zv1btZ4AX-5VZSC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0542de96b799864c51dfa29d5b9b06ac&oe=61557C9E`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Mặt Trăng - Moon
Bán trục lớn 384.400 km (0,0026 AU)
Chu vi quỹ đạo 2.413.402 km (0,016 AU)

Đặc điểm khí quyển
Áp suất khí quyển 3 × 10-13kPa
Heli 25%
Neon 25%
Hiđrô 23%
Agon 20%
Mêtan
Amoniac
Điôxít cacbon rất ít`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "ceres": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/234636664_232825595423269_1457461720489057850_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=OTmk1esp6AwAX8jCfdd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=5eca7a901ce927132101bc4e67c67783&oe=615AA0D3`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Ceres (tiếng Latin: Cerēs, còn gọi sao Cốc Thần hay Cốc Thần Tinh), là hành tinh lùn nhỏ nhất được biết trong Hệ Mặt Trời và là hành tinh lùn duy nhất trong vành đai tiểu hành tinh chính ở khoảng giữa Sao Mộc và Sao Hỏa. Hành tinh lùn này được Giuseppe Piazzi phát hiện vào ngày 1 tháng 1 năm 1801 và được đặt tên theo nữ thần Hy Lạp Ceres – nữ thần của cây cỏ, mùa màng và tình mẫu tử. Trong một nửa thế kỷ nó được cho là hành tinh thứ 8.

Bán kính Xích đạo 487,3 ± 1,8 km

Bán kính cực454,7 ± 1,6 km

Khối lượng9,43 ± 0,07×1020 kg`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "pluto": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/86698230_1456140361225656_6227045801391030272_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=0pZJ2cjlpvAAX-qA1bL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4dc6cd0b297f56f96e175847d733519d&oe=61598612`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Sao Diêm Vương hay Diêm Vương tinh (chữ Hán: 閻王星), còn được định danh hình thức là 134340 
Pluto (từ tiếng La tinh: Plūto, tiếng Hy Lạp: Πλούτων), là hành tinh lùn nặng thứ hai đã được biết trong Hệ Mặt Trời (sau Eris) và là vật thể nặng thứ mười trực tiếp quay quanh Mặt Trời.

Khám phá bởi Clyde W. Tombaugh
Nơi khám phá Đài thiên văn Lowell
Ngày phát hiện 18 tháng 2 năm 1930
Bán kính trung bình 0.1868 Trái Đất

Hình cầu dẹt <1%
Diện tích bề mặt 0.035 Trái Đất
Thể tích
Khối lượng 0.177 Mặt Trăng

Áp suất khí quyển bề mặt 1.0 Pa (2015)
Thành phần khí quyển Nitrogen, methane, carbon monoxit`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "haumea": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/64937382_842691789439689_7787085920250888192_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bZQwiszkIMEAX9Q3g4Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=85e53c4693731b28d375320bb559a339&oe=615B3F6D`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Tên chỉ định(136108) Haumea
Phiên âm/haʊˈmeɪ.ə, 
Đặt tên theo Haumea
Tên chỉ định thay thế 2003 EL61
Kích thước
≈ 2,100 × 1,680 × 1,074 km (best fit assuming HE)×  ×  km (if ring does not contribute to brightness)

Bán kính trung bình
≈ (best fit) to (if ring contributes 5% of brightness)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "makemake": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/122721945_669166250641361_8068167723149588365_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RNgK1AmCWwIAX9ItDtz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=ed1f2fa32e44e5e1c5e798a4b4718a2f&oe=61589602`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Makemake ( [ˈmakeˈmake] ), trang trọng gọi là (136472) Makemake, là hành tinh lùn lớn thứ 3 trong hệ Mặt Trời và là một trong 2 vật thể vòng đai Kuiper (KBO). Đường kính của nó vào khoảng 2/3 của Sao Diêm Vương. Makemake có một vệ tinh đã được phát hiện. Nhiệt độ trung bình cực kì thấp (khoảng 30 K) nghĩa rằng bề mặt của nó được bao bọc bởi mêtan, êtan và có thể nitơ băng.

Khám phá bởi
Michael E. BrownChad TrujilloDavid Rabinowitz

Ngày phát hiện 31 tháng 3 năm 2005`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "eris": {
    let getdata = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/162394802_450915179459265_5818472225094931517_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rRJ883pYQJQAX_MHN9F&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=7e85e627ddd90ecd0426e9be11061e38&oe=6159239D`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
136199 Eris (trước đây được gọi là 2003 UB313) là hành tinh lùn lớn thứ hai trong Thái Dương hệ sau Sao Diêm Vương và là thiên thể thứ 11 quay quanh Mặt Trời (tính theo khoảng cách, không kể vành đai Kuiper và các vệ tinh tự nhiên). 
Khám phá bởi

M. E. BrownC. A. TrujilloD. L. Rabinowitz[1]

Ngày phát hiện 5 tháng 1 năm 2005`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}




}}