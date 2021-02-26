for (var i = 0; i < 100; i++) {
	if (e.target.tagName == "LI") {
		var c = e.target.getAttribute("goodsid")
		_this.bath[0] = c;
		localStorage.setItem("xiangqing", JSON.stringify(_this.bath))
		window.location.href = 'xiangqingye.html?' + e.target.getAttribute('goodsid');
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