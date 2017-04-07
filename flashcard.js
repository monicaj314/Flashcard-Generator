var inquirer = require("inquirer");
var input = process.argv;

function BasicCard(front, back)  {
    this.front = front;
    this.back = back;
};

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze; 
};

var createBasic = new BasicCard(this.front, this.back);
var createCloze = new ClozeCard(this.full, this.blank);
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
        }  else if (input[2] == "start") {
        console.log("Under Construction...")
    };
};

makeFlashcards();