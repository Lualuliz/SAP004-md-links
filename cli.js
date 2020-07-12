#!/usr/bin/env node

const chalk = require('chalk');
const mdLinks = require('./index.js');
console.log(chalk)
console.log(mdLinks)

const path = process.argv.slice(2).pop();
mdLinks(path)
  .then(result => result.forEach((element) => {
    console.log('\n', chalk.yellow(element.href),'\n', element.text.substring(0, 50));
  }))
  .catch(error => console.log(error));
  