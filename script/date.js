function da(time) {
	var now = new Date();
	var late = new Date(time);
	var latetime = late.getTime();
	// 未来时间
	var date = now.getTime();
	//当前时间
	var cha = latetime - date;
	var tian = cha / 1000 / 60 / 60 / 24;
	var tians = parseInt(cha / 1000 / 60 / 60 / 24);//天
	var times = tian - tians;
	var hour = times * 24; //小时
	var hours = times * 24 - parseInt(hour);
	var fen = hours * 60 //分
	var fenyu = fen - parseInt(hours * 60)//分余
	var min = fenyu * 60 //秒
	return "剩余" + " " + tians + "天" + " " + parseInt(hour) + "时" + " " + parseInt(fen) + "分" + " " + parseInt(min) + "秒";
}