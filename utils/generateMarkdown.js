// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `
   # ${data.title}
   
   ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
   
   ## Description 
   ${data.description}

   ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Support]
  
   ## Installation 
   ${data.installation}

   ## Usage
   ${data.usage}

   ## License
   ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br />
    This application uses the ${data.license} license. 
  
   ## Contributing
   ${data.contributing}

   ## Tests
   ${data.tests}

   ## Support
    Email me with any questions @fakeeamil.com
    
    Find me on GitHub @ murphyoc

   
  `
}

module.exports = generateMarkdown;
