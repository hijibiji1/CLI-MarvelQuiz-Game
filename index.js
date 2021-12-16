var read = require("readline-sync");
var chalk = require("chalk");

/**
 * Welcome message
*/

var userName = read.question("What is your name? ");
let name = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(chalk.blue("\nWelcome '" + name + "' lets check - How Well Do You Know Me Questions'? \n"));

/**
 * Storing Data
*/

var score = 0;

var main = [
  {
    question: `Whose nickname is "Murder Bot"?
    a. Iron Man
    b. Vision
    c. HUlk
    d. Ultron\n`,
    ans: "d",
  },
  {
    question: `Who is the leader of S.H.I.E.L.D?
    a. Nick Fury
    b. Tony Stark
    c. Bruce Banner
    d. Diana Prince\n`,
    ans: "a",
  },
  {
    question: `Who is Loki's adoptive brother?
    a. Bruce Banner
    b. Tony Stark
    c. Thor
    d. Petter Parker\n`,
    ans: "c",
  },
  {
    question: `What weapon does Thor carry?
    a. A catapult
    b. A bow and arrow
    c. A hummer
    d. A sword\n`,
    ans: "c",
  },
  {
    question: `J.A.R.V.I.S was programmed by Captain America?
    a. True
    b. False\n`,
    ans: "b",
  },
  {
    question: `What is Captain America's shield made of?
    a. Titanium
    b. Steel
    c. Impenetrable Leather
    d. Vibranium\n`,
    ans: "d",
  },
]

var highScore = [
  { name: "Suvo", score: 5 },
  { name: "Ayan", score: 4 }
]


/**
 * Create function
*/

function quiz(userAns, myAns) {
  if (userAns.toLowerCase() === myAns.toLowerCase()) {
    console.log(chalk.green("WOW!!! Right Answer"));
    score += 1
    console.log("Score is: " + score);
    console.log("------------------");
  } else {
    console.log(chalk.red("You are wrong!!! \nThe answer is: " + myAns));
    score -= 1
    console.log("Score is: " + score);
    console.log("------------------");
  }
}


function loop() {
  for (let i = 0; i < main.length; i++) {
    var userAns = read.question(chalk.yellow(main[i].question));
    var myAns = main[i].ans
    quiz(userAns, myAns);
  }
}


function checkScore() {
  let scoreFlag = 0;
  console.log(chalk.magentaBright("High scores of other player:"));
  console.log(chalk.blueBright("Name | Score"));
  for (let i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name + " | " + highScore[i].score);
    if (highScore[i].score > score) {
      scoreFlag += 1;
    }
  }
  if (scoreFlag > 0) {
    console.log("------------------");
    console.log("Sorry, You haven't beaten the Highscore, Please try again!!!");
  } else {
    console.log("------------------");
    console.log("Congrats! You've beaten the highscorer!! \n\n" + chalk.black.bgWhite.bold("Feel free to send me the screenshot of your score to get featured on the Leaderboard!"));
  }
}


/**
 * function calling
*/

loop();
checkScore();
