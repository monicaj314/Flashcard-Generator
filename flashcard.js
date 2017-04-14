var inquirer = require("inquirer");
var fs = require("fs");
var jsonFile = './flashcard.json';
var data = fs.readFileSync(jsonFile);
var flashcards = JSON.parse(data);
var obj = require(jsonFile);
var input = process.argv;

var flashcardIndex = 0;
function startFlashcards() {
    if(input[2] == null){
        inquirer.prompt([{
        type: "input",
        message: flashcards[flashcardIndex].front,
        name: "Flashcard"
        }]).then(function(answer) {
            if (answer.Flashcard == flashcards[flashcardIndex].back) {
                console.log("Correct!");
                flashcardIndex++;
                startFlashcards();
            } else {
                console.log("Incorrect. The correct answer is " + flashcards[flashcardIndex].back);
                flashcardIndex++;
                startFlashcards();
            }
       });
    };
};


// Everything below this line is still in progress

//For creating card via command line

function BasicCard(front, back)  {
    this.front = front;
    this.back = back;
};

// Cloze feature 
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze; 
};

var createCloze = new ClozeCard(this.full, this.blank);
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

// Use "create" command to add new basic or cloze flashcards

function makeFlashcards() {
    if (input[2] == "create" && input[3] == "basic") {
        inquirer.prompt([{
            type: "input",
            message: "Enter your question.",
            name: "front"
        },
        {
            type: "input",
            message: "Enter the answer.",
            name: "back"

        }]).then(function(answers) {
            var basicFront = answers.front;
            var basicBack = answers.back;
            var createBasic = new BasicCard(basicFront, basicBack);
            createBasic;
            console.log(createBasic);
            
            flashcards.push(JSON.stringify(createBasic));
            console.log("Basic flashcards updated.")
            console.log(flashcards);
            
        });
    } else if (input[2] == "create" && input[3] == "cloze") {
            inquirer.prompt(ifCloze, function(answers) {
            var clozeFront = answers.text;
            var clozeBack = answers.cloze;
            createCloze(clozeFront, clozeBack);
            });
        }  
    };

makeFlashcards();

// Run the file to start flashcard game

startFlashcards();





