function ge(url, cn, data) {
    //创建空对象
    data = data || {};
    var str = "";
    for (i in data) {
        str += `${i}=${data[i]}&`;
    }
    //当前时间
    var d = new Date;
    //保存json数据
    url = 'http://localhost/juanpi-master/data/shangping.json';
    //创建xhr对象
    var aj = new XMLHttpRequest();
    //get请求,异步
    aj.open("get", url, true);
    //监听状态
    aj.onreadystatechange = function () {
        if (aj.readyState == 4 && aj.status == 200) {
            // console.log(aj.responseText)
            //json类型接收返回值
            cn(aj.responseText)

        } else if (aj.readyState == 4 && aj.status != 200) {
            // console.log(aj.status)
        }
    }
    //发送
    aj.send();
}

function po(url, cn, data) {
    data = data || {};
    var str = "";
    for (i in data) {
        str += `${i}=${data[i]}&`;
    }
    //post请求，异步
    var aja = new XMLHttpRequest();
    aja.open("post", url, true);
    aja.onreadystatechange = function () {
        if (aja.readyState == 4 && aja.status == 200) {
            cn(aja.responseText)
        } else if (aja.readyState == 4 && aja.status != 200) {
            // console.log(aja.status)
        }
    }
    //请求头并且发送
    aja.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    aja.send(str);
}

function jsonp(url, cn, data) {
    data = data || {};
    var str = "";
    for (i in data) {
        str += `${i}=${data[i]}&`;
    }
    // d = new Date;
    // url = url + "?" + str + d.getTime();
    // console.log(url);

    //利用script的src跨域
    var script = document.createElement("script");
    script.src = url;
    //加进去body
    document.body.appendChild(script);
    window[data[data.constum]] = function (res) {
        cn(res)
    }

}