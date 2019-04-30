# CODE EXAMPLE

 ```js
  const { writeFile } = require('fs');

  await chromeOne.takeScreenshot()
       .then(image => writeFile('out.png', image, 'base64',
        err => console.log(err)
      ));
