'use strict';

function isNumber(number) {
  return !isNaN(parseInt(number)) && isFinite(number);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function checkInput(inputNumber) {

  if (!isNumber(inputNumber) || inputNumber === '-0' || inputNumber === '+0' || inputNumber < 0 || inputNumber > 100) {
    if (inputNumber === null) {
      alert('Игра окончена');
      return false;
    }
    inputNumber = checkInput(prompt('Введи число от 0 до 100!'));
  }

  return inputNumber;
}

function theGame() {

  let maxGameValue = 100,
    tryCount = 10,
    botNumber = getRandomInt(maxGameValue + 1),
    userNumber = start(),
    gameCore = false;

  function start() {

    let start = prompt('Угадай число от 1 до ' + maxGameValue),
      end = checkInput(start);

    if (end !== false) {
      return parseInt(end);
    } else {
      return false;
    }
  }

  function checkRequest() {

    if (tryCount === 1) return 'endTryes';

    if (botNumber < userNumber) {
      alert('Загаданное число меньше, осталось попыток ' + --tryCount);
      userNumber = start(maxGameValue);
      if (!userNumber) return false;
      return checkRequest(botNumber, userNumber, maxGameValue, tryCount);
    } else if (botNumber > userNumber) {
      alert('Загаданное число больше, осталось попыток ' + --tryCount);
      userNumber = start(maxGameValue);
      if (!userNumber) return false;
      return checkRequest(botNumber, userNumber, maxGameValue, tryCount);
    }

    return true;
  }



  if (userNumber !== false) gameCore = checkRequest();

  if (userNumber !== false && gameCore === true) {
    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) theGame();
  } else if (gameCore === 'endTryes') {
    if (confirm('Попытки закончились, хотите сыграть еще?')) theGame();
  }

}

theGame();