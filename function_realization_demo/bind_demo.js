
Function.prototype.mybind = function(context){
    if(typeof this != "function"){
        throw new Error(this+"not a function");
    }
    var self = this;
    var args = [];
    for(var i = 1;i<arguments.length;i++){
        args.push(arguments[i]);
    }
    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    fbound.prototype = Object.create(self.prototype);
    //返回的函数不仅要和 被调函数的函数体相同，也要继承人家的原型链
    return fbound;
    // return function(){
    //     var bindArgs = Array.prototype.slice.call(arguments);
    //     self.apply(context,args.concat(bindArgs))
    // }
}