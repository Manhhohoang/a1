module.exports.config = {
name: "infoad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phạm Minh Duy",
	description: "infoad",
	commandCategory: "info",
	usages: "",
	cooldowns: 5,
};
module.exports.run = function({ api, event }) {
const fs = require("fs")
var msg = {
				body: " === Admin ===\n Họ và tên: \n Phạm Minh Duy \n Sinh nhật: 14/05/1995 \n Chiều cao: 1m78 \n Cân nặng: 55kg \n Nơi sống: Nha Trang, Khánh Hòa \n Số điện thoại: 0706042940 \n Tình trạng quan hệ: Nhiều tư thế  \n Momo: 0706042940 \n SHB: 1013033063 \n ============== \n Ưu điểm: Biết nhiều thứ \n Nhược điểm: Chưa biết có bồ là gì \n ============== \n Facebook: https://www.facebook.com/pham.minh.duy.14523 \n Instagram: \n pmdtrap.6663629 \n Zalo: 0833397519 \n Telegram: Có nhưng không cho \n Twitter: Có nhưng không cho \n Github: www.github.com/Manhhohoang \n ============== ",
				attachment: fs.createReadStream(__dirname + `/cache/infoad.jpg`)
			}
			api.sendMessage(msg, event.threadID, event.messageID);
		}