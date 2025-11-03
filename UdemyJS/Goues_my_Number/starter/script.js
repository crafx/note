'use strict';
/*
console.log(document.querySelector(`.again`).textContent);

document.querySelector(`.message`).textContent = `🎉 Correct number`;

document.querySelector(`.number`).textContent = 13;

document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 11;

console.log(document.querySelector(`.guess`).value);

*/

let x = function () {
  console.log(23);
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(guess, typeof guess);
  if (!guess){ 
    
  }
});
