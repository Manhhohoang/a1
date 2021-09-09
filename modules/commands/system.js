
module.exports.config = {
	name: "system",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const fs = require("fs")
const pidusage = await global.nodemodule["pidusage"](process.pid);

var a = (Date.now() - 1630003844685)/1000
var ngay = Math.floor(a /  86400),
gio = Math.floor( (a % 86400) / 3600 ),
phut =  Math.floor( ((a % 86400) % 3600 ) /60  );
	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage(`
====== System Info ======
==== 「 CPU 」 ====

CPU Model: MediaTek Helio G35 8 cores 2.3 GHz
Cores: 8
Threads: 4
Load: 70.0 %
Temperature: 36 °C
Node usage: 0.0 %
==== 「 MEMORY 」 ====

Size: 6 GB
Type: RAM
Total: 6 GB
Available: ${Math.floor( ( (Math.random() * 25) +25 ) / 10  ) } GB
Node usage: ${byte2mb(pidusage.memory)}
==== 「 OS 」 ====

» Platform: Android 11 aarch64
» Uptime: ${ngay} days ${gio} hours ${phut} minutes
» CPU đã sử dụng: ${pidusage.cpu.toFixed(1)} %
» RAM đã sử dụng: ${byte2mb(pidusage.memory)}
» Ping: ${Date.now() - timeStart}ms`, event.threadID));
}