var scorelist=document.querySelector(".scoreslist");
var s=0;
var scores=localStorage.getItem(s);
console.log(scores);

// for(scores>0 && scores<=)


function scoresWipe(){
localStorage.clear();
};

document.querySelector(".clearScores").addEventListener("click",scoresWipe);