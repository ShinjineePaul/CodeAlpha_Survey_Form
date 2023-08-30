const ul1=document.querySelector(".option1");
const ul2=document.querySelector(".option2");
const ul3=document.querySelector(".option3");
const ul4=document.querySelector(".option4");
const ul5=document.querySelector(".option5");

const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const end=document.querySelector(".end");
const btn=document.querySelector(".button");
const hh1=document.getElementById("hh1");

const container=document.querySelector(".container");
ul1.addEventListener("click",function(){
    one.style.display="none";
    two.style.display="block";

})
ul2.addEventListener("click",function(){
    two.style.display="none";
    three.style.display="block";

})
ul3.addEventListener("click",function(){
    three.style.display="none";
    four.style.display="block";

})
ul4.addEventListener("click",function(){
    four.style.display="none";
    five.style.display="block";
})
ul5.addEventListener("click",function(){
    five.style.display="none";
    end.style.display="block";
    hh1.style.display="none";
})