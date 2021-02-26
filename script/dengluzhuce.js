
class dengzhu {
	constructor() {
		//获取本地存储的值
		this.value = localStorage.getItem("zhuceid");
		//获取节点
		this.title = document.getElementsByClassName("title")[0];
		this.login = document.getElementsByClassName("login-center")[0];
		this.arr = localStorage.getItem("shujuku") ? JSON.parse(localStorage.getItem("shujuku")) : [];
		this.btn = localStorage.getItem("shujuku") ? JSON.parse(localStorage.getItem("shujuku")) : [];
		this.obj = {};
		this.b = "";
		this.c = "";
		this.d = "";
		this.e = "";
		this.int();
	}
	int() {
		var _this = this;
		//两种走法
		if (this.value == 1) {
			this.zhucexuan();
		};
		if (this.value == 0) {
			this.dengluxuan();
		};
		/* 	this.input1=document.getElementsByName("email")[0];
			this.shouji=document.getElementsByClassName("frist")[0];
			this.password=document.getElementById("password");
			this.mima=document.getElementsByClassName("two")[0];
			this.cha=document.getElementsByClassName("msgerror")[0];
			this.cha2=document.getElementsByClassName("error")[0];
			this.queren=document.getElementById("confirm_password")
			this.cha3=document.getElementsByClassName("tree")[0];
			this.cha4=document.getElementsByClassName("errora")[0]
			this.zenze(this.input1,this.shouji); */
	}
	dengluxuan() {
		var _this = this;
		var str = `<span class="hd">老用户登录</span>
						<span class="tips">尊敬的卷皮用户，欢迎您回来!</span>
						<p class="other">
							还没账号？
							<a  rel="nofollow" class="nofollow">立即去注册</a>
						</p>
			`
		var str1 = `
			<ul class="login_list clearfix">
							<li class="active">
								<label for="" class="normal"></label>
								<div class="box_border">
									<div class="user_img"></div>
									<input type="text" name="account" id="acount" value class="normal-input" placeholder="手机号"/>
									<div class="dele_info_img" ></div>
								</div>
							</li>
							<li class="clear">
								<label for="" class="normal"></label>
								<div class="box_border">
									<div class="code_img"></div>
									<input type="password" name="password" id="inter_code" class="normal-input" placeholder="密码"/>
								</div>	
							</li>
							<li class="chex-d">
								<label class="normal"></label>
								<div class="chex">
									<span>
										<lable>
											<input type="checkbox" name="auto" checked="checked"/>
											两周内免登录
										</lable>
									</span>
									<a href="" class="forget">忘记密码？</a>
								</div>
							</li>
							<li>
								<label class="normal"></label>
								<div class="btn">
									<input type="submit" class="subm sub" value="登录" />
								</div>
							</li>
						</ul>
						<div class="login-l-img">
							<img src="image/login-bj-ad.png" alt="">
						</div>
			`
		this.title.innerHTML = str;
		this.login.innerHTML = str1;
		this.a = document.getElementsByClassName("nofollow")[0];
		this.input1 = document.getElementById("acount");
		this.password1 = document.getElementById("inter_code");
		this.cun = document.getElementsByClassName("subm")[0];
		this.deng();
		//点击保存到本地
		this.a.onclick = function () {
			localStorage.setItem("zhuceid", 1)
			_this.zhucexuan();
		}

	}
	//正则判断
	deng() {
		var _this = this;
		var text = /^1[3,5,8,9]\d{9}$/;
		this.input1.onblur = function () {
			if (text.test(_this.input1.value)) {
				_this.denga(
					function () {
						var rra = _this.input1.value
						return rra;
					}
				);
			}
		}
		this.password1.onblur = function () {
			_this.dengb(
				function () {
					var rra = _this.password1.value
					return rra;
				}
			);
		}
		this.cun.onclick = function () {
			_this.dengzong(function (i) {
				localStorage.setItem("cun", i)
				window.location.href = 'index.html';
				window.event.returnValue = false;
			}
			)
		}
	}
	denga(a) {
		this.obj.name = a();
		this.dengzong();
	}
	dengb(a) {
		this.obj.password = a();
		this.dengzong();
	}
	dengzong(a) {
		if (a) {
			if (this.arr.length >= 1 && this.arr) {
				for (let i = 0; i < this.arr.length; i++) {
					if (this.arr[i].name == this.obj.name && this.arr[i].password == this.obj.password) {
						a(JSON.stringify(this.obj))
					}
				}
			}
		}
	}
	zhucexuan() {
		var _this = this;
		var str = `<span class="hd">新用户注册</span>
					<span class="tips">注册卷皮网，赢取积分换好礼!</span>
					<p class="other">
						已有账号，
						<a  rel="nofollow" class="nofollow">立即登录</a>
					</p> `
		var str1 = `
			<ul class="clearfix login_list">
				<li class="error_box">
					<label for="" class="normal">手机号码：</label>
					<input type="text" name="email" class="normal-input" />
					<div class="error-box" id="email_warn" warn="请输入11位手机号" >
						<strong class="msgerror" style="background-position:0px 30px"></strong>
						<p class="msg_error frist" style="color:gray;">请输入手机号码</p>
					</div>
					<span class="otherregister">
						
						
					</span>
				</li>
				<li class="set-password">
						<label class="normal">创建密码：</label>
						<input type="password" class="normal-input" id="password" name="password" />
						<div class="error-box" id="password_warn" warn="6~16个数字、字母或符号,字母区分大小写">
							<strong class="error "style="background-position:0px 30px" ></strong>
							<p class="msg_error two" style="color:gray;">请输入6~16位密码</p>
						</div>
				</li>
				<li>
					<label class="normal">确认密码：</label>
					<input type="password" class="normal-input" id="confirm_password" name="confirm_password" />
					<div class="error-box" id="confirm_password_warn" warn="请再次输入密码">
						<strong class="errora" style="background-position:0px 30px"></strong>
						<p class="msg_error tree" style="color:gray;">请输入确认密码</p>
					</div>
				</li>
				<li>
					<label class="normal"></label>
					<div class="btn">
						<input type="submit" class="sub" value="注册" />
					</div>
				</li>
				<li class="chex-d">
					<label class="normal" style="width: 16px;"></label>
					<div class="chex" style="width: 378px;">
						<span>
							<label>
								<input type="checkbox" class="ck" name="protocol" checked />
								<a href="">《卷皮用户协议》</a>
							</label>
						</span>
					</div>
				</li>
			</ul>
			<div class="login-l-img">
				<img src="image/login-bj-ad.png" alt="">
			</div>
		`
		this.title.innerHTML = str;
		this.login.innerHTML = str1;
		this.a = document.getElementsByClassName("nofollow")[0];
		this.input1 = document.getElementsByName("email")[0];
		this.shouji = document.getElementsByClassName("frist")[0];
		this.password = document.getElementById("password");
		this.mima = document.getElementsByClassName("two")[0];
		this.cha = document.getElementsByClassName("msgerror")[0];
		this.cha2 = document.getElementsByClassName("error")[0];
		this.queren = document.getElementById("confirm_password")
		this.cha3 = document.getElementsByClassName("tree")[0];
		this.cha4 = document.getElementsByClassName("errora")[0];
		this.sub = document.getElementsByClassName("sub")[0];
		this.che = document.getElementsByClassName("ck")[0];
		this.zenze(this.input1, this.shouji);
		this.a.onclick = function () {
			localStorage.setItem("zhuceid", 0)
			_this.dengluxuan();
		}
	}
	zenze(a, b) {
		var _this = this;
		var text = /^1[3,5,8,9]\d{9}$/;
		this.input1.onblur = function () {
			if (text.test(a.value)) {
				b.style.display = "none";
				_this.cha.style.backgroundPositionY = "-19" + "px";
				_this.cha.style.backgroundPositionX = "-40" + "px";
				_this.add(
					function () {
						var rra = [];
						rra[0] = a.value
						rra[1] = parseInt(_this.cha.style.backgroundPositionX)
						return rra
					}
				);
			} else {
				b.style.display = "block";
				b.style.color = "red"
				b.innerText = "请输入正确的手机号";
				_this.cha.style.backgroundPositionY = "-19" + "px";
				_this.cha.style.backgroundPositionX = "0" + "px";
				_this.add(
					function () {
						var rra = [];
						rra[0] = a.value
						rra[1] = parseInt(_this.cha.style.backgroundPositionX)
						return rra
					}
				);
			}
			if (a.value == "") {
				b.innerText = "手机号不能为空";
				b.style.display = "block";
				_this.cha.style.backgroundPositionY = "-19" + "px";
				_this.cha.style.backgroundPositionX = "0" + "px";
				_this.add(
					function () {
						var rra = [];
						rra[0] = a.value
						rra[1] = parseInt(_this.cha.style.backgroundPositionX)
						return rra
					}
				);
			}
			_this.adc();
		}
		var text1 = /^\w{6,16}$/;
		this.password.onblur = function () {
			if (!text1.test(_this.password.value)) {
				_this.cha2.style.backgroundPositionY = "-19" + "px";
				_this.cha2.style.backgroundPositionX = "0" + "px";
				_this.mima.style.display = "block";
				_this.mima.innerText = "密码格式不正确(需要六位及以上跟英文组合)";
				_this.addc(
					function () {
						var rra = [];
						rra[0] = _this.password.value
						rra[1] = parseInt(_this.cha2.style.backgroundPositionX)
						return rra
					}
				);
			} else {
				_this.cha2.style.backgroundPositionY = "-19" + "px"
				_this.mima.style.display = "none";
				_this.cha2.style.backgroundPositionX = "-40" + "px";
				_this.addc(
					function () {
						var rra = [];
						rra[0] = _this.password.value
						rra[1] = parseInt(_this.cha2.style.backgroundPositionX)
						return rra
					}
				);
			}
			if (_this.password.value == "") {
				_this.cha2.style.backgroundPositionX = "0" + "px";
				_this.cha2.style.backgroundPositionY = "-19" + "px"
				_this.mima.innerText = "密码不能为空";
				_this.mima.style.display = "block";
				_this.mima.style.color = "red";
				_this.addc(
					function () {
						var rra = [];
						rra[0] = _this.password.value
						rra[1] = parseInt(_this.cha2.style.backgroundPositionX)
						return rra
					}
				);
			}
			_this.adc();
		}
		this.queren.onblur = function () {
			if (_this.queren.value == _this.password.value && _this.password.value != "") {
				_this.cha3.style.display = "none";
				_this.cha4.style.backgroundPositionY = "-19" + "px";
				_this.cha4.style.backgroundPositionX = "-40" + "px";
				_this.addd(
					function () {
						var rra = [];
						rra[0] = _this.queren.value
						rra[1] = parseInt(_this.cha4.style.backgroundPositionX)
						return rra
					}
				);
			}
			if (_this.queren.value != _this.password.value && _this.password.value != "") {
				_this.cha3.style.display = "block";
				_this.cha3.innerText = "两次密码输入不一致";
				_this.cha3.style.color = "red";
				_this.cha4.style.backgroundPositionY = "-19" + "px";
				_this.cha4.style.backgroundPositionX = "0" + "px";
				_this.addd(
					function () {
						var rra = [];
						rra[0] = _this.queren.value
						rra[1] = parseInt(_this.cha4.style.backgroundPositionX)
						return rra
					}
				);
			}
			if (_this.queren.value == "") {
				_this.cha3.innerText = "请输入确认密码"
				_this.cha4.style.backgroundPositionY = "30" + "px";
				_this.cha4.style.backgroundPositionX = "0" + "px";
				_this.addd(
					function () {
						var rra = [];
						rra[0] = _this.queren.value
						rra[1] = parseInt(_this.cha4.style.backgroundPositionX)
						return rra
					}
				);
			}
			_this.adc();
		}
		this.sub.onclick = function () {
			_this.adc(function (i) {
				console.log(i)
				localStorage.setItem("shujuku", JSON.stringify(i));
				localStorage.setItem("zhuceid", 1)
				_this.dengluxuan();
			})
		}
	}
	add(a) {
		this.b = a();
		this.obj.name = this.b[0];
		this.adc();
	}
	addc(a) {
		this.c = a();
		this.obj.password = this.c[0];
		this.adc();
	}
	addd(a) {
		this.d = a();

		this.obj.passwordtwo = this.d[0];
		this.adc();
	}
	adc(a) {
		if (this.c[0] != this.d[0] && this.password.value != "") {
			this.cha3.style.display = "block";
			this.cha3.innerText = "两次密码输入不一致";
			this.cha3.style.color = "red";
			this.cha4.style.backgroundPositionY = "-19" + "px";
			this.cha4.style.backgroundPositionX = "0" + "px";
		}
		if (this.c[0] == this.d[0] && this.password.value != "") {
			this.cha3.style.display = "none";
			this.cha4.style.backgroundPositionY = "-19" + "px";
			this.cha4.style.backgroundPositionX = "-40" + "px";
		}
		if (this.b[1] == -40 && this.c[1] == -40 && this.d[1] == -40 && this.che.checked) {
			if (a) {
				if (this.arr.length >= 1) {
					console.log("1")
					var aa = true;
					for (let i = 0; i < this.arr.length; i++) {
						if (this.arr[i].name == this.obj.name) {
							this.shouji.style.display = "block";
							this.shouji.innerText = "用户名重复"
							this.shouji.style.color = "red";
							this.cha.style.backgroundPositionY = "-19" + "px";
							this.cha.style.backgroundPositionX = "0" + "px";
							aa = false;
							break;
						}
					}
					if (aa) {
						this.arr.push(this.obj);
						a(this.arr)
					}
				} else {
					console.log("2")
					this.arr.push(this.obj);
					a(this.arr)
				}
			}
		}

		this.arr = localStorage.getItem("shujuku") ? JSON.parse(localStorage.getItem("shujuku")) : [];
	}
}
new dengzhu;