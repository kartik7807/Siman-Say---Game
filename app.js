let gameseq=[];
let userseq=[];

let btns=["red","yellow","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }),1000;

}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    }),1000;

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    console.log(gameseq);
    btnFlash(ranBtn);
}

function checkAns(idx){
    // console.log("current level",level);
  
    if (gameseq[idx]===userseq[idx]){
        if(gameseq.length===userseq.length){
            setTimeout(levelup,2000);
        }

    }else{
        h2.innerHTML=`Game over ! your level is<b> ${level}<b> <br>
        Press any key to start AGAIN`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        }),500;
        gamereset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click", btnPress);
}


function gamereset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}