
var colors=['red','blue','yellow','violet','marron'];
var len=colors.length;

var clickbutton= document.getElementById('button');
var selector=document.querySelector('.color');


clickbutton.addEventListener('click',()=>{
    var num= randomColorGenerator();
    document.body.style.background=colors[num];
    console.log(colors[num]);
    selector.innerHTML=colors[num];
})

function randomColorGenerator(){
    return Math.trunc(Math.random() * len);
}


