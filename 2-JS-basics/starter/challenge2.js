johnScores = [89, 120, 103];
mikeScores = [116, 94, 123];

function calcAverage(scores){
    var score = 0;
    for(var i = 0; i < 3; i++){
        score += scores[0];
    }
    return (score/3);
}

function checkWinner(){
    johnAverage > mikeAverage ? console.log('John ', johnScores) : console.log('Mike ', mikeScores);
    if(johnAverge == mikeAverage){
        console.log("IT'S A DRAW");
    }
}

var johnAverage = calcAverage(johnScores);
var mikeAverage = calcAverage(mikeScores);

//Q1
console.log("John's average: ", johnAverage);
console.log("Mike's average: ", mikeAverage);

//Q2
checkWinner();

//Q3
johnScores = [100, 111, 90];
mikeScores = [100, 90, 80];
console.log('Winner the second time is ', checkWinner());