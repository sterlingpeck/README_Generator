// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return "./assets/images/license-Apache-2-blue.svg";
    case "GNU General Public License":
      return "./assets/images/license-GPL-blue.svg";
    case "MIT":
      return "./assets/images/license-MIT-blue.svg";
    default:
      return "";
  }
}

// Function that returns the license section of README
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Public License":
      return "https://opensource.org/licenses/gpl-license";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    default:
      return "";
  }
}

// Generate the final markdown content
function generateMarkdown(data) {
  return `# ${data.title}
![License Badge](${renderLicenseBadge(data.license)})
  
## Table of Contents
${generateTableOfContents(data)}
## Description
${data.description}
${generateDeployedLink(data.deployed)}
## Installation
${data.installation}
${generateTests(data.tests)}
## Usage
${data.usage}
${generateContribution(data.contribute)}
## Questions
If you have any questions, contact me through [GitHub](https://github.com/${
    data.github
  }) or by [sending me an email](mailto:${data.email}).
## License
Usage of this application is governed by the [${
    data.license
  }](${renderLicenseLink(data.license)}) license.
`;
}
module.exports = generateMarkdown;
