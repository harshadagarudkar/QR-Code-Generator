
//by using onclick method in HTML

/* let input=document.getElementById("inp")
 let img=document.getElementById("img")

 function myfun(){
 let value=input.value;

 if(value){
     img.style.border="2px solid silver";
     img.style.padding="8px";
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`
}
}*/


//using add event listner

let input=document.getElementById("inp");
let img=document.getElementById("img");
let button=document.getElementById("btn");


let abc=button.addEventListener ("click",function(){
let value=input.value;

if(value){
    img.style.border="2px solid silver";
    img.style.padding="8px";
    img.src=`https:api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
}

})



