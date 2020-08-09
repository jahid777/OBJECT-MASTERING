function doSomething(){
    console.log(3333);
}
console.log(2222);
setTimeout(doSomething, 2000);
console.log(4444);

// //setTimeout with function
console.log(2222);
setTimeout(function(){
    console.log("im comming")},2000);
console.log(3333);

//setTimeout with arrow
console.log(2222);
setTimeout(() =>{
    console.log("see you later")},3000);
console.log(3333);    

//setInterval 
setInterval(function(){
    console.log("do it again")},2000);