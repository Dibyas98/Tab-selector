let step1=document.getElementById("step-1");
let step2=document.getElementById("step-2");
let step3=document.getElementById("step-3");
let flag=1;
if(step1.addEventListener("click",process1)){

}
else if(step2.addEventListener("click",process2)){

}else if(step3.addEventListener("click",process3)){

}
function process1(){
    step1.style.backgroundColor="transparent";
    document.getElementById("para1").style.display="flex";
    document.getElementById("para2").style.display="none";
    document.getElementById("para3").style.display="none";
    step2.style.backgroundColor="#70a6e8";
    step3.style.backgroundColor="#70a6e8";
   
}
function process2(){
    step2.style.backgroundColor="transparent";
    document.getElementById("para2").style.display="flex";
    document.getElementById("para1").style.display="none";
    document.getElementById("para3").style.display="none";
    step1.style.backgroundColor="#70a6e8";
    step3.style.backgroundColor="#70a6e8";
}
function process3(){
    step3.style.backgroundColor="transparent";
    document.getElementById("para3").style.display="flex";
    document.getElementById("para2").style.display="none";
    document.getElementById("para1").style.display="none";
    step2.style.backgroundColor="#70a6e8";
    step1.style.backgroundColor="#70a6e8";
}

