module.exports.config = {

    name: "taglientuc",

    version: "1.0.2",
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Tag liên tục người bạn tag trong 10 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "tag",
    cooldowns: 5,
    dependencies: { }
}

module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
api.sendMessage("CHÚ Ý: Đây là quá trình tự động không thể hoàn tác, bắt đầu quá trình đếm ngược...",threadID,messageID)

setTimeout(() =>
api.sendMessage("Đếm ngược: 3", threadID, messageID), 1000)


setTimeout(() =>
api.sendMessage("Đếm ngược: 2", threadID, messageID), 2000)


setTimeout(() =>
api.sendMessage("Đếm ngược: 1", threadID, messageID), 3000)


setTimeout(() =>
api.sendMessage("Đếm ngược: 0", threadID, messageID), 4000)
var a = Math.floor(Math.random() * 5);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
			body:"Triệu hồi " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 5000)
setTimeout(() =>
api.sendMessage({
			body:"Úm ba la " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 9000)
setTimeout(() =>
api.sendMessage({
			body:"Phép thuật winx " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 13000)
setTimeout(() =>
api.sendMessage({
			body: "Echatic "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 17000)
setTimeout(() =>
api.sendMessage({
			body: "Kimochi ư ư "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 21000)
setTimeout(() =>
api.sendMessage({
			body: "Gái nhật đó mề ta rà xa rà hế "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 25000)
setTimeout(() =>
api.sendMessage({
			body:"ề ế ề ế ê " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 29000)
setTimeout(() =>
api.sendMessage({
			body: "Yamete "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 32000)
setTimeout(() =>
api.sendMessage({
			body: "Đụ em đi ớ ớ... "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 36000)
setTimeout(() =>
api.sendMessage({
			body:"Đi đẻ đây goodbye! " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 40000)
}
if (a==1) {
setTimeout(() =>
api.sendMessage({
			body:"Con ở đâu về đi con ơi " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 5000)
setTimeout(() =>
api.sendMessage({
			body:"Về đi vợ con đang trông chờ " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 9000)
setTimeout(() =>
api.sendMessage({
			body:"Về đi con giời " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 13000)
setTimeout(() =>
api.sendMessage({
			body: "Alo con nhợn nghe rõ trả lời "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 17000)
setTimeout(() =>
api.sendMessage({
			body: "Kimochi "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 21000)
setTimeout(() =>
api.sendMessage({
			body: "Dm về đi con mặt l "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 25000)
setTimeout(() =>
api.sendMessage({
			body:"Alo về đi " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 29000)
setTimeout(() =>
api.sendMessage({
			body: "Đĩ mẹ về ko "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 32000)
setTimeout(() =>
api.sendMessage({
			body: "Yamate "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 36000)
setTimeout(() =>
api.sendMessage({
			body:"Về đi mẹ con đang chờ " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 40000)
}
if (a==2) {
setTimeout(() =>
api.sendMessage({
			body:"Kìa con bướm vàng " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 5000)
setTimeout(() =>
api.sendMessage({
			body:"Kìa con bướm vàng " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 9000)
setTimeout(() =>
api.sendMessage({
			body:"Xòe đôi cánh " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 13000)
setTimeout(() =>
api.sendMessage({
			body: "Xòe đôi cánh "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 17000)
setTimeout(() =>
api.sendMessage({
			body: "Bươm bướm bay "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 21000)
setTimeout(() =>
api.sendMessage({
			body: "Đôi ba vòng "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 25000)
setTimeout(() =>
api.sendMessage({
			body:"Bươm bướm bay " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 29000)
setTimeout(() =>
api.sendMessage({
			body: "Đôi ba vòng "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 32000)
setTimeout(() =>
api.sendMessage({
			body: "Em ngồi xem "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 36000)
setTimeout(() =>
api.sendMessage({
			body:"Em ngồi xem " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 40000)
}
if (a==3) {
setTimeout(() =>
api.sendMessage({
			body:"Anh tuổi trâu Thích cỏ non và chơi đồ cổ " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 5000)
setTimeout(() =>
api.sendMessage({
			body:"Anh là bão em là Cây gặp anh là Đổ " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 9000)
setTimeout(() =>
api.sendMessage({
			body:"Anh thích chơi đồ Rê Mi Pha Son La Si Đô " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 13000)
setTimeout(() =>
api.sendMessage({
			body: "Em là Gông anh tình nguyện kẹp Đùi em vào Cổ "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 17000)
setTimeout(() =>
api.sendMessage({
			body: "Anh là Milo lúc nào mệt là em lại Mút "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 21000)
setTimeout(() =>
api.sendMessage({
			body: "Em là con lợn lúc có tiền là anh lại Đút "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 25000)
setTimeout(() =>
api.sendMessage({
			body:"Hơi gầy một tí Mà chúng nó bảo là anh xì ke " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 29000)
setTimeout(() =>
api.sendMessage({
			body: "Em như là cân "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 32000)
setTimeout(() =>
api.sendMessage({
			body: "Cứ trèo lên em là anh lại sút "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 36000)
setTimeout(() =>
api.sendMessage({
			body:"Như Mặt Trời em là Nắng làm da anh đen hêyyy " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 40000)
}
if (a==4) {
setTimeout(() =>
api.sendMessage({
			body:"Bạn là nhất, nhất bạn rồi. " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 5000)
setTimeout(() =>
api.sendMessage({
			body:"Rồi rồi bạn thắng, mình thua. " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 9000)
setTimeout(() =>
api.sendMessage({
			body:"Bạn thì hay rồi. " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 13000)
setTimeout(() =>
api.sendMessage({
			body: "Bạn mà sai thì không ai đúng hết á. "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 17000)
setTimeout(() =>
api.sendMessage({
			body: "Xin lỗi, được chưa?. "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 21000)
setTimeout(() =>
api.sendMessage({
			body: "Bạn là trùm rồi, không ai làm lại bạn hết á. "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 25000)
setTimeout(() =>
api.sendMessage({
			body:"Vâng, bạn nói gì cũng đúng. " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 29000)
setTimeout(() =>
api.sendMessage({
			body: "Cứ cho là bạn đúng đi =)) "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 32000)
setTimeout(() =>
api.sendMessage({
			body: "Bạn là số một "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 36000)
setTimeout(() =>
api.sendMessage({
			body:"Mình còn sợ bạn cơ mà 👏 " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 40000)
}
if (a==5){
setTimeout(() =>
api.sendMessage({
			body:"Uống coconut hong? " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 5000)
setTimeout(() =>
api.sendMessage({
			body:"Uống cocacola hong? " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 9000)
setTimeout(() =>
api.sendMessage({
			body:"Lên là lên là lên " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 13000)
setTimeout(() =>
api.sendMessage({
			body: "Hêy hêy 🙌 "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 17000)
setTimeout(() =>
api.sendMessage({
			body: "Lên nóc nhà là bắt con gà "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 21000)
setTimeout(() =>
api.sendMessage({
			body: "Turn down for what "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 25000)
setTimeout(() =>
api.sendMessage({
			body:"Hêy hêy êy êy " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 29000)
setTimeout(() =>
api.sendMessage({
			body: "Bủh bủh lmao lmao "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 32000)
setTimeout(() =>
api.sendMessage({
			body: "Lì vcut vậy người anh em "+ mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 36000)
setTimeout(() =>
api.sendMessage({
			body:"Kêu muốn ỉa trong quần!Bye " + mentions[mention].replace("@", "") ,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID), 40000)
}
}