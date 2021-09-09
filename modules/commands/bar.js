module.exports.config = {
    name: "bar",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Pham Minh Duy",
    description: "bay",
    commandCategory: "Game",
    usages: "",
    cooldowns: 5
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
var time = Date.now()
api.sendMessage("",event.threadID, () =>
api.sendMessage(`Đang tải...
Ping hiện tại là : ${Date.now() - time}ms`,event.threadID,event.messageID))
const fs = require("fs");
const axios = require('axios')
let path = __dirname + '/cache/bar.mp4';
const b =[
"LÊN LÀ LÊN",
"BỦH BỦH",
"LÊN NÓC NHÀ LÀ BẮT CON GÀ",
"TRONG CƠN BÊ EM LÀM MẸ ĐƠN THÂN",
"ARE YOU READYYY",
"ONE TWO THREEEE",
"HÊY HÊY HÊY",
"LÊN LÀ LÊN LÀ LÊN",
"EVERYBODYYY",
"PUT YOUR HAND UP!",
"TĂNG TĂNG TĂNG",
"Ò E Ò E",
"HÚ HÚ HÚ"
];
var link = [
"https://video.xx.fbcdn.net/v/t42.3356-2/229964522_4062816777100543_9026470302259600953_n.mp4/video-1630976248.mp4?_nc_cat=101&ccb=1-5&_nc_sid=060d78&_nc_ohc=N2IXCuzKis0AX9a7Jpp&vabr=227650&_nc_ht=video.xx&oh=4e3bc12fbb1a8d373f9c97f82d51adf7&oe=6137A086&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/230028567_3846766305428126_8395787822952938296_n.mp4/video-1630976252.mp4?_nc_cat=110&ccb=1-5&_nc_sid=060d78&_nc_ohc=LEKsxIPDR4cAX_MSMO1&vabr=221852&_nc_ht=video.xx&oh=8092fbf81e25543711f820cb763576e9&oe=613800DE&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/231555214_4174968089224457_1662256199079440445_n.mp4/video-1630976257.mp4?_nc_cat=110&ccb=1-5&_nc_sid=060d78&_nc_ohc=fpsrof6uEyYAX9I-J7l&vabr=233712&_nc_ht=video.xx&oh=f01631ee73715badeda7c038519ff02a&oe=6137F36C&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/10000000_4578594228836499_5276629019424181921_n.mp4/video-1630976515.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=PPyBsw34F2cAX9rhyuy&vabr=1302572&_nc_ht=video.xx&oh=977fa3ec4156213ec2608352fe434e8a&oe=6137E5F2&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/202588847_4404185002958893_3362275570863569121_n.mp4/video-1630976267.mp4?_nc_cat=102&ccb=1-5&_nc_sid=060d78&_nc_ohc=0tjImqgCuZsAX9sBXvk&vabr=380008&_nc_ht=video.xx&oh=bb8f446eb52e1b5c0a142ae179afeaf3&oe=6137ACF9&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/205936561_4128428247243847_480764396094594560_n.mp4/video-1630976279.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=0T8citEfR7sAX-oeMtR&vabr=429859&_nc_ht=video.xx&oh=738b3ba64591a3f61d15a1daeaed211f&oe=6137E122&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/201421432_5439217516149145_870658886163117638_n.mp4/video-1630976324.mp4?_nc_cat=100&ccb=1-5&_nc_sid=060d78&_nc_ohc=93Cml6k6l7UAX8iCXag&_nc_oc=AQljQVPEqrL842rIBFum_TWD5tO14okKMOt2A25JL2mnbrnYBhNQKKCZuwNTcwc8Xcw&vabr=452493&_nc_ht=video.xx&oh=5e316db63c46851c6604e2e1ace3627c&oe=6137BD84&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/241472297_4602667939745268_624522531390646263_n.mp4/video-1630976365.mp4?_nc_cat=102&ccb=1-5&_nc_sid=060d78&_nc_ohc=puslBRcq_R4AX8HjZm0&vabr=1833328&_nc_ht=video.xx&oh=88d4d71754398746e3aea4747a803543&oe=6137F182&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/10000000_4225286254236893_1647163129416750481_n.mp4/video-1630976424.mp4?_nc_cat=101&ccb=1-5&_nc_sid=060d78&_nc_ohc=elFaU-LQxgMAX9vTuru&vabr=1403376&_nc_ht=video.xx&oh=27c7cce612f395ba9813624555c7cc7a&oe=61380201&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/232430347_4396808637025299_477669260332531730_n.mp4/video-1630976454.mp4?_nc_cat=110&ccb=1-5&_nc_sid=060d78&_nc_ohc=61UjOHK6qjIAX8yiH5I&vabr=655136&_nc_ht=video.xx&oh=0e0a898b0ea4b1531ef6eeb2fa9c5b56&oe=6137B0DE&dl=1https://video.xx.fbcdn.net/v/t42.3356-2/202803551_4083702168409689_8757874175046764705_n.mp4/video-1630976374.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=LRWh2yFhuwkAX9AG3rE&vabr=1171610&_nc_ht=video.xx&oh=58983714655deb79ff6dd7f868ad4fa2&oe=6137D6DB&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/194238024_4036577199755663_7475411130677885768_n.mp4/video-1630976312.mp4?_nc_cat=102&ccb=1-5&_nc_sid=060d78&_nc_ohc=O0pEwjwCKSgAX_o7dJc&vabr=573352&_nc_ht=video.xx&oh=026b2f033183c3f2aded8dd82ed72138&oe=6137C6F9&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/241357875_3638026219633507_9054343750428913069_n.mp4/video-1630976297.mp4?_nc_cat=103&ccb=1-5&_nc_sid=060d78&_nc_ohc=oK1Dr9bKclkAX9oZtw3&vabr=1804955&_nc_ht=video.xx&oh=4db9da59c3a8ccb0dfdc2d9fd1d0d3a1&oe=61379CC0&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/233018131_4184673464920918_3388448419609881284_n.mp4/video-1630976348.mp4?_nc_cat=100&ccb=1-5&_nc_sid=060d78&_nc_ohc=D72YzCoIdcYAX8VMfBA&vabr=1614981&_nc_ht=video.xx&oh=7b196231a5f7d9d5600b7db9ef30692a&oe=6137ECC7&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/232288856_4229784163802536_2812971562674733529_n.mp4/video-1630976336.mp4?_nc_cat=108&ccb=1-5&_nc_sid=060d78&_nc_ohc=mwf81kurnucAX8rhvvS&vabr=483616&_nc_ht=video.xx&oh=a40604505afda39ea7cba00262856c2e&oe=6137B6F3&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/10000000_4405395032851659_5865983075870568680_n.mp4/video-1630976396.mp4?_nc_cat=102&ccb=1-5&_nc_sid=060d78&_nc_ohc=Ngq0FOSyhpkAX8OFUwz&vabr=1392913&_nc_ht=video.xx&oh=de0e321d49bbe4b7c211af169eebf42b&oe=613803D6&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/202803551_4083702168409689_8757874175046764705_n.mp4/video-1630976374.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=LRWh2yFhuwkAX9AG3rE&vabr=1171610&_nc_ht=video.xx&oh=58983714655deb79ff6dd7f868ad4fa2&oe=6137D6DB&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/223846421_4079194905451637_5606315317621801387_n.mp4/video-1630976447.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=0VjZfk6BxCwAX9c3VYi&vabr=1136158&_nc_ht=video.xx&oh=a04e4fe957cba221df0a85d701c69d4b&oe=6137E5E7&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/213775531_4357962297596053_198010569921930198_n.mp4/video-1630976436.mp4?_nc_cat=101&ccb=1-5&_nc_sid=060d78&_nc_ohc=iUIzBNRdRScAX_AYg9c&vabr=458150&_nc_ht=video.xx&oh=c8e318deff8610e25c43c769808a42a2&oe=6137C43A&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/183665005_4345026922215233_1551298751066669633_n.mp4/video-1630976492.mp4?_nc_cat=108&ccb=1-5&_nc_sid=060d78&_nc_ohc=s53COKCnXD0AX96ysjy&vabr=487984&_nc_ht=video.xx&oh=612440eccde2babba4e89cf42679efeb&oe=613805F3&dl=1",
"https://video.xx.fbcdn.net/v/t42.3356-2/10000000_6105464602857845_2960569664593971007_n.mp4/video-1630976481.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=Nbrt8yFAqiEAX9_WcY5&vabr=1769159&_nc_ht=video.xx&oh=0515cb4a8db2d9716b9f99108ee10d6f&oe=6137DF0E&dl=1"

];
 let getdata = (await axios.get(`${link[Math.floor(Math.random() * link.length)]} `, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

     api.sendMessage({ 
body: `${b[Math.floor(Math.random() * b.length)]}`,
	attachment: fs.createReadStream(__dirname + `/cache/bar.mp4`) }, event.threadID,() => fs.unlinkSync(__dirname + `/cache/bar.mp4`), event.messageID);
};