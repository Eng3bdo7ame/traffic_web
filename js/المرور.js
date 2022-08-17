let menu=document.querySelector("#menu");

document.getElementById("pm1").onmouseenter=function(){
  menu.style.display="block";
}
document.getElementById("pm1").onmouseleave=function(){
    menu.style.display="none";
  }
  document.querySelector(".arm").onmouseenter=function(){
    menu.style.display="block";
  }
//   end title
// startform
let form=document.querySelector(".login-form");
document.getElementById("signin").onclick =function(){
   
        form.style.display="block";
        document.getElementById("ly").style.display="block";
    
  
}
document.getElementById("cancel").onclick =function(){
     setTimeout(() => {
         
         form.style.display="none";
         document.getElementById("ly").style.display="none";
     }, 300);
    
  
}
let bt1=document.getElementById('b1');

bt1.addEventListener("click",function(){
    
    setTimeout( ()=>{
        window.location="html/الاستعلامات.html";
    },500);
});

let bt2=document.getElementById('b2');

bt2.addEventListener("click",function(){
    
    setTimeout( ()=>{
        window.location="html/الاستعلامات.html";
    },500);
});

let bt3=document.getElementById('b3');

bt3.addEventListener("click",function(){
    
    setTimeout( ()=>{
        window.location="html/الدفع.html";
    },500);
});
let bt4=document.getElementById('b4');
bt4.addEventListener("click",function(){
   
    setTimeout( ()=>{
        window.location="html/التظلمات.html";
    },500);
});
let bt5=document.getElementById('b5');
bt5 .addEventListener("click",function(){
   
    setTimeout( ()=>{
        window.location="html/متابعة-الطلبات.html";
    },500);
});

let textor =document.querySelector('#txt')
textor.addEventListener("click",function(){
    
    setTimeout( ()=>{
        window.location="html/تقديمات-الاعضاء.html";
    },200);
});

