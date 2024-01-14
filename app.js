let object = ["rock", "paper", "scissors"];

let rand = () =>{
    let i = Math.random()*3;
    return Math.floor(i);
}


let  y = document.querySelector("#yourScore");
let  c = document.querySelector("#compScore");
let yscore = 0;
let cscore = 0;
let res = document.querySelector(".result");
let h1 = document.querySelector("h1");
let rock = document.querySelector("#rock");
let paper= document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click",()=>{
    let choice = object[rand()];
    console.log(choice);
    if(choice== "scissors"){
        yscore ++;
        console.log("y",yscore);
        y.innerHTML = yscore;
    }
    else if(choice =="rock"){}

    else{
    cscore ++;
    console.log("c",cscore);
    c.innerHTML = cscore;
    }
    h1.innerHTML = "Rock Paper Scissor";
});

paper.addEventListener("click",()=>{
    let choice = object[rand()];
    console.log(choice);

    if(choice == "rock"){
        yscore ++;
        y.innerHTML = yscore;
        console.log("y",yscore);
    }
    else if(choice =="paper"){}
    else{
        cscore ++;
    c.innerHTML = cscore;
    console.log("c",cscore);
    }
    h1.innerHTML = "Rock Paper Scissor";

});

scissors.addEventListener("click",()=>{
    let choice = object[rand()];
    console.log(choice);

    if(choice == "paper"){
     yscore ++;
        y.innerHTML = yscore;
        console.log("y",yscore);
    }
    else if(choice =="scissors"){}
    else{
    cscore ++;
    c.innerHTML = cscore;
    console.log("c",cscore);
    }
    h1.innerHTML = "Rock Paper Scissor";

});

res.addEventListener("click",()=>{
    if(yscore > cscore){
        h1.innerText = "You are the Winner."
    }
    else if(yscore == cscore){
        h1.innerText = "It is a draw";
    }
    else{
        h1.innerText = " Computer is the Winner.";
    }
    y.innerHTML = 0;
    c.innerHTML = 0;
});
