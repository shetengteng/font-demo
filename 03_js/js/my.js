/**
 * Created by Administrator on 8/1/2017.
 */
function $(id) {
    return document.getElementById(id);
}

// 返回已经滚动的网页的top和left值
function scroll() {
    // 此处使用null作为判断条件，原因是 pageYOffset可能是0
    // ie9+ 和 其他浏览器
    if(window.pageYOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode = "CSS1Compat") { // 表示声明了DTD ，不支持怪异浏览器，支持火狐等 和 ie678
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    // 剩下的是怪异模式浏览器，没有DTD声明的html文件而可以使用的浏览器，如谷歌
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

function show(obj) { obj.style.display = "block"; }
function hide(obj) { obj.style.display = "none"; }

// 获取浏览器可视区域的大小
function client() {
    // ie9+ 和 最新的浏览器
    if (window.innerHeight != null) {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }else if (document.compatMode == "CSS1Compat") { // 普通浏览器支持
        return {
            height: document.documentElement.clientHeight,
            width: document.documentElement.clientWidth
        }
    }
    // 怪异浏览器支持
    return {
        height: document.body.clientHeight,
        width: document.body.clientWidth
    }
}
