var scorelist=document.querySelector(".scoreslist");



function scoresWipe(){
localStorage.clear();
};

document.querySelector(".clearScores").addEventListener("click",scoresWipe);