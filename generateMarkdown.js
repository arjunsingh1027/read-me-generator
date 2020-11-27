function generateMarkdown(data) {
    return `# ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Testing](#test)
    * [Questions](#questions)
    
    ## Installation

    To install the dependencies needed, run the following command:

    \`\`\
    ${data.installation}
    \`\`\

    ## Usage

    ${data.usage}
    
    ## License
    
    ${data.license}
    
    ## Contributing
    
    ${data.contributing}

    ## Testing

    To run tests, run the command line:

    \`\`\
    ${data.test}
    \`\`\

    ## Questions
    
    If you have any questions about the repo, you can contact me at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
    
    `;
}

module.exports = generateMarkdown;