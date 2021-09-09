module.exports.config = {
    name: "hay",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "Phạm Minh Duy",
    description: "Nhất bạn rồi",
    commandCategory: "Chat",
    usages: "",
    cooldowns: 5,
    dependencies: {},
}

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "nhất bạn rồi") ? api.sendMessage(`Bạn là nhất, nhất bạn rồi.\nRồi rồi bạn thắng, mình thua. Bạn thì hay rồi.\nBạn mà sai thì không ai đúng hết á.\nXin lỗi, được chưa?.\nBạn là trùm rồi, không ai làm lại bạn hết á.\nVâng, bạn nói gì cũng đúng.\nCứ cho là bạn đúng đi =))`, event.threadID ) : '';
module.exports.run = () => {}