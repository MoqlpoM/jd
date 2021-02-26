var fuwu = document.getElementById("fuwu");
var lasthover = document.getElementsByClassName("lasthover")[0];
var codet = document.getElementsByClassName("code-tips")[0];
var close = document.getElementsByClassName("close")[0];
// fuwu.style.position = "relative";
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
class xuanran {
	constructor() {
		this.num = JSON.parse(localStorage.getItem("xiangqing"));
		this.xuan = document.getElementsByClassName("nei")[0];
		this.url = "../data/shangping.json";
		this.deng = document.getElementsByClassName("denglu")[0];
		this.zhu = document.getElementsByClassName("zhuce")[0];
		this.biannum = document.getElementsByClassName("biannum")[0];
		this.jsn();
		this.mingzi();
	}
	mingzi() {
		if (localStorage.getItem("cun")) {
			this.name = JSON.parse(localStorage.getItem("cun")).name;
			if (this.name) {
				this.jiajia();
				this.deng.innerText = "欢迎" + this.name + "回来";
				this.zhu.innerText = "退出";
				if (this.deng.className.indexOf("denglu") != -1 && this.zhu.className.indexOf("zhuce") != -1) {
					this.deng.className = ("huanying")
					this.zhu.className = ("red tuichu")
					this.ceshi();
					this.tui();
				}
			}
		} else {
			this.ceshi();
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
	jsn() {
		var _this = this
		ge(this.url, function (res) {
			_this.res = JSON.parse(res)
			_this.duibi();
		})
	}
	duibi() {
		for (var i = 0; i < this.res.length; i++) {
			var str = "";
			if (this.num[0] == this.res[i].goodsid) {
				str += `
						<div class="place-show">
							<div class="place-explain">
								<a href="index.html">首页</a>
								<em class="tab_arrow"></em>
								<a href="nvzhuang.html">女装</a>
								<em class="tab_arrow"></em>
								<a href="">${this.res[i].name}</a>
							</div>
						</div>
						<div class="goods_show">
							<div class="deal-pic">
								<ul></ul>
								<div class="pic BOX">
									<img src="${this.res[i].img}" style="width:310px;height:310px;" alt="">
									<div class="box1"></div>
								</div>
								<div class="BOX2">
									<img src="${this.res[i].img}" class="BOXimg" alt="" style="width:620px;height:620px;position:absolute;z-index:99;">
								</div>
								<div class="sale_ad_info_txt">
									<span class="sale_text_wrapper">
										<span class="sale_ad_txt">100%人工质检</span>
										<span class="sale_ad_txt">全国包邮低价保障</span>
										<span class="sale_ad_txt">7天无理由退货</span>
									</span>
								</div>
								<div class="sector-other">
									<div class="collect">
										<a href=""><i></i>收藏</a>
									</div>
									<div class="share-box">
										<a href="" class="txt"><i></i>分享</a>
									</div>
									<div >
										<a href="">举报</a>
									</div>
								</div>
							</div>
							<div class="deal-wrap">
								<h1>${this.res[i].name}</h1>
								<div class="sector-info">
									<div class="J-basic">
										<div class="d-info">
											<div class="djs" style="right: 20px;">
												剩余:
												<span class="date" style="display:inline-block;width:110px;height:32px"></span>
											</div>
											<div class="tm-price">
												<dd class="price global-price0">
													<span class="current fl">￥${this.res[i].price}</span>
													<span class="old fl">参考价:￥${this.res[i].priceold}</span>
												</dd>
											</div>
											<div class="activity-info">
												<dt>促销：</dt>
												<dd class="activity-dd">
													<div class="activity-c">
														<div class="activity-item">
															<div class="brand-tag-red">满件折</div>
															<div class="info">
																满3件5折
																<a href="">
																详情
																<span class="act_detail_icon"></span>
																</a>
															</div>
														</div>
													</div>
												</dd>
											</div>
										</div>
										<div class="freight">
											<dt>配送:</dt>
											<dd>
												<div class="address"></div>
												<div class="by">包邮,</div>
												<span class="sale_ad_txt">24小时发货</span>
											</dd>
										</div>
									</div>
									<div class="J-other">
										<span class="onr">颜色:</span>
										<span class="color_wraper">
											<ul>
												<li class="cur">
													<a title="黄色">
														<img src="${this.res[i].img}" alt="" width="20px";height="20px" style="vertical-align:middle;">
														<span>黄色</span>
													</a>
												</li>
											</ul>
										</span>
									</div>
									<div class="number clearfix">
										<span class="onr">数量:</span>
										<span class="onl">
											<p >
												<i class="no">-</i>
												<input type="text" name="amount" class="num" value="1" min="1" autocomplete="off">
												<i class="increase">+</i>
											</p>
										</span>
									</div>
									<div class="submit-go clearfix" id="J-mini-btn">
										<a  class="btn kuai">立即购买</a>
										<a  class="btn btr man">加入购物车</a>
									</div>
								</div>
							</div>
						</div>
				`
				this.xuan.innerHTML = str;
				this.zhang = JSON.parse(localStorage.getItem("cun"));
				this.date();
				this.duibia();
				this.fangda();
				break;
			}
		}
	}
	fangda() {
		this.box1 = document.getElementsByClassName("box1")[0];
		this.BOX = document.getElementsByClassName("BOX")[0];
		this.BOX2 = document.getElementsByClassName("BOX2")[0];
		this.BOXimg = document.getElementsByClassName("BOXimg")[0];
		var _this = this;
		this.BOX.onmousemove = function (e) {
			_this.xishu = (_this.BOX.offsetWidth - _this.box1.offsetWidth) / (620 - 310);
			var mouseX = e.clientX;
			var mouseY = e.clientY;
			_this.x = _this.BOX.offsetLeft;
			_this.y = _this.BOX.offsetTop;
			_this.box1.style.display = "block";
			_this.BOX2.style.display = "block";
			_this.move()
		}
		this.BOX.onmouseleave = function () {
			document.onmousemove = null;
			_this.box1.style.display = "none";
			_this.BOX2.style.display = "none";
		}
	}
	move() {
		var _this = this;
		document.onmousemove = function (e) {
			var moveX = e.clientX;
			var moveY = e.clientY;
			var resultX = moveX - _this.x - _this.box1.offsetWidth / 2;
			var resultY = moveY - _this.y - _this.box1.offsetHeight / 2;
			if (resultX < 0) {
				resultX = 0;

			} else if (resultX >= _this.BOX.offsetWidth - _this.box1.offsetWidth) {
				resultX = _this.BOX.offsetWidth - _this.box1.offsetWidth;
			}
			if (resultY < 0) {
				resultY = 0;

			} else if (resultY >= _this.BOX.offsetHeight - _this.box1.offsetHeight) {
				resultY = _this.BOX.offsetHeight - _this.box1.offsetHeight;
			}
			_this.box1.style.left = resultX + "px";
			_this.box1.style.top = resultY + "px";
			_this.BOXimg.style.left = -resultX / _this.xishu + "px";
			_this.BOXimg.style.top = -resultY / _this.xishu + "px";
		}
	}
	date() {
		var _this = this;
		this.djs = document.getElementsByClassName("date")[0];
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
			return " " + tians + "天" + parseInt(hour) + "时" + parseInt(fen) + "分" + parseInt(min) + "秒";
		}
		setInterval(function () {
			_this.djs.innerText = da("2020-12-29")
			// console.log(_this.djs)
		}, 1000);

	}
	duibia() {
		var _this = this
		this.jian = document.getElementsByClassName("no")[0];
		this.jia = document.getElementsByClassName("increase")[0];
		this.numa = document.getElementsByClassName("num")[0];
		this.kuai = document.getElementsByClassName("kuai")[0];
		this.man = document.getElementsByClassName("man")[0];
		this.numa.oninput = function () {
			if (_this.numa.value <= 0) {
				_this.numa.value = 1
			}
			if (_this.numa.value >= 99) {
				_this.numa.value = 99
			}
		}
		this.jian.onclick = function () {
			_this.numa.value -= 1;
			if (_this.numa.value <= 0) {
				_this.numa.value = 1
			}
		}
		this.jia.onclick = function () {
			_this.numa.value = 1 + parseInt(_this.numa.value);
			if (_this.numa.value >= 99) {
				_this.numa.value = 99
			}
		}
		// console.log(this.man)
		if (localStorage.getItem("cun")) {
			this.name = JSON.parse(localStorage.getItem("cun")).name;
			this.man.onclick = function () {
				_this.id = JSON.parse(localStorage.getItem("xiangqing"))[0];
				_this.panduan();
				_this.jiajia();
			}
			this.kuai.onclick = function () {
				_this.id = JSON.parse(localStorage.getItem("xiangqing"))[0];
				_this.panduan();
				_this.jiajia();
				window.location.href = 'juanshop.html';
				window.event.returnValue = false;
			}
		}
	}
	panduan() {
		console.log(this.zhang.name)
		this.arr = localStorage.getItem("shops") ? JSON.parse(localStorage.getItem("shops")) : [];
		if (localStorage.getItem("shops")) {
			var s = true;
			for (var i = 0; i < this.arr.length; i++) {
				if (this.arr[i].id == this.id && this.arr[i].name == this.zhang.name) {
					this.arr[i].num = parseInt(this.arr[i].num) + parseInt(this.numa.value);
					s = false;
					break;
				}
			}
			if (s) {
				this.arr.push({
					name: this.zhang.name,
					id: this.id,
					num: parseInt(this.numa.value)
				})
			}
		} else {
			this.arr.push({
				name: this.zhang.name,
				id: this.id,
				num: parseInt(this.numa.value)
			})
		}
		localStorage.setItem("shops", JSON.stringify(this.arr))
		this.biannum.innerText = JSON.parse(localStorage.getItem("shops")).length
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
new xuanran
