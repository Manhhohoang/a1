module.exports.config = {
  name: "tid",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Pham Minh Duy",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Other",
  usages: "tid",
  cooldowns: 5,
  dependencies: []
};

module.exports.run = async({api,event}) => {
 return api.sendMessage(event.threadID, event.threadID, event.messageID);
}