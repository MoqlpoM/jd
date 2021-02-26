class shop {
	constructor() {
		this.url = "../data/shangping.json";
		this.body = document.querySelector(".cobIRk");
		this.top = document.getElementsByClassName("cnZstM")[0];
		this.zhong = document.getElementsByClassName("eiPhbT")[0];
		this.foot = document.getElementsByClassName("dTaAdI")[0];
		this.yuan = document.getElementsByClassName("jIjoBj")[0];
		this.deng = document.getElementsByClassName("denglu")[0];
		this.zhu = document.getElementsByClassName("zhuce")[0];
		this.mingzi();
	}
	mingzi() {
		if (localStorage.getItem("cun")) {
			this.name = JSON.parse(localStorage.getItem("cun")).name;
			if (this.name) {
				if (JSON.parse(localStorage.getItem("shops"))) {
					this.shops = JSON.parse(localStorage.getItem("shops"));
					this.pan();
				}
				this.deng.innerText = "欢迎" + this.name + "回来";
				this.zhu.innerText = "退出";
				// console.log(this.name)
				if (this.deng.className.indexOf("denglu") != -1 && this.zhu.className.indexOf("zhuce") != -1) {
					this.deng.className = ("huanying")
					this.zhu.className = ("red tuichu")
					// console.log(this.deng)
					this.ceshi();
					this.tui();
				}
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
			_this.yuan.style.display = "blcok";
			_this.ceshi();
		}
	}
	pan() {
		var a = true;
		for (let i = 0; i < this.shops.length; i++) {
			if (this.shops[i].name == this.name) {
				this.yuan.style.display = "none";
				this.load();
				a = false;
				break;
			}
		}
		if (a) {
			this.yuan.style.display = "block";
		}
	}
	load() {
		var _this = this;
		ge(this.url, function (res) {
			_this.res = JSON.parse(res);
			_this.display();
		})
	}
	display() {
		var str = "";
		var str1 = "";
		var str2 = "";
		for (var i = 0; i < this.res.length; i++) {
			for (var j = 0; j < this.shops.length; j++) {
				if (this.res[i].goodsid == this.shops[j].id && this.shops[j].name == this.name) {
					str = ` <div class="dhEFau">
							<span class="hEFYKq checked"></span>
						</div>
						<div class="hEoyiQ">
							<img src="image/5942339ea43d1f47ef70e59a_72x72.png" alt="" class="jklnfm">
							跨店促销
						</div>
						<a href="" class="wDFtF">已享满49元减5元</a>
				
	            `
					str1 += `
				<div class="jgeReN">
					<div class="dhEFau">
						<span class="hEFYKq checked"></span>
					</div>
					<a href="">
						<img src="${this.res[i].img}" alt="" width="100" height="100" class="dTmrnm">
					</a>
					<div class="bHFcVk hpxIDz">
						<strong class="sc-cIShpX fFbWQU">
							${this.res[i].name}
						</strong>
						<span class="fNZORM">
							黄色
						</span>
					</div>
					<div class="gqzEPU hpxIDz">
						￥${this.res[i].price}
						<i class="jFEPf">/ ￥${this.res[i].priceold}</i>
					</div>
					<div class="cABebT hpxIDz">
						<span class="jKWKYq jqPibT" sid="${this.shops[j].id}">-</span>
						<span class="eywEEl jqPibT">${this.shops[j].num}</span>
						<span class="jiKWSK jqPibT" sid="${this.shops[j].id}">+</span>
					</div>
					<div class="dQIiuS hpxIDz">
						￥0
					</div>
					<div class="giPVvt hpxIDz">
						<span class="ewFBmF carNkP" sid="${this.shops[j].id}">   
						</span>
					</div>
				</div>
					
					`
					str2 = `
				<div class="lcRLSj">
					<div class="dhEFau">
						<span class="hEFYKq checked"></span>
					</div>
					全选
				</div>
				<div class="hPtVKw">
					<span class="jUfYqO">
						￥0.00
					</span>
					<button class="POmDt">去结算</button>
				</div>
				`
				}
			}
		}
		this.top.innerHTML = str;
		this.zhong.innerHTML = str1;
		this.foot.style.display = "block"
		this.foot.innerHTML = str2;
		this.addevent();
		this.zongshua();
		this.zongjiaa();
	}
	addevent() {
		var _this = this;
		this.thead = document.getElementsByClassName("cnZstM")[0];
		this.theadspan = this.thead.getElementsByClassName("hEFYKq")[0];
		this.span = document.getElementsByClassName("eiPhbT")[0];
		this.allspan = this.span.getElementsByClassName("hEFYKq");
		this.footspan = document.getElementsByClassName("dTaAdI")[0];
		this.footallspan = this.footspan.getElementsByClassName("hEFYKq")[0];
		this.thead.addEventListener("click", function (e) {
			if (e.target.tagName == "SPAN") {
				if (e.target.className.indexOf("checked") != -1) {
					e.target.className = e.target.className.replace("checked", " ")
					for (let i = 0; i < _this.allspan.length; i++) {
						_this.allspan[i].className = _this.allspan[i].className.replace("checked", " ")
					}
					_this.footallspan.className = _this.footallspan.className.replace("checked", " ")
				}
				else {
					_this.footallspan.className += " checked";
					e.target.className += " checked";
					for (let i = 0; i < _this.allspan.length; i++) {
						if (_this.allspan[i].className.indexOf("checked") == -1) {
							_this.allspan[i].className += " checked";
						}
					}
				}
			}
			_this.zongshua();
			_this.zongjiaa();
		})
		this.footspan.addEventListener("click", function (e) {
			if (e.target.tagName == "SPAN") {
				if (e.target.className.indexOf("checked") != -1) {
					_this.theadspan.className = _this.footallspan.className.replace("checked", " ")
					e.target.className = e.target.className.replace("checked", " ")
					for (let i = 0; i < _this.allspan.length; i++) {
						_this.allspan[i].className = _this.allspan[i].className.replace("checked", " ")
					}
				} else {
					_this.theadspan.className += " checked";
					e.target.className += " checked";
					for (let i = 0; i < _this.allspan.length; i++) {
						if (_this.allspan[i].className.indexOf("checked") == -1) {
							_this.allspan[i].className += " checked";
						}
					}
				}
			}
			_this.zongshua();
			_this.zongjiaa();
		})
		this.span.addEventListener("click", function (e) {
			if (e.target.innerHTML == "-") {
				e.target.nextElementSibling.innerText = parseInt(e.target.nextElementSibling.innerText) - 1;
				if (e.target.nextElementSibling.innerText < 1) {
					e.target.nextElementSibling.innerText = 1;
				}
				var arr = JSON.parse(localStorage.getItem("shops"))
				var obj = {}
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].id == e.target.getAttribute("sid") && arr[i].name == JSON.parse(localStorage.getItem("cun")).name) {

						obj.name = JSON.parse(localStorage.getItem("cun")).name;
						obj.id = e.target.getAttribute("sid");
						obj.num = e.target.nextElementSibling.innerText;
						arr[i] = obj;
						localStorage.setItem("shops", JSON.stringify(arr))
					}
				}
			}
			if (e.target.innerHTML == "+") {
				e.target.previousElementSibling.innerText = parseInt(e.target.previousElementSibling.innerText) + 1;
				if (e.target.previousElementSibling.innerText > 99) {
					e.target.previousElementSibling.innerText = 99;
				}
				var arr = JSON.parse(localStorage.getItem("shops"))
				var obj = {};
				for (let i = 0; i < arr.length; i++) {
					console.log(this.name)
					if (arr[i].id == e.target.getAttribute("sid") && arr[i].name == JSON.parse(localStorage.getItem("cun")).name) {
						obj.name = JSON.parse(localStorage.getItem("cun")).name;
						obj.id = e.target.getAttribute("sid");
						obj.num = e.target.previousElementSibling.innerText;
						arr[i] = obj;
						localStorage.setItem("shops", JSON.stringify(arr))
					}
				}
			}
			if (e.target.innerHTML == "") {
				if (e.target.className.indexOf("checked") != -1) {
					e.target.className = e.target.className.replace("checked", " ")
				} else {
					e.target.className += " checked";
				}
				_this.arrs = [];
				for (let i = 0; i < _this.allspan.length; i++) {
					if (_this.allspan[i].className.indexOf("checked") != -1) {
						_this.arrs.push(i)
					}
				}
				if (_this.allspan.length != _this.arrs.length) {
					_this.theadspan.className = _this.footallspan.className.replace("checked", " ");
					_this.footallspan.className = _this.theadspan.className.replace("checked", " ");
				} else {
					_this.theadspan.className += " checked";
					_this.footallspan.className += " checked";
				}
			}
			if (e.target.className == "ewFBmF carNkP") {
				var arr = JSON.parse(localStorage.getItem("shops"))
				var obj = {};
				for (let i = 0; i < arr.length; i++) {
					console.log(this.name)
					if (arr[i].id == e.target.getAttribute("sid") && arr[i].name == JSON.parse(localStorage.getItem("cun")).name) {
						arr.splice(i, 1)
						localStorage.setItem("shops", JSON.stringify(arr))
						e.target.parentNode.parentNode.remove()
						console.log(_this.allspan.length == 0)
						if (_this.allspan.length == 0) {
							_this.thead.style.display = "none";
							_this.yuan.style.display = "block";
							_this.footspan.style.display = "none";
							break;
						}
						break;
					}
				}
			}
			_this.zongshua();
			_this.zongjiaa();
		})

	}
	zongjiaa() {
		this.arr = [];
		this.he = 0;
		this.zongjia = document.getElementsByClassName("jUfYqO")[0];
		for (let i = 0; i < this.allspan.length; i++) {
			if (this.allspan[i].className.indexOf("checked") != -1) {
				this.zong = this.allspan[i].parentNode.parentNode.getElementsByClassName("dQIiuS")[0].innerText;
				this.zongz = this.zong.slice(1, this.zong.length)
				this.arr.push(parseFloat(this.zongz))
			}
		}
		for (let j = 0; j < this.arr.length; j++) {
			this.he += this.arr[j];
		}
		this.zongjia.innerHTML = "￥" + this.he + ".00";
	}
	zongshua() {
		this.jia = document.getElementsByClassName("gqzEPU");
		this.zongshu = document.getElementsByClassName("dQIiuS")
		for (var i = 0; i < this.jia.length; i++) {
			this.jiatxt = this.jia[i].firstChild.nodeValue;
			this.nu = document.getElementsByClassName("eywEEl")[i].innerText;
			this.zongshu[i].innerText = "￥" + parseInt(this.jiatxt.slice(8, 11)) * this.nu
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
}
new shop;