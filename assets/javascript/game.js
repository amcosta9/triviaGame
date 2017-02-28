//document ready
$(document).ready(function() {


//declare variables

    var questions = [{
        question: "Baymax's motions are modeled after the movements of what animal?",
        choices: ["baby penguins", "baby hippos", "kittens"],
        correct: 0
    }, {
        question: "The look and movement of microbots is based on",
        choices: ["microbacteria", "swarms of ants", "magnets"],
        correct: 1
    }];


    var currentQuestion = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var outOfTimeQuestions = 0;
    var number = 5;
    var intervalId;
    var quizOver = false;
    var question;
    var questionClass;
    var choiceList;
    var numChoices;



// display first question with answer options and a timer counting down
    displayQuestion();
    $(".quizMessage").hide();



// if player picks the correct answer, show a screen with a correct answer! message.
    function game() {

        if (!quizOver) {

            $("li").click(function() {
                stop();
                var value = $("li").index(this);
                console.log(value);
                if (value === questions[currentQuestion].correct) {
                    console.log("clicked right answer!");
                    correctAnswers++;
                }
                else {
                    console.log("clicked wrong answer");
                    incorrectAnswers++;
                };
                nextQuestion();

            });
        };
    };

    function nextQuestion() {
        currentQuestion++;
        //if no questions left, display score
        if (currentQuestion < questions.length) {
            displayQuestion();
        }
        else {
            displayScore();
            quizOver = true;
        };
    };

    function displayScore() {
        $(".result").html("Correct answers: " + correctAnswers + "<br> Incorrect answers: " + incorrectAnswers + "<br>Unanswered Questions: " + outOfTimeQuestions);
    }


    function displayQuestion() {
        //starts 30s timer
        timer();
        question = questions[currentQuestion].question;
        console.log("current question: " + question);
        questionClass = $(".quizContainer").find(".question");
        choiceList = $(".quizContainer").find(".choiceList");
        numChoices = questions[currentQuestion].choices.length;
        console.log("current answer index: " + questions[currentQuestion].correct);

        // Set the questionClass text to the current question (.html instead?)
        $(questionClass).text(question);

        // Remove all current <li> elements (if any)
        $(choiceList).find("li").remove();

        var choice;
        for (i = 0; i < numChoices; i++) {
            choice = questions[currentQuestion].choices[i];
            $("<li>" + choice + "</li>").appendTo(choiceList);
        };
        game();

    }; //end displayQuestion()



//sets interval that runs decrement function 1x per second
    function timer() {
        intervalId = setInterval(decrement, 1000);

    };

    function decrement() {
        number--;
        $(".timeLeft").html("<h3>" + number + "</h3>");
        if (number === 0) {
            stop();
            outOfTimeQuestions++;
            console.log("out of time");
            nextQuestion();
        };
    };

    function stop() {
        clearInterval(intervalId);

    };





});  //end doc ready



//trivia questions

//
// var questions = [{
//     question: "Baymax's motions are modeled after the movements of what animal?",
//     choices: ["baby penguins", "baby hippos", "kittens"],
//     correct: 1
// }, {
//     question: "The look and movement of microbots is based on",
//     choices: ["swarms of ants", "", ""],
//     correct:
// }, {
//     question: "Big Hero 6 was the first collaboration between",
//     choices: ["Marvel and Disney Animation", "", ""],
//     correct:
// }, {
//     question: "Who can be spotted on a Wanted sign at the police station?",
//     choices: ["Prince Hans from Frozen", "", ""],
//     correct:
// }, {
//     question: "Big Hero 6 is the first Walt Disney animated film with an Asian protagonist since:",
//     choises: ["The Jungle Book 2", "Mulan", ""],
//     correct: 1
// }, {
//     question: "Who from the Pixar universe can be spotted as an action figure in Fred's library?",
//     choises: ["Elastigirl from The Incredibles", "", ""],
//     correct: 1
// }, {
//     question: "Who from the Marvel universe can be spotted as an action figure in Fred's library?",
//     choises: ["Sub-Mariner villain 'Orka'", "voodoo priest villain called 'Black Talon'"],
//     correct: "1-2"
// }, {
//     question: "Why is Go Go Tomago's super suit yellow?",
//         choises: ["To match her name, Tomago, which means 'egg' in Japanese", ""],
//         correct: 1
// }, {
//     question: "Although the characters are given Japanese names, the characters in Big Hero 6 are actually envisioned as:",
//         choises: ["Korean", ""],
//         correct: 1
// }, {
//     question: "When Hiro falls between his desk and bed and Baymax comes to pick him up, what character can be seen under his bed?",
//         choises: ["Oswald"],
//         correct: 1
// }, {
//     question: "In what year does Big Hero 6 take place?",
//         choises: ["2032", ""],
//         correct: 1
// }, {
//     question: "Where is Stan Lee's cameo?",
//         choises: ["in the after-credits scene, Stan Lee appears as Fred's dad"],
//         correct:
// }, {
//     question: "In the comic book, who actually is responsible for the creation of Baymax?",
//         choises: ["Hiro", ""],
//         correct: 1
// }, {
//     question: "",
//         choises: [],
//         correct: 1
//
//
// }];