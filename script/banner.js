class baner {
	constructor(box, left, right, img, list, bannr) {
		//获取节点
		this.box = box;
		this.leftbtn = left;
		this.rightbtn = right;
		this.img = img;
		this.count = 0;
		this.list = list;
		this.bannr = bannr;
		this.init();
	}
	init() {
		//单个img宽
		this.boxw = this.img[0].width;
		//方法
		this.load();
		this.set();
		this.lis();
		this.anima();
	}
	load() {
		var _this = this;
		this.a = true;
		//给左按钮绑定事件
		this.leftbtn.onclick = function () {
			if (_this.a) {
				_this.count--;
				if (_this.count < 0) {
					_this.count = _this.img.length - 1;
					_this.box.style.left = _this.boxw * -_this.count + "px";
					_this.count--;

				}
				animation(_this.box, { left: _this.boxw * -_this.count }, 1000, function fn() {
					_this.anima();
					_this.a = true;
				})
				_this.a = false;
			}
		}
		//给右按钮绑定事件
		this.rightbtn.onclick = function () {
			if (_this.a) {
				_this.count++;
				animation(_this.box, { left: _this.boxw * -_this.count }, 1000, function fn() {
					if (_this.count >= _this.img.length - 1) {
						_this.count = 0;
						_this.box.style.left = 0 + "px";
					}
					_this.anima();
					_this.a = true;
				})
			}
			_this.a = false;
		}
	}
	set() {
		this.a = true;
		var _this = this;
		this.dingshi = setInterval(function () {
			if (_this.a) {
				_this.count++;
				animation(_this.box, { left: _this.boxw * -_this.count }, 1000, function fn() {
					if (_this.count >= _this.img.length - 1) {
						_this.count = 0;
						_this.box.style.left = 0 + "px";
					}
					_this.anima();
					_this.a = true;
				})
			}
			_this.a = false;
		}, 3000)
		this.bannr.onmouseenter = function () {
			_this.leftbtn.style.display = "block";
			_this.rightbtn.style.display = "block";
			clearInterval(_this.dingshi)
		}
		this.bannr.onmouseleave = function () {
			_this.leftbtn.style.display = "none";
			_this.rightbtn.style.display = "none";
			_this.dingshi = setInterval(function () {
				if (_this.a) {
					_this.count++;
					animation(_this.box, { left: _this.boxw * -_this.count }, 1000, function fn() {
						if (_this.count >= _this.img.length - 1) {
							_this.count = 0;
							_this.box.style.left = 0 + "px";
						}
						_this.anima();
						_this.a = true;
					})
				}
				_this.a = false;
			}, 3000)
		}
	}
	lis() {
		var _this = this;
		this.a = true;
		for (let i = 0; i < this.list.length; i++) {
			this.list[i].onclick = function () {
				if (_this.a) {
					_this.count = i;
					animation(_this.box, { left: -_this.boxw * i }, 1000, function fn() {
						_this.anima();
						_this.a = true;
					})
				}
				_this.a = false;
			}
		}
	}
	anima() {
		var _this = this;

		for (let i = 0; i < this.list.length; i++) {
			if (_this.count === i) {
				this.list[i].style.border = 3 + "px" + " " + "solid" + " " + "white";
				this.list[i].style.background = "none"
			} else {
				this.list[i].style.border = "none";
				this.list[i].style.background = "white"
			}
		}
	}
}