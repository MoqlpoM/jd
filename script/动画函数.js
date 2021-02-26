function animation(yuansu, obj, shijian, fn) {
	var nowlocal = {};
	var interval = 20;
	//总次数
	var cishu = shijian / interval;
	//获取obj属性然后得到动画位移前的属性对象
	for (i in obj) {
		nowlocal[i] = parseInt(getstyle(yuansu, i))
	};
	var count = 0;
	var times = setInterval(function () {
		count++;
		for (i in obj) {
			//总移动距离
			var yidong = obj[i] - nowlocal[i];
			//单次移动距离
			var danci = yidong / cishu;
			yuansu.style[i] = danci * count + nowlocal[i] + "px";
		}
		if (count >= cishu) {
			clearInterval(times);

			if (fn) {
				fn()
			}
		}
	}, interval)
	function getstyle(yuansu, css) {
		if (window.getComputedStyle) {
			return window.getComputedStyle(yuansu)[css];
		} else {
			return yuansu.currentStyle[css]
		}
	}
}