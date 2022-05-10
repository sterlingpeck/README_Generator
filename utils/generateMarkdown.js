function generateMarkdown(data) {
  return `

# ${data.title}
https://github.com/${data.username}/${data.title}
# Description
${data.description}

# Table of Contents 
* [Installation](#installation)
${data.installation}
* [Usage](#usage)
${data.usage}
* [License](#license)
${data.license}
* [Credits](#credits)
${data.credits}
* [Questions](#questions)
${data.email}

# Installation
These dependencies need to be installed to run this application: ${data.installation}
# Usage
In order to use this app, ${data.usage}
# License
This project is licensed under ${data.license}. 

ISC License

Copyright (c) [2022] [${data.username}]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

# Credits
Credits: ${data.credits}
# Questions
If you have any questions please feel free to contact ${data.email}.
`;
}

module.exports = generateMarkdown;
