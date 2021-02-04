'use strict';

function isNumber(number) {
  return !isNaN(parseInt(number)) && isFinite(number);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function ifMore (botNumber, userNumber) {
  if (botNumber > userNumber) return true
  else return false;
}

function start() {
  let start = prompt('Угадай число от 1 до ' + maxGameValue);
  
  while (!isNumber(start)) {
    if (start === null) {
      alert('Игра окончена');
      return false;
    }
    start = prompt('Введи число!');
  }
  return parseInt(start);
}

function isEqual (botNumber, userNumber) {
  if (botNumber === userNumber) return true;
  return false;
}

function GloBotJS(){
  let botNumber = getRandomInt(maxGameValue + 1);
  let userNumber = start();
  while(!isEqual(botNumber, userNumber)) {
    if (ifMore(botNumber, userNumber)) {
      alert('Загаданное число больше');
      userNumber = start();
    } else if (!ifMore(botNumber, userNumber)) {
      alert('Загаданное число меньше');
      userNumber = start();
    }
  }
  alert('Поздравляю, Вы угадали!!!');
}

let maxGameValue = 100;

GloBotJS()