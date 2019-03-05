//NO.1
//判断是否是闰年
function isLeapyear(year){
    if(year%4 == 0 && year%100 != 0 || year%400 == 0){
        console.log(year+"是闰年")
    }else{
        console.log(year+"不是闰年")
    }
}
//NO.2
//日期格式化输出
function dateToString(date,sep){    
    var newsep = sep || "-";
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = year+newsep+month+newsep+day+" "+hour+newsep+minutes+newsep+seconds;
    console.log(time)
    return time
}
dateToString(new Date())

//NO.3
//字符串转日期
function stringToDate(str,sep){
    if(!sep || !(str && str.length >= 8)){
        console.error("字符串格式错误，请重新输入");
        return;
    }
    var list = str.split(sep);
    if( !(list[0].length==4 && list[1]>0&&list[1]<13 && list[2]>0 && list[2]<32) ){
        console.error("日期格式错误！不能解析");
        return;
    }
    console.log(new Date(str))
    return new Date(str);
}
stringToDate("2018-4-5","-")

//NO.4
//获得N天以后的日期(string/date)
function getAfterDay(n){
    var now = new Date();
    now.setDate( now.getDate()+n );
    return date2string(now);
}