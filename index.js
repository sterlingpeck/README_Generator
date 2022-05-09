// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your Github username.",
    name: "username",
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Enter the GitHub link to your project. (Required)",
    name: "repo",
    validate: (gitInput) => {
      if (gitInput) {
        return true;
      } else {
        console.log("You need to enter a project GitHub link! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is the title of your project? (Required)",
    name: "title",
    validate: (projectInput) => {
      if (projectInput) {
        return true;
      } else {
        console.log("You need to enter a project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Write a description of your project. (Required)",
    name: "description",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },
];

// Function to write README file
function writeFile(fileContent, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileContent, data, function (err) {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "You have generated a README.md file!",
      });
    });
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeFile("README.md", generateMarkdown(data));
  });
}

init();

// // Function to initialize app
// function questions() {
//   return inquirer.prompt(questions);
// }

// // Function call to initialize app
// questions()
//   .then((answers) => {
//     console.log(answers);
//     return answers;
//   })
//   .then((answers) => {
//     return generateMarkdown(answers);
//   })
//   .then((markdown) => {
//     return writeFile(markdown);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
