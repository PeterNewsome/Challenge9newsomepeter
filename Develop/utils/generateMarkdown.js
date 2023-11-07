// generateMarkdown.js

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) return '';
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPL-3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache-2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  };
  return badges[license] || '';
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) return '';
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0'
  };
  return links[license] || '';
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) return '';
  const notices = {
    'MIT': 'This project is licensed under the MIT License.',
    'GPL-3.0': 'This project is licensed under the GPL-3.0 License.',
    'Apache-2.0': 'This project is licensed under the Apache License 2.0.'
  };
  return notices[license] ? `${notices[license]} - [View License](${renderLicenseLink(license)})` : '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
