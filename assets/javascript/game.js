//document ready
$(document).ready(function() {


//declare variables

    var questions = [{
        question: "Baymax's motions are modeled after the movements of what animal?",
        choices: ["baby penguins", "baby hippos", "kittens"],
        correct: 0,
        image: "assets/images/baymax-soccer.gif"
    }, {
        question: "The look and movement of microbots is based on",
        choices: ["microbacteria", "swarms of ants", "magnets"],
        correct: 1,
        image: "assets/images/microbots-hand.jpg"
    }, {
        question: "Big Hero 6 was the first collaboration between",
        choices: ["Marvel and Pixar", "Pixar and DC Comics", "Disney Animation and DC Comics", "Marvel and Disney Animation"],
        correct: 3,
        image: "assets/images/marvelbh6.jpeg"
    }];


    var currentQuestion = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var outOfTimeQuestions = 0;
    var number = 10;
    var intervalId;
    var quizOver = false;
    var question;
    var questionClass;
    var choiceList;
    var numChoices;



// display first question with answer options and a timer counting down
    displayQuestion();
    //maybe remove quiz message div?
    $(".quizMessage").hide();



// if player picks the correct answer, show a screen with a correct answer! message.
    function game() {

        if (!quizOver) {

            $("li").click(function() {
                // stop();
                var value = $("li").index(this);
                console.log(value);
                if (value === questions[currentQuestion].correct) {
                    console.log("clicked right answer!");
                    correctAnswers++;
                    breakTimeCorrect();
                }
                else {
                    console.log("clicked wrong answer");
                    incorrectAnswers++;
                };



            });
        };
    };  //end game function

    function breakTimeCorrect() {
        $(".timeLeft").html("Correct!");
        $(".question").html("<img src='" + questions[currentQuestion].image + "'/>");
        // $(".choiceList").hide();
        // $(".quizMessage").html("<p>Next Question</p>").on("click", nextQuestion());
    }


    //are there any questions left? if yes, display next, if no, display score
    function nextQuestion() {
        // timer();
        currentQuestion++;
        //if no questions left, display score
        if (currentQuestion < questions.length) {
            displayQuestion();
        }
        else {
            // stop();
            displayScore();
            quizOver = true;
        };
    };

    function displayScore() {
        $(".result").html("Correct answers: " + correctAnswers + "<br> Incorrect answers: " + incorrectAnswers + "<br>Unanswered Questions: " + outOfTimeQuestions);
    }


    function displayQuestion() {
        //starts 30s timer
        // timer();
        question = questions[currentQuestion].question;
        console.log("current question: " + question);
        //is .find necessary?
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
//     function timer() {
//         intervalId = setInterval(decrement, 1000);
//
//     };
//
//     function decrement() {
//         number--;
//         $(".timeLeft").html("<h3>" + number + "</h3>");
//         if (number === 0) {
//             stop();
//             number = 10;
//             outOfTimeQuestions++;
//             console.log("out of time");
//             nextQuestion();
//         };
//     };
//
//     function stop() {
//         clearInterval(intervalId);
//
//     };





});  //end doc ready



//trivia questions

//
// var questions = [{
//     question: "Baymax's motions are modeled after the movements of what animal?",
//     choices: ["baby penguins", "baby hippos", "baby humans"],
//     correct: 0
// }, {
//     question: "The look and movement of microbots is based on",
//     choices: ["microbacteria", "swarms of ants", "magnets"],
//     correct: 1
// }, {
//     question: "Big Hero 6 was the first collaboration between",
//     choices: ["Marvel and Pixar", "Pixar and DC Comics", "Disney Animation and DC Comics", "Marvel and Disney Animation"],
//     correct: 3
// }, {
//     question: "Who can be spotted on a Wanted sign at the police station?",
//     choices: ["Lord Dingwall from Brave", "Flynn Rider from Tangled", "Prince Hans from Frozen"],
//     correct: 2
// }, {
//     question: "Big Hero 6 is the first Walt Disney Animation Studios film with an Asian protagonist since:",
//     choises: ["The Jungle Book 2", "Mulan", "Treasure Planet"],
//     correct: 0
// }, {
//     question: "What Pixar character can be spotted as an action figure in Fred's library?",
//     choises: ["Buzz Lightyear", "Wall-E", "Elastigirl from The Incredibles"],
//     correct: 2
// }, {
//     question: "Who from the Marvel universe can be spotted as an action figure in Fred's library?",
//     choises: ["Sub-Mariner villain 'Orka'", "voodoo priest villain called 'Black Talon'", "Sleepwalker", "All of these guys and literally way more"],
//     correct: "3"
// }, {
//     question: "Why is Go Go Tomago's super suit yellow?",
//     choices: ["To match her name, Tomago, which means 'egg' in Japanese", "It is Jamie Chung (the voice of Go Go)'s favorite color", "In the comic books, Tomago's yellow suit is necessary for her to transmutate"],
//     correct: 0
// }, {
//     question: "Although they have Japanese names, the characters in Big Hero 6 were actually originally envisioned and written as:",
//     choices: ["Mongolian", "Taiwanese", "Korean"],
//     correct: 2
// }, {
//     question: "When Hiro falls between his desk and bed and Baymax comes to pick him up, what character can be seen under his bed?",
//     choices: ["Hercules", "Oswald", "Aladdin"],
//     correct: 1
// }, {
//     question: "In what year does Big Hero 6 take place?",
//     choices: ["2014", "2032", "2020"],
//     correct: 1
// }, {
//     question: "Who does Stan Lee cameo as?",
//     choices: ["One of the science expo judges", "An inmate when Tadashi and Hiro get arrested", "Fred's dad"],
//     correct: 2,
// }, {
//     question: "In the comic book, who actually is responsible for the creation of Baymax?",
//     choices: ["Hiro", "Wasabi", "Honey Lemon"],
//     correct: 0
// }, {
//     question: "",
//     choices: [],
//     correct: 1
//
//
// }];