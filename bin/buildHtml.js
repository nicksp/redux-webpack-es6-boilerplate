/**
 * This script copies src/client/assets/index.html into build/client/index.html
 * This is useful for our built production code.
 */

/*eslint-disable no-console */

const fs = require('fs');
const colors = require('colors');
const cheerio = require('cheerio');

fs.readFile('src/client/assets/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.error(err);
  }

  const $ = cheerio.load(markup);

  $('head').append('<link rel="stylesheet" href="/css/app.css">');

  fs.writeFile('build/client/index.html', $.html(), 'utf8', (err) => {
    if (err) {
      return console.error(err);
    }
  });

  console.log('index.html written to /build/client'.green);
});
