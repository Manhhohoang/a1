module.exports.config = {
	name: "wiki",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Tìm mọi thông tin cần biêt thông qua Wikipedia",
	commandCategory: "study",
	usages: "[en] [thông tin cần tìm kiếm]",
	cooldowns: 1,
	dependencies: {
        "wikijs": ""
    }
}

module.exports.languages = {
    "vi": {
        "missingInput": "Nội dung cần tìm kiếm không được để trống!",
        "returnNotFound": "Không tìm thấy nội dung %1"
    },
    "en": {
        "missingInput": "Enter what you need to search for.",
        "returnNotFound": "Can't find %1"
    }
}

module.exports.run = ({ event, args, api, getText }) => {
    const wiki = (global.nodemodule["wikijs"]).default;
    let content = args.join(" ");
if ( content.toLowerCase()== "phạm minh duy" ) return api.sendMessage(`Andrey Phạm - Hay còn gọi là Phạm Minh Duy.\nSinh ngày 14/05/1995. Quốc tịch: Việt Nam. Là một trong những học sinh tham gia kì thi Đội tuyển học sinh giỏi Quốc gia môn Hóa Học, cùng với nhiều thành tích vượt trội. Bên cạnh đó anh còn thành thạo các lĩnh vực khác nhau như: Văn học, Khoa học, Lập trình, Y học, Võ học,...\nNgoài ra anh còn thành thạo nhiều ngôn ngữ Nhật, Anh, Pháp. Không những thế theo thống kế số tài khoản đã chạm mốc 11 chữ số vào năm 2019.\nHiện tại anh đang sống và làm việc ở Thành phố Hồ Chí Minh với chức danh Kĩ sư thiết kế Ô tô Công Ty TNHH Mercedes- Benz Việt Nam\n\nSố 693, Đường Quang Trung, P. 8, Q. Gò Vấp, Tp. Hồ Chí Minh (TPHCM), Tp. Hồ Chí Minh (TPHCM)\n\nĐã xác minh 24 7 2020\n\nNguồn: Ẩn\nĐược tải lên ngày 21 tháng 3 năm 2018\nCập nhật gần nhất ngày 9 tháng 7 năm 2021`,event.threadID,event.messageID);

    let url = 'https://vi.wikipedia.org/w/api.php';
    if (args[0] == "en") {
        url = 'https://en.wikipedia.org/w/api.php'; 
        content = args.slice(1, args.length);
    }
    if (!content) return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
    return wiki({ apiUrl: url }).page(content).catch(() => api.sendMessage(getText("returnNotFound", content), event.threadID, event.messageID)).then(page => (typeof page != 'undefined') ? Promise.resolve(page.summary()).then(val => api.sendMessage(val, event.threadID, event.messageID)) : '');

}