//Q1

(function () {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('-----------------------------------------');
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        var sc;

        if (answer == this.correctAnswer) {
            console.log('You\'re answer is correct!');
            sc = callback(true);
        } else {
            console.log('That is the wrong answer');

            sc = callback(false);
        }
        this.displayScore(sc);
    }



    var question1 = new Question('What is the capital of England?', ['London', 'Berlin', 'New York'], 0);
    var question2 = new Question('What is the capital of Spain?', ['Barcelona', 'Lisbon', 'Madrid'], 2);
    var question3 = new Question('What is the capital of Italy?', ['Venice', 'Florence', 'Rome'], 2);

    var allQuestions = [question1, question2, question3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        var n = Math.floor(Math.random() * allQuestions.length);

        allQuestions[n].displayQuestion();
        var userAnswer = prompt('Please enter your answer');

        if(userAnswer !== 'exit'){

        allQuestions[n].checkAnswer(parseInt(userAnswer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();
})();

