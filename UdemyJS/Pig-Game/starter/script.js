'use strict';

// Selecting elements
const playerScore0 = document.getElementById('score--0');

const playerScore1 = document.getElementById('score--1');

const pCureentScore0 = document.getElementById('current--0');

const pCureentScore1 = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

// Starting coditions

playerScore0.textContent = 0;
playerScore1.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
const rNumber = Math.floor(Math.random() * 6) + 1;

btnRoll.addEventListener('click' , funcion(){ 
  pCureentScore0.textContent = rNumber ; 
})
