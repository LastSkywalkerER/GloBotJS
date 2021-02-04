'use strict';

function isNumber(number) {
  return !isNaN(parseInt(number)) && isFinite(number);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function checkInput(inputNumber) {
  if (!isNumber(inputNumber) || inputNumber === '-0' || inputNumber === '+0') {
    if (inputNumber === null) {
      alert('Игра окончена');
      return false;
    }
    inputNumber = checkInput(prompt('Введи число!'));
  }
  return inputNumber;
}

function start() {
  let start = prompt('Угадай число от 1 до ' + maxGameValue);
  let end = checkInput(start);
  console.log(end);
  if (end !== false) {
    return parseInt(end);
  }
  else {
    return false;
  }
}

function GloBotJS(){

  if (botNumber > userNumber) {
    alert('Загаданное число больше');
    userNumber = start();
    if (!userNumber) return false;
    return GloBotJS();
  } else if (botNumber < userNumber) {
    alert('Загаданное число меньше');
    userNumber = start();
    if (!userNumber) return false;
    return GloBotJS();
  }
  
  return true;
}

let maxGameValue = 100;

let botNumber = getRandomInt(maxGameValue + 1);
console.log(botNumber);

let userNumber = start();

if (userNumber !== false && GloBotJS()) alert('Поздравляю, Вы угадали!!!');