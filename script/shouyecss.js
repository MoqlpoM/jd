"user strick";
var fuwu = document.getElementById("fuwu");
var lasthover = document.getElementsByClassName("lasthover")[0];
var codet = document.getElementsByClassName("code-tips")[0];
var close = document.getElementsByClassName("close")[0];
var fixed = document.getElementsByClassName("fixed-banner")[0];
fuwu.style.position = "relative";
var box = document.createElement("div");
box.className = "box";
box.style.position = "absolute";
fuwu.appendChild(box);
box.style.width = 63 + "px";
box.style.height = 50 + "px";
box.style.top = 30 + "px";
box.style.left = 5 + "px";
box.style.borderRadius = 5 + "px";
box.style.border = 1 + "px" + " " + "solid" + " " + "lightgray";
box.style.padding = 0 + "px";
box.style.display = "none";
box.style.zIndex = "2";
box.style.background = "#F6F6F6";
box.innerHTML = `<a style="display:block;height:25px;text-align:center; margin:0px;line-height:25px;">帮助中心</a>
	<a style="display:block;height:25px;text-align:center; margin:0px;line-height:25px;">联系客服</a>`;
fuwu.onmouseenter = function () {
	box.style.display = "block";
};
fuwu.onmouseleave = function () {
	box.style.display = "none";
};
lasthover.onmouseenter = function () {
	codet.style.display = "block";
};
lasthover.onmouseleave = function () {
	codet.style.display = "none";
};
close.onclick = function () {
	fixed.style.display = "none";
};
var boxa = document.getElementsByClassName("img")[0];
var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];
var img = boxa.getElementsByTagName("img");
var lista = document.getElementsByClassName("list")[0];
var list = lista.getElementsByTagName("li");
var bannr = document.getElementsByClassName("banner")[0]
var bannera = new baner(boxa, left, right, img, list, bannr);
var ptime = document.getElementsByClassName("date");
setInterval(function () {
	for (var i = 0; i < ptime.length; i++) {
		ptime[i].innerHTML = `<span>${da("2020-12-29")}</span>`
	}
}, 1000);
var xuan = document.getElementsByClassName("xuan")[0];
class csshtml {
	constructor(xuan) {
		this.url = "../data/shangping.json";
		this.arr = [];
		this.bath = [];
		this.xuan = xuan;
		this.yemar = document.getElementsByClassName("pgpreva")[0];
		this.span = this.yemar.getElementsByTagName("span");
		this.qian = document.getElementsByClassName("pgprev")[0];
		this.hous = document.getElementsByClassName("pgprevs")[0];
		this.deng = document.getElementsByClassName("denglu")[0];
		this.zhu = document.getElementsByClassName("zhuce")[0];
		this.biannum = document.getElementsByClassName("biannum")[0];
		this.xiangshang = document.getElementsByClassName("xiangshang")
		this.int();
		this.mingzi();
	}
	int() {
		var _this = this;
		var arr = [];
		ge(this.url, function (res) {
			_this.res = JSON.parse(res);
			_this.load();
		})
	}
	mingzi() {
		if (localStorage.getItem("cun")) {
			this.name = JSON.parse(localStorage.getItem("cun")).name;
			if (this.name) {
				this.jiajia();
				this.deng.innerText = "欢迎" + this.name + "回来";
				this.zhu.innerText = "退出";
				this.deng.className = ("huanying")
				this.zhu.className = ("red tuichu")
				this.ceshi();
				this.tui();

			}
		} else {
			this.ceshi();
		}
	}
	tui() {
		var _this = this;
		this.zhu.onclick = function () {
			localStorage.setItem("cun", JSON.stringify({}))
			_this.deng.className = "denglu";
			_this.zhu.className = "red zhuce";
			_this.deng.innerText = "登录";
			_this.zhu.innerText = "注册";
			localStorage.removeItem('cun');
			_this.ceshi();
		}
	}
	load() {
		var _this = this;
		for (var i = 0; i < this.res.length; i += 10) {
			this.arr.push(this.res.slice(i, i + 10));
		}
		var shu = this.arr[0]
		var str = ""
		for (let k in shu) {
			str += `
					<li num="0" goodsid="${shu[k].goodsid}">
						<img datasrc="${shu[k].img}" width="220px"height="220px">
						<p><span style="color:red;">￥${shu[k].price}</span><span style="margin-left:8px;color:#ccc;font-size:14px;"><s>${shu[k].priceold}</s></span></p>
						<P><span  style="font-size:12px;">${shu[k].name}</span><span style="float:right;margin-right:10px;font-size:12px;color:#ccc;">${shu[k].new}</span></p>
					</li>
				`
		}
		this.xuan.innerHTML = ""
		this.xuan.innerHTML = str;
		onscroll = function () {
			_this.image();
		}
		this.yema();
		this.click();
		this.qia();
		this.hou();
	}
	yema() {
		var _this = this;
		var str = "";
		for (let j = 0; j < this.arr.length; j++) {
			str += `
			<span>${j + 1}</span>
		`
		}
		this.yemar.innerHTML = str;
		for (let i = 0; i < this.span.length; i++) {
			this.span[i].onclick = function () {
				var strs = "";
				for (let k = 0; k < _this.arr.length; k++) {
					var shu = _this.arr[k]
					if (i == k) {
						_this.span[k].style.color = "white";
						_this.span[k].style.background = "#ff464e"
						for (let a in shu) {
							strs += `
						<li num="${k}" goodsid="${shu[a].goodsid}">
							<img src="${shu[a].img}" width="220px"height="220px">
							<p><span style="color:red;">￥${shu[a].price}</span><span style="margin-left:8px;color:#ccc;font-size:14px;"><s>${shu[a].priceold}</s></span></p>
							<P><span  style="font-size:12px;">${shu[a].name}</span><span style="float:right;margin-right:10px;font-size:12px;color:#ccc;">${shu[a].new}</span></p>
						</li>
					`
						}
						_this.xuan.innerHTML = "";
						_this.xuan.innerHTML = strs;
						_this.click();
					} else {
						_this.span[k].style.color = "gray";
						_this.span[k].style.background = "white"
					}
				}
			}
		}
	}
	qia() {
		var _this = this;
		this.qian.onclick = function () {
			var strs = "";
			var numr = _this.xuan.firstElementChild.getAttribute("num") - 1;
			if (numr >= 0) {
				var shu = _this.arr[numr]
				for (let a in shu) {
					strs += `
							<li num="${numr}" goodsid="${shu[a].goodsid}">
								<img src="${shu[a].img}" width="220px"height="220px">
								<p><span style="color:red;">￥${shu[a].price}</span><span style="margin-left:8px;color:#ccc;font-size:14px;"><s>${shu[a].priceold}</s></span></p>
								<P><span  style="font-size:12px;">${shu[a].name}</span><span style="float:right;margin-right:10px;font-size:12px;color:#ccc;">${shu[a].new}</span></p>
							</li>
						`
				}
				_this.xuan.innerHTML = "";
				_this.xuan.innerHTML = strs;
				_this.click();
				_this.span[numr].style.color = "white";
				_this.span[numr].style.background = "#ff464e";
				for (var i = 0; i < _this.arr.length; i++) {
					if (i != numr) {
						_this.span[i].style.color = "gray";
						_this.span[i].style.background = "white"
					}
				}
			}
		}

		this.qian.onmouseenter = function () {
			if (_this.xuan.firstElementChild.getAttribute("num") == 0) {
				_this.qian.style.background = "white"
			} else {
				_this.qian.style.color = "white";
				_this.qian.style.background = "#ff464e"
			}
		}
		this.qian.onmouseleave = function () {
			_this.qian.style.color = "gray";
			_this.qian.style.background = "white"
		}
	}
	hou() {
		var _this = this;
		this.hous.onclick = function () {
			var strs = "";
			var numr = parseInt(_this.xuan.firstElementChild.getAttribute("num") + 1);
			if (numr < _this.span.length) {
				var shu = _this.arr[numr]
				for (let a in shu) {
					strs += `
							<li num="${numr}" goodsid="${shu[a].goodsid}">
								<img src="${shu[a].img}" width="220px"height="220px">
								<p><span style="color:red;">￥${shu[a].price}</span><span style="margin-left:8px;color:#ccc;font-size:14px;"><s>${shu[a].priceold}</s></span></p>
								<P><span  style="font-size:12px;">${shu[a].name}</span><span style="float:right;margin-right:10px;font-size:12px;color:#ccc;">${shu[a].new}</span></p>
							</li>
						`
				}
				_this.xuan.innerHTML = "";
				_this.xuan.innerHTML = strs;
				_this.click();
				_this.span[numr].style.color = "white";
				_this.span[numr].style.background = "#ff464e";
				for (var i = 0; i < _this.arr.length; i++) {
					if (i != numr) {
						_this.span[i].style.color = "gray";
						_this.span[i].style.background = "white"
					}
				}
			}
		}
		this.hous.onmouseenter = function () {
			if (_this.xuan.firstElementChild.getAttribute("num") == _this.arr.length - 1) {
				_this.hous.style.background = "white"
			} else {
				_this.hous.style.color = "white";
				_this.hous.style.background = "#ff464e"
			}
		}
		this.hous.onmouseleave = function () {
			_this.hous.style.color = "gray";
			_this.hous.style.background = "white"
		}
	}
	click() {
		var _this = this
		this.ul = document.getElementsByClassName("xuan")[0]
		this.li = this.ul.getElementsByTagName("li")
		this.ul.onclick = function (e) {
			var a = e.target
			for (var i = 0; i < 100; i++) {
				if (e.target.tagName == "LI") {
					var c = e.target.getAttribute("goodsid")
					_this.bath[0] = c;
					localStorage.setItem("xiangqing", JSON.stringify(_this.bath))
					window.location.href = 'xiangqingye.html?' + e.target.getAttribute("goodsid")
					window.event.returnValue = false;
					break;
				} else if (a.parentNode.getAttribute("goodsid")) {
					var a = a.parentNode.getAttribute("goodsid")
					_this.bath[0] = a;
					localStorage.setItem("xiangqing", JSON.stringify(_this.bath))
					window.location.href = 'xiangqingye.html?' + a;
					window.event.returnValue = false;
					break;
				} else {
					a = a.parentNode;
				}
			}
		}
	}
	ceshi() {
		if (this.zhu.className == "red zhuce") {
			this.zhu.onclick = function () {
				localStorage.setItem("zhuceid", "1")
				// window.open("dengluzhuce.html")
				window.location.href = 'dengluzhuce.html';
				window.event.returnValue = false;
			}
		}
		if (this.deng.className == "denglu") {
			this.deng.onclick = function () {
				localStorage.setItem("zhuceid", "0")
				window.location.href = 'dengluzhuce.html';
				window.event.returnValue = false;
			}
		}
	}
	image() {
		this.imga = this.xuan.getElementsByTagName("img");
		for (let i = 0; i < this.imga.length; i++) {
			if (this.imga[i].src == "") {
				if (this.imga[i].offsetTop < (document.documentElement.scrollTop + document.documentElement.clientHeight)) {
					this.imga[i].src = this.imga[i].getAttribute("datasrc");
				}
			}
		}
	}
	jiajia() {
		if (localStorage.getItem("shops")) {
			this.da = JSON.parse(localStorage.getItem("shops"));
			this.baaa = [];
			for (var i = 0; i < this.da.length; i++) {
				if (this.da[i].name == this.name) {
					this.baaa.push(i)
				}
				// console.log(this.baaa)
				this.biannum.innerText = this.baaa.length;
			}
		}
	}

}
new csshtml(xuan);

