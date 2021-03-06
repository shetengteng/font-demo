/**
 * Created by Administrator on 8/9/2017.
 */

// 多个属性的动画，jsonParam是属性以及目标值的封装
function animate(obj,jsonParam,speed,fn) {
    clearInterval(obj.timer);

    obj.timer = window.setInterval(function () {
        var flag = true;
        // 遍历所有属性
        for(var attr in jsonParam) {
            var current = 0;
//                if ("opacity" == attr) {
//                    current = getStyle(obj, attr) * 100;
//                }
            current = parseInt(getStyle(obj, attr));
            var step = ( jsonParam[attr] - current ) / 10;
            // 对属性进行取整操作
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // 判断透明度
            if ("opacity" == attr) {
                // 考虑透明度的兼容性问题
                if ("opacity" in obj.style) {
                    // 支持主流浏览器
                    obj.style.opacity = jsonParam[attr];
                } else {
                    // IE678 支持
                    obj.style.filter = "alpha(opacity = " + jsonParam[attr] * 100 + ")";
                }
            }else if("zIndex" == attr) {
                // 对于z-index需要特别处理，同时直接赋值
                obj.style.zIndex = jsonParam[attr];
            }else {
                obj.style[attr] = current + step + "px";
                if(current != jsonParam[attr]) {
                    // 只要有一个不满足条件的，就是false
                    flag = false;
                }
            }
        }
        // 当所有的属性都达到目标值之后关闭定时器
        if(flag) {
            window.clearInterval(obj.timer);
            if(fn){
                // 执行回调函数
                fn();
            }
        }
    },speed ? speed : 10); // 如果speed没有定义，则是undefined，那么就是false
}

// 返回任一指定的样式 内嵌和外链样式都可以访问，不用使用offsetLeft等形式访问样式
// 前者ie 后者 w3c标准浏览器（null表示没有伪类）
function getStyle(obj,attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[attr];
}
