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

module.exports = generateMarkdown;
