//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU GPLv3':
      return '<img src="https://img.shields.io/badge/License-GNU%20GPLv3-red">';
    case 'GNU LGPLv3':
      return '<img src="https://img.shields.io/badge/License-GNU%20LGPLv3-red">';
    case 'GNU AGPLv3':
      return '<img src="https://img.shields.io/badge/License-GNU%20AGPLv3-red">';
    case 'Mozilla Public License 2.0':
      return '<img src="https://img.shields.io/badge/License-MPL%202.0-red">';
    case 'Apache License 2.0':
      return '<img src="https://img.shields.io/badge/License-Apache%202.0-red">';
    case 'MIT License':
      return '<img src="https://img.shields.io/badge/License-MIT-red">';
    case 'Boost Software License 1.0':
      return '<img src="https://img.shields.io/badge/License-Boost%201.0-red">';
    case 'The Unlicense':
      return '<img src="https://img.shields.io/badge/License-Unlicense-red">';
    case 'none':
      return "";
  }
}

//Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU GPLv3':
      return `<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank"><img src="https://img.shields.io/badge/License-GNU%20GPLv3-red"></img></a>`;
    case 'GNU LGPLv3':
      return `<a href="https://www.gnu.org/licenses/lgpl-3.0" target="_blank"><img src="https://img.shields.io/badge/License-GNU%20LGPLv3-red"></img></a>`;
    case 'GNU AGPLv3':
      return `<a href="https://www.gnu.org/licenses/agpl-3.0" target="_blank"><img src="https://img.shields.io/badge/License-GNU%20AGPLv3-red"></img></a>`;
    case 'Mozilla Public License 2.0':
      return `<a href="https://opensource.org/licenses/MPL-2.0" target="_blank"><img src="https://img.shields.io/badge/License-MPL%202.0-red"></img></a>`;
    case 'Apache License 2.0':
      return `<a href="https://opensource.org/licenses/Apache-2.0" target="_blank"><img src="https://img.shields.io/badge/License-Apache%202.0-red"></img></a>`;
    case 'MIT License':
      return `<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-red"></img></a>`;
    case 'Boost Software License 1.0':
      return `<a href="https://www.boost.org/LICENSE_1_0.txt" target="_blank"><img src="https://img.shields.io/badge/License-Boost%201.0-red"></img></a>`;
    case 'The Unlicense':
      return `<a href="http://unlicense.org/" target="_blank"><img src="https://img.shields.io/badge/License-Unlicense-red"></img></a>`;
    case 'none':
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) { }

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contributions)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}

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
