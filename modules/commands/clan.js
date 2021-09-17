module.exports.config = {
	name: "clan",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phamj Minh Duy",
	description: "Hạn hợp đồng",
	commandCategory: "other",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
if ( event.threadID == "4134939433287808") {
    const t = Date.parse("Nov 3, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Thời gian còn lại của hợp đồng」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}
else {api.sendMessage("Quyền lồn biên giới!",event.threadID,event.messageID); }
}