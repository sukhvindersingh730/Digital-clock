const time =document.getElementById("time")
console.log(time)
function time1(){
let date= new Date()
let hour=date.getHours()
let min=date.getMinutes()
let sec=date.getSeconds()
var session=" ";
// if(h>12){
//     h=h-12;
// }
// h=h<10?"0"+h:h;
// m=m<10?"0"+m:m; 
// s=s<10?"0"+s:s;

// if(h>=12){
//     session="PM" ;
// }
// else{
//     session="AM" ;  
// }

time.innerHTML=`${hour} : ${min}  : ${sec}  ${session}  `
setTimeout(time1,1000);
}
