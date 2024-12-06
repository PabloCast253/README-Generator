
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // check if there is even a licence in the first place if there isnt a license provided return an empty string to add to the README 
  if(!license){
    return " ";
  }
  // return the license with a badge string 
  return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-blue.svg)`;
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (!license){
    return '';
  }
  return `[Learn more about ${license}](https://choosealicense.com/licenses/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // use if statement to check if license exists
  if (!license) return '';
  return `## License
This project is licensed under the ${license} license.  
${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
// create the structure of the readme file and use the answers from the inquirer prompt to fill in the the readme
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#Description)
  * motivation for making project
  * problems this project solves 
  * Things learned while making this project
- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#Collaborators)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}
  - ${data.motivation}
  - ${data.problemsSolves}
  - ${data.learned}

## Installation
${data.installation}

## Usage
${data.usage}

## Collaborators
${data.collaborators} 

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out:  
- GitHub: [${data.github}](https://github.com/${data.github})  
- Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
