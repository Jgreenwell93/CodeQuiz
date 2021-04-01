var scorelist=document.querySelector(".scoreslist");
var s=0;
var scores=localStorage.getItem(localStorage.value);
console.log(scores);

// creates a loop to grab items from local storage and display scores
function scoreLog(s){
if (s<=localStorage.length) {
var score=scorelist.createElement("li");
score.textContent=localStorage.getItem(s);
scorelist.appendChild(score);
s++;
scoreLog();
}else{
    return;
};
};


function scoresWipe(){
localStorage.clear();
};

document.querySelector(".clearScores").addEventListener("click",scoresWipe);