var roundScores = [36, 39, 44, 49, 45, 48, 52]

var sum = roundScores.reduce((prev, item) => prev + item);
sum;
var average = sum / roundScores.length;
average;


//Use the sum to get an average

//Handicap is 4
//Use a map to reduce all scores by 4
var handicap = roundScores.map((element) => element -= 4);
handicap
var sum = handicap.reduce((prev, item) => prev + item);
sum
//Use a reduce to get a sum
var average = sum / handicap.length;
average;
//Use the sum to get an average

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together
var concatenated = lyricWords.reduce((accumulator, item) => accumulator + item)
concatenated