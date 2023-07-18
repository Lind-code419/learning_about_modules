import figlet from 'figlet';

import greet from './greet.js'

figlet(greet('Xola'), function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });