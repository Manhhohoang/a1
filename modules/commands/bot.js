module.exports.config = {
    name: "bot",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Pham Minh Duy",
    description: "Kêu bot",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};
module.exports.languages = {
    "vi": { "a1": "Sủa",
"a2": "Nói gì nói đi",
"a3": "Bố mày đây",
"a4": "Kêu củ lòn gì?",
"a5": "Đang đi ỉa kêu kêu cl :)",
"a6": "Chết rồi",
"a7": "Đang xem sex rồi!",
"a8": "Cho tao nộp đơn nghỉ việc",
"a9": "Cho xem dú đi rồi tao rep",
"a10": "Đang múa cột bạn êy",
"a11": "Bank 5k rồi nói chuyện bạn êyyy",
"a12": "Bạn nghĩ bạn đủ trình kêu tôi?",
"a13": "Alo bà nội nghe đây!",
"a14": "Gâu gâu ẳng ẳng",
"a15": "Ăng nhăng ăng nhăng ăng nhăng" },
"en" : {
"a1": "What?",
"a2": "I'm here",
"a3": "dead",
"a4": "what's up",
"a5": "what the fuck?",
"a6": "Shut up",
"a7": "Holly shit :)",
"a8": "I'm pole dancing",
"a9": "Show boobs to rep 👀",
"a10": "Let me apply for a leave of absence!",
"a11": "Fuck you!",
"a12": "give 5 thousand then talk",
"a13": "I lost my life so I can't rep",
"a14": "Busy flirting with other bots",
"a15": "fuck your mom!"}
}

module.exports.run = async({api,event,getText}) => {
const job = [
            getText("a1"),
            getText("a2"),
            getText("a3"),
            getText("a4"),
            getText("a5"),
            getText("a6"),
            getText("a7"),
            getText("a8"),
            getText("a9"),
            getText("a10"),
            getText("a11"),
            getText("a12"),
            getText("a13"),
            getText("a14"),
            getText("a15"),
            getText("a16")

        ];
return api.sendMessage(job[Math.floor(Math.random() * job.length)], event.threadID, event.messageID)

 }