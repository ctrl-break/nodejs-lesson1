'use strict';
console.log('\x1Bc');

const clc = require('cli-color');

const mainColor = clc.red.bold;
const secondColor = clc.yellow.bold;


const Spinner = require('cli-spinner').Spinner;
const spinner = new Spinner(secondColor(' %s ..loading.. '));
spinner.setSpinnerString('⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈');
spinner.setSpinnerDelay(50);
spinner.start();


function ascii() {
    const TextAnimation = require("text-animation");

    TextAnimation({
      text : "hello world!",
      delay: 200
    });
};

setTimeout(function() {
    spinner.stop();
    const makeBeep = require('make-beep');
    makeBeep(1);
    ascii();
}, 3000);
