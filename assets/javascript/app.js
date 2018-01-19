 //variables=====// format into objects?======================================

var questions = ["Who gave Trunks his sword?", //0
        "Who is the first character to reach Super Saiyan level 2?", //1
        "Which fight from the series holds the title of 'Longest Fight in Anime History'?", //2
        "One minute in spent in the Hyperbolic Time Chamber is equivalent to how much time on Earth?", //3
        "What is Yamcha's actual profession?", //4
        "How many villians has Goku killed throughtout DragonBall Z?", //5
        "What are the real names of Androids 17 and 18?"]; //6

var answers = [["Supreme Kai", "King Vegeta", "Tapion", "Gohan"], //0
        ["Vegeta", "Gohan", "Goku", "Trunks"], //1
        ["Gotenks vs. Buu", "Trunks vs. the Androids", "Goku vs. Vegeta", "Goku vs. Freiza"], //2
        ["6 hours, 5 minutes", "24 hours", "1 week", "1 year"], //3
        ["Bounty Hunter", "Baseball Player", "Bandit", "Model"], //4
        ["none", "5", "2", "10"], //5
        ["Jason and Sara", "Sapphire and Pearl", "Red and Blue", "Lapis and Lazuli"]]; // 6

var correctAnswers = [answers[0][2], answers[1][1], answers[2][3], answers[3][0], answers[4][1], answers[5][2], answers[6][3]];

var images = []; //
var timer = 30;
var clock;
var clockRunning; //controls setInterval
var startScreen;



var questionCounter = 0; //keeps track of total questions 
var answerChoice;
var correctAnswer; 
var correctCount = 0; //# correct
var wrongCount = 0; //picked the wrong answer
var timeUpCount = 0; // not answered in time


$(document).ready(function() {
 //functions=======================================================================
    function startingScreen() {
        $("#answers").hide();
        $("#question").show();
        $("#question").html("Click Button to Start!");
        //$("#answers").html("<button class='btn btn-primary' style='font-size: 100px; margin: 30px'>Click Me</button>");
        clockRunning = false;
    }
    
    
    function startGame() {
        $("#startButton").hide();
        $("#answers").show();
        timerStart();
        questionShow();
        //console.log(answers[questionCounter]);
    }

    function questionShow() {
        $("#question").html(questions[questionCounter]);
        console.log(questions[questionCounter]);
        $("#answer0").html(answers[questionCounter][0]);
        $("#answer1").html(answers[questionCounter][1]);
        $("#answer2").html(answers[questionCounter][2]);
        $("#answer3").html(answers[questionCounter][3]);
        console.log(answers[questionCounter]);
        console.log(correctAnswer);
        console.log(correctCount, wrongCount, timeUpCount);
    }

    function timerStart() {   
         if(!clockRunning) {
            timer = 30;
            clock = setInterval(countDown, 1000);
            //$("#timer").html(timer);  
            clockRunning = true;
            }
        }
    
    
    
    function countDown() {
        if(timer === 0) {
            clearInterval(clock);
            timesUp();
            //alert("Times UP!"); //change later
            timeUpCount++;
        } else if(timer > 0) {
          timer--; 
          $("#timer").html(timer); 
        }
    }

   
    function evalChoice() {
        clearInterval(clock);
        
        
      switch (questionCounter) {
            case 0:
                correctAnswer = 2;
                break;
            case 1:
                correctAnswer = 1;
                break;
            case 2:
                correctAnswer = 3;
                break;
            case 3:
                correctAnswer = 0;
                break;
            case 4:
                correctAnswer = 1;
                break;
            case 5:
                correctAnswer = 2;
                break;
            case 6:
                correctAnswer = 3;
        } 

        console.log(correctAnswer);
        if(answerChoice === correctAnswer) {
            $("#answers").hide();
            $("#question").hide();
            correctPage();
            setTimeout(nextQuestion, 2000);
        } else {
            $("#answers").hide();
            $("#question").hide();
            wrongPage();
            setTimeout(nextQuestion, 2000);
        }
    }

    
    
    
    
    function timesUp() {
        $("#answers").hide();
        $("#question").hide();
        $("#timeUp").show();
        $("#noAnswer").html(correctAnswers[questionCounter]);
        questionCounter++;
        timeUpCount++;
        clockRunning = false;
        setTimeout(nextQuestion, 2000);
    }

    function wrongPage() {
        $("#wrong").show();
        $("#badAnswer").html(correctAnswers[questionCounter]);
        questionCounter++;
        wrongCount++;
        clockRunning = false;
    }

    function correctPage() {
        $("#correct").show();
        $("#goodAnswer").html(correctAnswers[questionCounter]);
        questionCounter++;
        correctCount++;
        clockRunning = false;
    }

    function nextQuestion() {
        
        $("#correct").hide();
        $("#wrong").hide();
        $("#timeUp").hide();
        if(questionCounter === 7) {
            results();
        } else {
            console.log(questionCounter);
            $("#question").show();
            $("#answers").show();
            questionShow();
            timerStart();
        }
    }

    function results() {

        $("#results").show();
        $("#result1").html(correctCount);
        $("#result2").html(wrongCount);
        $("#result3").html(timeUpCount);
    }

    // buttons=====================================================
    $("#startButton").click(startGame);

    $("#reset").on("click", function() {
        $("#results").hide();
        $("#startButton").show();
        questionCounter = 0;
        correctCount = 0;
        wrongCount = 0;
        timeUpCount = 0;
        startingScreen();

    });

    $("#answer0").on("click", function() {
        answerChoice = 0;
        evalChoice();
    });

    $("#answer1").on("click", function() {
        answerChoice = 1;
        evalChoice();
    });

    $("#answer2").on("click", function() {
        answerChoice = 2;
        evalChoice();
    });

    $("#answer3").on("click", function() {
        answerChoice = 3;
        evalChoice();
    });

    $("#reset").on("click", function() {
        $("#results").hide();
        $("#startButton").show();
        questionCounter = 0;
        correctCount = 0;
        wrongCount = 0;
        timeUpCount = 0;
        startingScreen();
    })
          
    startingScreen();           
     
       
});
    
    
 
        
