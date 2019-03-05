//2.0

//1.0
function newPromise1(fn){
    let state = "pending";
    let value = null;//异步函数执行后的结果
    let deferred = [];//异步函数执行后，真正要执行的回调函数
    this.then = function(onFulfilled){
        if(state === "pending"){
            deferred.push(onFulfilled);
            return this;
        }
        onFulfilled(value);
        return this;
    }
    function resolve(newValue){
        state = "fulfilled"//异步完成后将state设置为fulfilled
        value = newValue;
        setTimeout(() =>{
            deferred.forEach((deferred) =>{
                deferred(value);
            });
        },0)
    }
    fn(resolve);
}