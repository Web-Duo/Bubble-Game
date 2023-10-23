function Makebuble(){
    var bbl = "";
for( var i = 1; i<=78; i++){
    var rn =Number(Math.floor(Math.random()*10))  
    bbl += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".playarea").innerHTML = bbl;
}
var timer = 60
var score = 0
var hrn = 0
function Timernum (){
   var stimer = setInterval(function(){
        if(timer > 0){
            timer--;
        }
        else{
            clearInterval(stimer)
            document.querySelector(".playarea").innerHTML = `<h1> GAMEOVER  SCORE : ${ score } </h1>`
        }
        document.querySelector("#time").textContent = timer;
    },1000)
}
function Hitnum(){
    hrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hrn;
}

function Scorenum(){
  score += 10
    document.querySelector("#sc").textContent = score
}


document.querySelector(".playarea").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent)
    if(clickednum === hrn){
        Scorenum();
        Hitnum();
        Makebuble()
    }
})

Makebuble()
Timernum();
Hitnum();

