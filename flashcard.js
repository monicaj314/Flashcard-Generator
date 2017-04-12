var inquirer = require("inquirer");
var fs = require("fs");
var jsonFile = 'flashcard.json'
var data = fs.readFileSync(jsonFile);
var flashcards = JSON.parse(data);

var input = process.argv;

function BasicCard(front, back)  {
    this.front = front;
    this.back = back;
};

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze; 
};


var createCloze = new ClozeCard(this.full, this.blank);

// Revising this later for creating new flashcards through node command
// var obj = {
//     dataArray: []
// };
// var json = JSON.stringify(obj);

// function pushCard() {
//     fs.appendFile(jsonFile, json, 'utf8', callback)
// }
// Prompts for creating new flashcards via command line
var ifBasic = [{
        type: "input",
        message: "Enter your question.",
        name: "front"
    },
    {
        type: "input",
        message: "Enter the answer.",
        name: "back"
    } 
];

var ifCloze = [{
        type: "input",
        message: "Enter your cloze statement.",
        name: "text"
    },
    {
        type: "input",
        message: "Enter the answer.",
        name: "cloze"
    }
    ];
// Function for creating new flashcards via command line
    function makeFlashcards() {
    if (input[2] == "create" && input[3] == "basic") {
        inquirer.prompt(ifBasic, function(answers) {
            var basicFront = answers.front;
            var basicBack = answers.back;
            createBasic(basicFront, basicBack);
            });
        } else if (input[2] == "create" && input[3] == "cloze") {
            inquirer.prompt(ifCloze, function(answers) {
            var clozeFront = answers.text;
            var clozeBack = answers.cloze;
            createCloze(clozeFront, clozeBack);
            });
        }  
    };

//Start game and loop through all the basic questions. 
//For now, prompts next question on user input 

//function startFlashcards() {
    // var allCards = flashcards.map(function(card, i) {
    // return {
    //             type: "input",
    //             message: card.front,
    //             name: "Flashcard" + card[i]
    //     };  
    // });
    //console.log(flashcards[0].front);

var createBasic = new BasicCard(this.front, this.back);

inquirer.prompt([{
    type: "input",
    message: flashcards[0].front,
    name: "Flashcard"
    }]).then(function(answer) {
    console.log(answer);
});
