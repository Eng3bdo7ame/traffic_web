let btn=document.getElementById('bac');

btn.addEventListener("click",function(){
    
    setTimeout( ()=>{
        window.location="../المرور.html";
    },200);
});

let choose1=document.getElementById('chs1');
let choose2=document.getElementById('chs2');
let fca=document.getElementById("fcaid");
let onum=document.getElementById("numb")
choose2.addEventListener("click",function(){
    
   fca.style.display="block";
   onum.style.display="none";
   choose1.addEventListener("click",function(){
    fca.style.display="none";
    onum.style.display="flex";
   })
});