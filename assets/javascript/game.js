
//assign random number from start..The random number shown at the start of the game should be between 19 - 120.

var computerNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log(computerNumber)

//define variables

var jewelValues = [];
var total = 0;
var wins = 0;
var losses = 0;

//assign randon number to each jewel..Each crystal should have a random hidden value between 1 - 12.

function jewelNumbers(){
for (var i = 0; i < 4; i++) { 
    var fourRandom = Math.floor(Math.random()* 12) + 1;
    jewelValues.push(fourRandom);
}} 
console.log(jewelValues)

jewelNumbers();


//link onclick to jewels

$(document).ready(function(){
    $("#one").click(function(){
        total = total + jewelValues[0]
        $("#addedScore").text(total);
    });
});

$(document).ready(function(){
    $("#two").click(function(){
        total = total + jewelValues[1]
        $("#addedScore").text(total);
    });
});    

$(document).ready(function(){
    $("#three").click(function(){
        total = total + jewelValues[2]
        $("#addedScore").text(total);
    });
});

$(document).ready(function(){
    $("#four").click(function(){
        total = total + jewelValues[3]
        $("#addedScore").text(total);
    });
});           


//execute addition

//conditionals - compare computer number to user number

//tally for score, wins, losses

//reset game

