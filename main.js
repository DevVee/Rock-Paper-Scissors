const randomNum = Math.random();
const playerMove = "";

const rock = document.querySelector('.rock');
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const stats = document.querySelector(".stats");
const resetBtn = document.querySelector('.resetBtn');



let gameresult;

var wins = 0;
var losses = 0;
var ties = 0;






function PickComputerMove(){

    let computerMove = '';
    const randomNum = Math.random();

    if (randomNum >= 0 && randomNum < 1 / 3) {
        computerMove = "rock";
    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computerMove = "paper";
    } else if(randomNum >= 2 / 3 && randomNum < 1){
        computerMove = "scissors";
}
    return computerMove;
}

rock.onclick = function(){
   
    playerMove === "rock";

    const computerMove = PickComputerMove();

    if(computerMove === "paper"){

        losses++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        
        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand"></i>';

        

    } else if (computerMove === "scissors"){

        wins++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        
        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';

    } else if(computerMove === "rock"){
        ties++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';

        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}


}

paper.onclick = function(){
   
    playerMove === "paper";

    const computerMove = PickComputerMove();

    if(computerMove === "paper"){

        ties++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand"></i>';
        
        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand"></i>';

    } else if (computerMove === "scissors"){

        losses++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand"></i>';
        
        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';

    } else if(computerMove === "rock"){
        ties++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand"></i>';

        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}


}

scissors.onclick = function(){
   
    playerMove === "scissors";

    const computerMove = PickComputerMove();

    if(computerMove === "paper"){

        ties++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
        
        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand"></i>';

    } else if (computerMove === "scissors"){

        losses++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
        
        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';

    } else if(computerMove === "rock"){
        ties++;

        const stats = document.querySelector(".stats");
        stats.innerHTML = 'Wins: '+wins+'<br> Losses: '+losses+'<br>Ties: '+ties;

        const icon1 = document.querySelector(".icon1");
        icon1.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';

        const icon2 = document.querySelector(".icon2");
        icon2.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}


}


resetBtn.onclick = function(){
    location.reload();
}