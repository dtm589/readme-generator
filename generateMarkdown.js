// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contributions)
  * [Tests](#tests)
  * [Questions?](#questions)
  * 
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is utilizing the ${data.license} license.

  ## Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Please reach out to me at ${data.email}.<br>
  Or check out my  GitHub page <a href="https://github.com/${data.github}">here</a>.
`;
}

module.exports = generateMarkdown;
