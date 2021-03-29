var timer=document.querySelector('.timer-count');
var questions=[{
    Q:"What is 6x7",
    ans:[13,27,35,42],
    RightA:"43"
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
    and:[10,15,60,90]
    RightA:"10"
}
];

// timer function
// works but doesnt display.
function timerStart(){
    var sec = 20;
    var timer = setInterval(function(){
        timer.textContent='00:'+sec;
        console.log(sec);
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
};


// timer begins when start button clicked
document.querySelector(".start-button").addEventListener("click", timerStart);