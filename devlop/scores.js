var scorelist=document.querySelector(".scoreslist");
var s=0;


// creates a loop to grab items from local storage and display scores
for (i = 0; i < localStorage.length; i++) {
   var x = localStorage.key(i);
   var z=localStorage.getItem(x);
   var y=JSON.parse(x);
    var score=document.createElement("li");
    score.textContent=y + " - " + z;
    scorelist.appendChild(score);
  };


function scoresWipe(){
localStorage.clear();
while( scorelist.firstChild ){
    scorelist.removeChild( scorelist.firstChild );
  }
};

document.querySelector(".clearScores").addEventListener("click",scoresWipe);