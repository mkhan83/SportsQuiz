$(function() {

    var timer = 10;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var questions = {
        firstQuestion: {
            description: "What year was Kobe Bryant drafted?",
            answers: [1996, 1998, 1994, 2000],
            picture: ["KBGIF.gif"]
        },
        secondQuestion: {
            description: "What was the first major championship Tiger Woods won?",
            answers: ["US Open", "British Open", "Masters", "PGA Championship"],
            picture: ["tiger.gif"]
        },
        thirdQuestion: {
            description: "What year did the Redskins win their last Super Bowl?",
            answers: [1988, 1991, 1990, 1989],
            picture: ["skins.gif"]
        },
        fourthQuestion: {
            description: "Who won the 2014 World Cup?",
            answers: ["Germany", "France", "Korea", "Brazil"],
            picture: ["brazil.gif"]
        },
        fifthQuestion: {
            description: "Who won the NBA Title in 2015?",
            answers: ["Cleveland Cavaliers ", "San Antonio Spurs", "Oklahmoa City Thunder", "Golden State Warriors"],
            picture: ["Curry.jpg"]
        },
    }


    $("#start").click(startGame);

    function startGame() {

        $("#start").hide();
        var userClick;
        $(document).on('click', '.result', function() {
            userClick = $(this).text();
            console.log(userClick);
            if (userClick === $("#answerOne").text()) {
                correctAnswers++
                $('.mainContent').hide();
                $("#correctAns").html("<h2> Correct:</h2>" + '<img src="' + questions.firstQuestion.picture + '" width="400px" ' + 'text-align= "center">');
                setTimeout(secondQuest, 2000);
            }
        })
        counter = setInterval(decrement, 1000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers--
                clearInterval(counter);
                $('.mainContent').hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + '<img src="' + questions.firstQuestion.picture + '" width="400px" ' + 'text-align= "center">');
                setTimeout(secondQuest, 2000);

            }
        }
        $("#question").html(questions.firstQuestion.description);
        $("#answerOne").html(questions.firstQuestion.answers[0]);
        $("#answerTwo").html(questions.firstQuestion.answers[1]);
        $("#answerThree").html(questions.firstQuestion.answers[2]);
        $("#answerFour").html(questions.firstQuestion.answers[3]);
    }

    function secondQuest() {
        timer = 5;
        $('#correctAns').hide();
        $('.mainContent').show();

        counter = setInterval(decrement, 1000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers--
                clearInterval(counter);
                $('.mainContent').hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + '<img src="' + questions.secondQuestion.picture + '" width="400px" ' + 'text-align= "center">');
                $('#correctAns').show();
                setTimeout(thirdQuest, 2000);
                return
            }
        }
        $("#question").html(questions.secondQuestion.description);
        $("#answerOne").html(questions.secondQuestion.answers[0]);
        $("#answerTwo").html(questions.secondQuestion.answers[1]);
        $("#answerThree").html(questions.secondQuestion.answers[2]);
        $("#answerFour").html(questions.secondQuestion.answers[3]);

    }

    function thirdQuest() {
        timer = 5;
        $('#correctAns').hide();
        $('.mainContent').show();

        counter = setInterval(decrement, 2000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers--
                clearInterval(counter);
                $('.mainContent').hide();
                $("#correctAns").html("<h2> Times up! The correct answer was: 1957</h2>" + '<img src="' + questions.thirdQuestion.picture + '" width="400px" ' + 'text-align= "center">');
                $('#correctAns').show();
                setTimeout(fourthQuest, 2000);
            }
        }
        $("#question").html(questions.thirdQuestion.description);
        $("#answerOne").html(questions.thirdQuestion.answers[0]);
        $("#answerTwo").html(questions.thirdQuestion.answers[1]);
        $("#answerThree").html(questions.thirdQuestion.answers[2]);
        $("#answerFour").html(questions.thirdQuestion.answers[3]);
    }


    function fourthQuest() {
        timer = 5;
        $('#correctAns').hide();
        $('.mainContent').show();

        counter = setInterval(decrement, 2000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers--
                clearInterval(counter);
                $('.mainContent').hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + '<img src="' + questions.fourthQuestion.picture + '" width="400px" ' + 'text-align= "center">');
                $('#correctAns').show();
                setTimeout(fifthQuest, 2000);
            }
        }
        $("#question").html(questions.fourthQuestion.description);
        $("#answerOne").html(questions.fourthQuestion.answers[0]);
        $("#answerTwo").html(questions.fourthQuestion.answers[1]);
        $("#answerThree").html(questions.fourthQuestion.answers[2]);
        $("#answerFour").html(questions.fourthQuestion.answers[3]);
    }

    function fifthQuest() {
        timer = 5;
        $('#correctAns').hide();
        $('.mainContent').show();

        counter = setInterval(decrement, 2000);

        function decrement() {
            timer--;
            $("#time").html(timer);
            if (timer === 0) {
                wrongAnswers--
                clearInterval(counter);
                $('.mainContent').hide();
                $("#correctAns").html("<h2> Times up! The correct answer was:</h2>" + '<img src="' + questions.fifthQuestion.picture + '" width="400px" ' + 'text-align= "center">');
                $('#correctAns').show();
                setTimeout(reset, 2000);
            }
        }
        $("#question").html(questions.fifthQuestion.description);
        $("#answerOne").html(questions.fifthQuestion.answers[0]);
        $("#answerTwo").html(questions.fifthQuestion.answers[1]);
        $("#answerThree").html(questions.fifthQuestion.answers[2]);
        $("#answerFour").html(questions.fifthQuestion.answers[3]);
    }









    /************************resets the game****************************/
    function reset() {
        correctAnswers = 0;
        wrongAnswers = 0;
        clearInterval(timer);
        $("#time").html("Time Left in seconds: " + timer);
        $("#start").show();
    };
});