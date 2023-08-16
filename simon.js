let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btn=["red","green","purple","yellow"];
let maxLevel=[];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("game started");
        started=true;

        levelUp();
    }
    
})


function levelUp() {
    userSeq=[];
    let point=level++;
    maxLevel.push(point+1);
    console.log(maxLevel);
    h2.innerHTML=`Level ${ level }`;
    let ranIdx=Math.floor(Math.random()*3);
    let randomColor=btn[ranIdx]
   let randomBtn =document.querySelector(`.${randomColor}`);
//    console.log(ranIdx);
//    console.log(randomColor);
//    console.log(randomBtn)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
    
}


function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}




function checkAns(idx) {

    if (userSeq[idx]===gameSeq[idx]) {
        if (userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000)
        }
    
    } else {
        let max=Math.max(...maxLevel);
        console.log(max);
        h2.innerHTML = `Game Over! Press any key to start.<br> Highest Score ${max}.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn")
for (const btn of allBtn) {
    btn.addEventListener("click",btnPress);
}
 function reset() {
        started=false;
        level=0;
        gameSeq=[];
        userSeq=[];
 }


// highest score check homework