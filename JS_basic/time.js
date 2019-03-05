var nowDate = new Date(); //保存的是当前时间
//getYear是获取从1980年开始计算的年份
var year = nowDate.getFullYear();//获取年份
var month = nowDate.getMonth();//获取月份,从0开始的，所以要加1
var date = nowDate.getDate();//获取日期
var hour = nowDate.getHours();//获取小时
var minutes = nowDate.getMinutes();//获取分钟
var seconds = nowDate.getSeconds();//获取秒钟
var millisSeconds = nowDate.getMilliseconds();//获取毫秒
var time = nowDate.getTime();//距离1970年的毫秒数

function date2string(d){
    return d.getFullYear()+"."+(d.getMonth()+1)+"."+d.getDate()+" "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}

setInterval(function(){
    console.log( date2string(new Date()) );
}, 1000);