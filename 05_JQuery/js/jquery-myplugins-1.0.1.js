/**
 * Created by Administrator on 8/24/2017.
 */
//在jquery的原型中定义自定义函数

$.fn.setButtonColorRed = function() {
    console.log(this); // 注意这里的this是jquery对象
    this.css("color","red");
}