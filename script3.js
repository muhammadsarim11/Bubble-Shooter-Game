var timer = 30;
let score = 0;  
var hit;


function makeBubble(){
    
let clutter = "";

for(var i = 1; i<=175; i++ ){
   let random = Math.floor(Math.random()*10)
    clutter +=   `<div class="bubble">${random}</div>`;

}

document.querySelector(".pbtm").innerHTML = clutter;

}
function runTimer(){

  let timeint =  setInterval(function () {

        if( timer>0){
         
        timer--;
        document.querySelector("#timerval").textContent = timer;   
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbotm").innerHTML = `<h1>Game Over <br> Your Score: ${score}</h1`;
        }
},1000);
}
function  getNewhit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent= (hit)
}
function runScore(){
score += 10; 
document.querySelector("#scoreval").textContent = score;

}



let bot = document.querySelector("#pbotm")
bot.addEventListener("click",function (dets){
   let clickednum = Number (dets.target.textContent);
if(clickednum===hit){
    runScore();
    makeBubble();
    getNewhit();
}

})





runTimer();
makeBubble();
getNewhit();