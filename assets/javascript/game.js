
//assign random number from start..The random number shown at the start of the game should be between 19 - 120.

var computerNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log(computerNumber)

//display computer chosen number

$(document).ready(function(){
    $("#compSelection").text(computerNumber);

});


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
//tally for score, wins, losses - needs to be attributed within the click function due to changes with every click
//conditionals - compare computer number to user number

$(document).ready(function(){
    $("#one").click(function(){
        total = total + jewelValues[0]
        $("#addedScore").text(total);

    if (total === computerNumber){
        wins ++
        $('#winCount').text(wins)
    }

    else if (total > computerNumber){
        losses ++
        $('#lossCount').text(losses)
    }
});
});


$(document).ready(function(){
    $("#two").click(function(){
        total = total + jewelValues[1]
        $("#addedScore").text(total);

        if (total === computerNumber){
            wins ++
            $('#winCount').text(wins)
        }
    
        else if (total > computerNumber){
            losses ++
            $('#lossCount').text(losses)
        }
    });
});    

$(document).ready(function(){
    $("#three").click(function(){
        total = total + jewelValues[2]
        $("#addedScore").text(total);

        if (total === computerNumber){
            wins ++
            $('#winCount').text(wins)
        }
    
        else if (total > computerNumber){
            losses ++
            $('#lossCount').text(losses)
        }
    });
});

$(document).ready(function(){
    $("#four").click(function(){
        total = total + jewelValues[3]
        $("#addedScore").text(total);

        if (total === computerNumber){
            wins ++
            $('#winCount').text(wins)
        }
    
        else if (total > computerNumber){
            losses ++
            $('#lossCount').text(losses)
        }
    });
});           



//reset game

