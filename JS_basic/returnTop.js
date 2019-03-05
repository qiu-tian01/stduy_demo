//返回顶部的一个方法

function returnTop(id,length){
    var btn = document.getElementById(id);
    console.log(btn)
    btn.onclick = function () {
        console.log("ok");
        window.scrollY = document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    window.onscroll = function (){
    var scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop >= length){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
    console.log( scrollTop );
    }
}