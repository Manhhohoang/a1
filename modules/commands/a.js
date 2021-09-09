module.exports.config = {
    name: "help",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "secret ",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
{
const a = [
`[Bạn có biết?]
Admin bot cực kì quyền lực?`,
`[Bạn có biết?]
Bạn vừa nhập không một lệnh gì cả?`,
`[Bạn có biết?]
Một ngày có 24 giờ`,
`[Bạn có biết?]
Một phút bằng 60 giây`,
`[Bạn có biết?]
Một giờ có 60 phút`,
`[Bạn có biết?]
Bạn rất đẹp không?`,
`[Bạn có biết?]
Admin bot rất gà không?`,
`[Bạn có biết?]
Đây là bot Miraiv2?`,
`[Bạn có biết?]
Bot chạy xuyên getuser?`,
`[Bạn có biết?]
FWB là Friend With Benefits?`,
`[Bạn có biết?]
Hs là Have Sex?`,
`[Bạn có biết?]
Bún bò phải có bún và bò?`,
`[Bạn có biết?]
Hà Nội ở Bắc?`,
`[Bạn có biết?]
Thành phố Hồ Chí Minh ở Nam?`,
`[Bạn có biết?]
Admin bot sinh ngày 14/05/1995`,
`[Bạn có biết?]
Bạn làm tim tôi rối bời không?`,
`[Bạn có biết?]
Admin Bot cuto?`,
`[Bạn có biết?]
Box này chạy rất nhiều box?`,
`[Bạn có biết?]
Trái đất được hình thành từ rất lâu?`,
`[Bạn có biết?]
Xuyên không là có thể?`,
`[Bạn có biết?]
Bot không có giới tính?`,
`[Bạn có biết?]
Facebook admin bot là:
https://www.facebook.com/pham.minh.duy.14523`,
`[Bạn có biết?]
Mặt trời mọc ở Tây lặn ở Đông?`,
`[Bạn có biết?]
Bạn không biết gì?`,
`[Bạn có biết?]
Đẻ hay mổ đều đau?`,
`[Bạn có biết?]
Mọi vật đều tuân theo quy luật quả cầu lông?`,
`[Bạn có biết?]
Thằn lằn đẻ trứng?`,
`[Bạn có biết?]
Bot không thể đẻ?`,
`[Bạn có biết?]
Bủh bủh lmao?`,
`[Bạn có biết?]
Bot có thể nói tiếng anh?`,
`[Bạn có biết?]
Nhập ${global.config.PREFIX}call với nội dung muốn nói để gửi admin?`,
`[Bạn có biết?]
Đây là thứ 48 của admin bot?`,
`[Bạn có biết?]
Admin bot bị thần kinh bất ổn định?`,
`[Bạn có biết?]
Mọi người trước khi sinh ra đều là gái?`,
`[Bạn có biết?]
Con gái có nhiễm sắc thể XX?`,
`[Bạn có biết?]
Con trai có nhiễm sắc thể XY?`,
`[Bạn có biết?]
Con người có 22 cặp nhiễm sắc thể?`,
`[Bạn có biết?]
Con người có tổng cộng 46 nhiễm sắc thể?`,
`[Bạn có biết?]
Bot cũng có thể rớt mạng mà không phản hồi?`,
`[Bạn có biết?]
Bot này có thể chạy 24/7?`,
`[Bạn có biết?]
Đường ta ăn là Saccarozo?`,
`[Bạn có biết?]
KMnO4 còn gọi là Kali penmaganat?`,
`[Bạn có biết?]
Xác thực 2 yếu tố không thể bị hack?`,
`[Bạn có biết?]
Tricker khác hacker?`,
`[Bạn có biết?]
Facebook tạo bởi Mark?`,
`[Bạn có biết?]
Bot này chạy bằng javascript?`,
`[Bạn có biết?]
Cocacola là đối thủ pepsi?`,
`[Bạn có biết?]
Độ dài trung bình đàn ông VN là 12-14cm?`,
`[Bạn có biết?]
Lòng người rất dài?`,
`[Bạn có biết?]
Đây là một code của admin bot làm?`,
`[Bạn có biết?]
Bot có thể làm thơ?`,
`[Bạn có biết?]
UFO có thật?`,
`[Bạn có biết?]
Có tồn tại không gian 4D?`,
`[Bạn có biết?]
Hạt phản vật chất vô cùng đắc?`,
`[Bạn có biết?]
Kim cương có thể đốt cháy?`,
`[Bạn có biết?]
Bot có lệnh quẩy bar tại gia?`,
`[Bạn có biết?]
Trái đất có đất?`,
`[Bạn có biết?]
Bot bị xàm?`,
`[Bạn có biết?]
Sahara từng là đại dương?`,
`[Bạn có biết?]
Tam giác quỷ?`,
`[Bạn có biết?]
Mù tạc được làm từ cải?`,
`[Bạn có biết?]
Admin bot rất dảk?`,
];
api.sendMessage(`${a[Math.floor(Math.random() * a.length)]}`, event.threadID, event.messageID);
    
}