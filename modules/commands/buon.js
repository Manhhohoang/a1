module.exports.config = {
    name: "buon",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Pham Minh Duy",
    description: "Thơ buồn",
    commandCategory: "Lover",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
    var gai = [" Hoàng hôn\nBuông.\nMặt Trời đỏ rực\nMắt em\nCười.\nLong lanh như suối\nỪ thì,\nGặp nhau lần cuối\nChuyện mình,\nĐến đây thôi.",

"Họ vô tình cho ta chút hi vọng,\nta ngây thơ tưởng đó là tình yêu.",
"Con mèo thầm thương chiếc lá nhưng vẫn thịt con cá và ngủ với cuộn len",

"Sự im lặng sẽ giết chết một mối quan hệ\nBởi vậy, khi quan hệ bạn đừng im lặng!",

"Tất cả nỗi buồn trên đời này đều bắt nguồn từ năm chữ: Thích người không thích mình!",

"Không hợp - \nhai chữ này vốn là vì hết\nyêu mà thành!",

"- Thế nào là hai đường thẳng song song?\n- Là hai đường thẳng không có điểm chung, dù kéo dài bao lâu cũng không có khả năng gặp gỡ.\n- Sai rồi, là anh và em.",

"Em đã nghĩ, mình\nrất rất cô đơn. Nhưng\nhóa ra không phải chỉ là\nnghĩ, đó là sự thật.",

"Chuyện cũng dài\nKể ra cũng ngại\nNên thôi dừng lại\nChúng mình chia hai.",

"Thực ra, bạn yêu người ta\nnhiều như thế nào, một lòng\nmột dạ ra sao... tất cả đều\nkhông quan trọng. Quan trọng\nlà trong lòng người ta, bạn\nkhông là gì cả.",

"Thất tình thực ra chỉ là\ncảm giác bất lực khi không\nthể khiến trái tim mình ngừng\nyêu một ai đó.",

"Khoảng khắc người ta\nmong chờ nhất là khi hoa nở.\ Nhưng hoa nở , người ta\nlại bắt đầu lo sợ nó phai tàn.",

"Sâu đậm gì đâu\nVài câu chữ\nLà mọi thứ\nThành quá khứ,\ncả rồi...",

"Hóa ra tụi  gặp\nnhau, là để gieo những\nthương đau vào đời.",

"Đợi một ngày khi em nhìn\nlên, bầu trời không còn mang\nhình bóng anh nữa. Những\nđám mây sẽ thay thế , tô\nvẽ lên cuộc đời em.",

"Giờ đây anh chỉ mong em\nđủ bình yên.",

"Em biết không, em đi rồi.\nThứ thay thế em trong anh,\nlà những giọt men nồng,\nđã từng là ngọt ngào,\ngiờ lại hóa đắng cay.",

"Khi lòng anh cũng đã\nnguôi ngoai đôi phần để\nbước về hướng đi phía trước.\nAnh đặt tạm em vào một góc\ntrong anh.",

"Trừng phạt lớn nhất\nchính là sự lãng quên của\nmột người mình từng coi\nnhư tất cả.",

"Dẫu biết rằng cố quên là sẽ nhớ\nNên dặn lòng cố nhớ để mà quên.",

"Ở đâu trăng có nhớ người\nỞ đây đang có một người nhớ trăng.",

"Có khi nào trên đường đời tấp nập\nTa vô tình đi lướt qua nhau.",

"Sớm vọng mặt đất thương xanh núi\nChiều lộng chân mây nhớ tím trời.",

"Với tay khơi dậy hương ngày cũ\nMường tượng như mình gặp cố nhân.",

"Trái tim hát lại câu ngư\nBài thơ tôi lại nhớ về người dưng.",

"Dù cho sông cạn đá mòn\nCòn non còn nước còn lời thề xưa",

"Đôi khi lỡ hẹn một giờ\nLần sau muốn gặp phải chờ trăm năm.",

"Bên này trời vẫn đang mưa\nLòng anh vẫn thế, vẫn chưa hết buồn.",

"Người vô tình vẽ hoa, vẽ lá\nTôi đa tình tưởng đấy là mùa xuân.",

"Anh là anh của lưng chừng\nTôi là tôi của đã từng thương anh.",

"Chút nắng vàng sao làm nên mùa hạ\nChút tình xa lạ sao giữ được người ta.",

"Ai tắt đèn cho hạnh phúc tối thui?\nTa đã cố vui mà nỗi buồn vẫn tới.",

"Lá vô tình bỏ rơi cành lá\nNgười vô tình bỏ lỡ tơ duyên.",

"Không buồn vì những thứ mình không có\nChỉ buồn vì những thứ có cũng như không.",

"Tương tư như nắm tro tàn\nNgười đi ngược lối, tình đi ngược chiều.",

"Một bông hoa không tôn thờ hai chủ\nMột con người không ấp ủ hai trái tim.",

"Tuyết tan, mưa tạnh, hoa tàn\nNắng tắt, đêm trôi, lòng người đổi thay.",

"Lúc yêu thương, lúc giả dối\nThôi tôi mở lối cho người bước đi.",

"Trăm năm chết bởi chữ tình\nSinh lòng thù hận cũng vì chữ yêu.",

"Mình còn gì nữa đâu\nVùng tươi đã úa, miền xanh đã tàn.",

"Nắng bỏ đi, nắng không về nữa\nDốc cạn lòng chỉ thấy những cơn mưa.",

"Thương nhau thế nhưng chỉ là *đã từng*\nVài lần hờ hững bỗng thành người dưng.",

"Thế gian cỏ lạ nhiều vô kể\nCớ sao nhớ mãi một nhành hoa?",

"Em đi bỏ lại con đường\nBờ xa cỏ dại vô thường nhớ em.",

"Ta về giữ lại mùi hương\nĐường không xứ sở còn vương bóng hình.",

"Chuyện mười năm biết có thành dĩ vãng\nCũng như ta chưa chắc đã quên người.",

"Ta mang cả tình yêu chân thật nhất\nTrao cho người để đổi một niềm đau.",

"Cô ấy nói rằng đã đến lúc\nđể em đi. Nhưng sao lại đi.\nVì em còn việc phải làm. Tôi\nsẽ để cô ấy , dù biết không\nbao giờ cả hai về gặp lại\nnhau nữa...",

"Cuộc sống không tình yêu\nNhư vườn hồng không ánh nắng.",

"Trái tim còn chút lửa hồng\nCũng xin ơn cảm mênh mông tặng người.",

"Tôi đi tìm cái nửa của tôi\nSao tìm mãi đến giờ không thấy.",

"Tìm em tìm hết cuộc đời\nMà sao em cứ để tôi mãi tìm.",

"Thà là độc thân sáng giá\nCòn hơn tin vào những lời dối trá khi yêu.",

"Nắng không về nữa, thế là mưa bay\nTớ không chờ nữa, thế là buông tay.",

"Muốn xin một chút thật tình\nẤy mà đổi lại chỉ toàn lặng thinh.",

"Em thấy gì khi buổi chiều lạc lõng\nĐôi vai gầy không cõng hết cô đơn.",

"Mười ngón tay không ôm nổi muộn phiền\nEm đừng buồn, em đáng được bình yên.",

"Hạnh phúc nào cũng chan hòa mật đắng\nCố tìm quên mà gợi nhớ suốt đời.",

"Hồn em là hoa cỏ may\nMột chiều cả gió bám đầy áo anh.",

"Một mình thẫn thẫn thờ thờ\nMột mình ngẩn ngẩn ngơ ngơ nhớ nàng.",

"Nhẹ nhàng áo mỏng bay theo gió\nPhủ sóng hồn anh nỗi nhớ nhung.",

"Biển cứ cậy mình dài rộng thế\nVắng cánh buồm một chút đã cô đơn.",

"Mượn tiếng cười che giấu những niềm đau\nĐêm gối mộng ai sầu ai nhỏ lệ.",

"Việc dốc cạn tâm can để yêu\nthương một ai đó không yêu\nmình, ngay từ đầu đã là một\nviệc làm ngu ngốc.",

"Đừng nghĩ quá nhiều, có những chuyện, những người, những việc, vốn dĩ nó đã phải là như thế.",

"Dù có muốn cũng không thay đổi được.🌿",

"Rồi sau cùng, tình yêu của\nchúng tôi cũng đến ngày hết\nhạn. Giống như đóa hoa hải\nđường, hôm ấy tôi mua...",
`- Anh hút thuốc lại à ?
 
- Một chút.

- Hồi đó anh bỏ thuốc rồi mà ?

- Uh, vì hồi đó có em...`
    ];
    
  
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, event.threadID,event.messageID);
};

