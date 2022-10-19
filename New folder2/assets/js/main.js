let saveBtn = document.getElementById("save");
let boxX = document.getElementById("boxWidth"); 
let boxY = document.getElementById("boxHeight"); 
let ballXY = document.getElementById("ballWidthAndHeight");
let ball = document.querySelector('.ball');
let box = document.querySelector('.box');
let step = document.getElementById("step");
let step2 = 10;
let boxcolor = document.getElementById("boxColor");
let ballcolor = document.getElementById("ballColor");
let reset = document.getElementById("reset");

 upgradee();

 

function upgradee() {
    ball.style.left = (box.clientWidth - ball.clientWidth) / 2 +'px'
    ball.style.top = (box.clientHeight - ball.clientHeight) / 2 +'px'
}

reset.addEventListener("click",function resetBall(){
    ball.style.left = (box.clientWidth - ball.clientWidth) / 2 +'px'
    ball.style.top = (box.clientHeight - ball.clientHeight) / 2 +'px'
   
})



saveBtn.addEventListener("click",function setmetod()

{
    step2 = step.value;
    box.style.width =boxX.value + "px";
    box.style.height=boxY.value + "px";
    box.style.background = boxcolor.value;
    ball.style.width=ballXY.value + "px";
    ball.style.height=ballXY.value + "px";
    ball.style.background=ballcolor.value;
}


)



document.body.addEventListener('keydown',e=>{
    if (e.key == 'ArrowUp') {
        //    if(ball.style.top >= "10px"){
        //     console.log(ball.style.top);
        //     ball.style.top = parseInt(ball.style.top) - Number(step2) +'px';
        //    }
            
        if(parseInt(ball.style.top) > 0){
            console.log(ball.style.top);
            ball.style.top = parseInt(ball.style.top) - Number(step2) +'px';
           }
       
    }else if(e.key == 'ArrowLeft'){
           if(parseInt(ball.style.left) > 0){
         
            ball.style.left = parseInt(ball.style.left) - Number(step2) +'px';
           }
           
        
       
    }else if(e.key == 'ArrowRight'){
           if(parseInt(ball.style.left) < box.clientWidth - ball.clientWidth){
          
            ball.style.left = parseInt(ball.style.left) + Number(step2) +'px';
           }
           
       
    }else if(e.key == 'ArrowDown'){
        if(parseInt(ball.style.top) < box.clientHeight - ball.clientHeight){
            console.log(ball.style.top);
            ball.style.top = parseInt(ball.style.top) + Number(step2) +'px';
        }
            
           
            
        
       
    }
})