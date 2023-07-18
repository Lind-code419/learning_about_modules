import chalk from 'chalk';

import greet from './greet.js'

// call the function & print the result on the screen
console.log(greet('Xola'))
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)