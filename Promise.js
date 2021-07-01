function result(value){
    console.log(value)
}
var promise = new Promise(function(myresolve,myreject){
    let x = 0;
    if(x==0){
        myresolve("ok")
    }
    else{
        myreject("Error")
    }
});
promise.then(
    function(value){
        result(value);
    },
    function(error){
        result(error);
    }
)

//promise second program
var promise = new Promise(function(Resolve,Reject){
    setTimeout(function(){Resolve("Node js training")},4000)
})
promise.then(function(value){
    console.log(value);
})