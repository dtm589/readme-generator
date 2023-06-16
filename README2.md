# README Generator

## Description
This Node.js application facilitates the creation and population of a GitHub repository's README.md file. It uses the third-party Node.js module called Inquirer which takes in user information and from that information builds out the README.md file. The app uses Inquirer's .prompt() method to stage a series of questions the user has to answer. Once the user answers all the prompts, the data object (called userAnswers in the JavaScript code) that is returned is then passed to a function whose responsibility is to build out the README file content. This function is appropriately called generateMarkdown and is imported into the main file index.js. Finally, fs.writeFile is used to write the file (i.e. README.md) to the user's system, using the return from generateMarkdown as its object.

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contributions)
  * [Tests](#tests)
  * [Questions?](#questions)

## Installation
Once the repository is cloned, from the root directory of where they installed the application the user is to run the command 'npm install' to install required dependencies. After dependencies are loaded, all the user must do to run the application is type 'node index.js' in the command line and answer the prompts as they appear.

## Usage
Click on the link below to see how to use the app on <a href="https://www.youtube.com/watch?v=M4XKjfXgniE" target="_blank">YouTube</a>.

## License


## Contribute
Please feel free to contact me on my email or my github to contribute.

## Tests
No tests available at this time.

## Questions
Please reach out to me at derekmarchese1@gmail.com.<br>
Or check out my <a href="https://github.com/dtm589">GitHub</a>.
