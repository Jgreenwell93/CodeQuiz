var timeDisplay=document.querySelector('.timer-count');
var sec = 20;
var answers = document.querySelectorAll('.answer');
var initials=document.querySelector(".initials");
var submit=document.querySelector(".submit");
var finalScore=document.querySelector(".finalScore");
var gameComplete=false;
// list of questions, answers, and right answers
var questions=[{
    Q:"What is 6x7",
    ans:[13,27,35,42],
    RightA:"42"
},{
    Q:"What is 22+34",
    ans:[34,45,56,69],
    RightA:"56"
},{
    Q:"What is 100-22",
    ans:[68,78,84,92],
    RightA:"78"
},{
    Q:"What is 30 / 3",
    ans:[10,15,60,90],
    RightA:"10"
}
];
var question=document.querySelector(".question");
var answer1=document.querySelector(".answer1");
var answer2=document.querySelector(".answer2");
var answer3=document.querySelector(".answer3");
var answer4=document.querySelector(".answer4");
var answer=document.querySelector(".answer");

// main quiz function
function quiz(event){
    timerStart();
    // removes starting page elements on start
    document.querySelector(".startingPage").style.display='none';
    document.querySelector(".quizPage").style.display='contents';

  var i=0;
  updateText(i);

    // checks clicked answer for correctness
    answers.forEach(function(answer) {
        answer.addEventListener('click', function(event) {
          if(questions[i].RightA == event.target.textContent){
            console.log('Correct!');
            i++;
            console.log(i);
            updateText(i);
            
          } else {
            console.log('Wrong');
            sec-=3;
            i++;
            console.log(i);
            updateText(i);
          };
        });
      });


};

function updateText(i){
    if(i<questions.length){
        // renders questions and answers
    question.textContent=questions[i]["Q"];
    answer1.textContent=questions[i]["ans"][0];
    answer2.textContent=questions[i]["ans"][1];
    answer3.textContent=questions[i]["ans"][2];
    answer4.textContent=questions[i]["ans"][3];

    }else{
        gameOver();
    };
};

// timer function
function timerStart(){
    timeDisplay.textContent='00:'+sec;
    var timer = setInterval(function(){
        timeDisplay.textContent='00:'+sec;
        // console.log(sec);
        if(!gameComplete){
            sec--;
        }
   
        if (sec < 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
};

// performs the end of quiz events
function gameOver(){
    document.querySelector(".quizPage").style.display='none';
    document.querySelector(".finished").style.display='contents';
    finalScore.textContent="Your Score is "+sec;
    gameComplete=true;

};


// timer begins when start button clicked
document.querySelector(".start-button").addEventListener("click", quiz);