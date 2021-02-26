// var ipt = document.querySelector('.ipt')
var xuan = document.querySelector('.xuan')
window.onload = function () {
    /* if (!ipt.value) {
        list.innerHTML = ''
        return
    } */

    jsonp({
        url: 'http://localhost/juanpi-master/data/shangping.json',
        type: 'get',
        // data: 'wd=' + ipt.value,
        // data: {'wd':'123'},
        // dataType: 'jsonp'//text json xml jsonp
        jsonp: 'cb',//回调函数的参数
        jsonpCallback: 'hehe',//回调函数名
        success: function (json) {//请求成功执行的回调函数
            // 展示数据
            console.log(1);
            var str = ''
            json.s.forEach(function (item,index) {
                str += `<li num="${index}" goodsid="${item.goodsid}">
                <img src="${item.img}" width="220px"height="220px">
                <p><span style="color:red;">￥${item.price}</span><span style="margin-left:8px;color:#ccc;font-size:14px;"><s>${item.priceold}</s></span></p>
                <P><span  style="font-size:12px;">${item.name}</span><span style="float:right;margin-right:10px;font-size:12px;color:#ccc;">${item.new}</span></p>
            </li>`
            })
            xuan.innerHTML = str
        }
    })
}

function jsonp(options) {
    // 把success添加为全局方法hehe
    window[options.jsonpCallback] = options.success

    // 格式data数据
    var data = ''
    if (typeof options.data === 'string') {
        data = options.data
    }
    if (Object.prototype.toString.call(options.data) === '[object Object]') {
        for (var key in options.data) {
            data += (key + '=' + options.data[key] + '&')
        }
        data = data.substring(0, data.length - 1)
    }

    // 动态添加script标签
    var oScript = document.createElement('script')
    oScript.src = options.url + '?' + options.jsonp + '=' + options.jsonpCallback //+ '&' + data
    // 'http://suggestion.baidu.com/su?cb=hehe&wd='+ipt.value
    document.body.appendChild(oScript)
    // 数据加载完成删除 script 标签
    oScript.onload = function () {
        document.body.removeChild(oScript)
    }
}
