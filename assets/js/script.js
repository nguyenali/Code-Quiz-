
var questions = [
    {
        title: "The Array elements, which are the value stored in an array, are enclosed within ___."
        choices: ["curly brackets", "parenthesis", "square brackets", "quotes"],
        answer: "square brackets"
    },
    {
        title: "In order to round the number 4.13 to the nearest whole number,the method used would be ____."
        choices: ["math.max()", "math.ceil()", "math.floor()", "math.sqrt()"],
        answer: "math.floor"
    },
    {
        title: "To make a comment in javascript without interfering with the program running, use___."
        choices: ["//", "===", "*--->", "||"],
        answer: "//"
    },
    {
        title: "What statemnt is used to find the target element, selectors, attributes in a document object in the browser"
        choices: ["document.querySelector()", "document.addEventListner()", "document.createElement()", "document.textcontent()"],
        answer: "document.querySelector"
    }


];

//setting the numerical variables for the functions.. scores and timers.. 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

    //start quiz

    function start() {

        timeLeft = 75;
        document.getElementById("timeLeft").innerHTML = timeLeft;
    
        timer = setInterval(function() {
            timeLeft--;
            document.getElementById("timeLeft").innerHTML = timeLeft;
            //proceed to end the game function when timer is below 0 at any time
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame(); 
            }
        }, 1000);
    
        next();
    }
    
//stop the timer to end the game 
function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}




    $(document).on('click','.answer', function () {
        if (this.innerText.slice(3,this.innerText.length) === questions[curentQuestion].answer){
        } else {
            errorSound();
            timeCount -= 15;
            if (timeCount < 0) {
                time.text(0);
                final.text(0);
            }
        }
        curentQuestion++;
        nextQuestion(curentQuestion);
    });
    startBtn.on('click', function () {
        startQuiz();
        interval = setInterval(function () {
            if (timeCount <= 0) {
                timeCount = 0;
                return
            }
            timeCount--;
            time.text(timeCount);
        }, 1000)
    });

    //end start quiz


    //finish

    finalSubmit.on('click', function () {
        if (timeCount < 0) {
            timeCount = 0
        }
        if (finalInput.val()){
            historyArray.push({name: finalInput.val(), score: timeCount});
            finalInput.val('');
            localStorage.setItem('score', JSON.stringify(historyArray));
            history.addClass('active');
            getHistory();
        }
        end.removeClass('active');
        start.removeClass('fade');
        curentQuestion = 0;
        time.text(0);
        timeCount = questions.length * 15;
    });
