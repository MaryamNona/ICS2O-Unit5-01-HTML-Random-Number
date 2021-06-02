// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Maryam Nona
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

const number = Math.floor(Math.random() * 6 ) + 1
console.log(number)
  
function addAgeClicked () {
  // this function shows a random number 

  // input
  const user_guess = parseInt(document.getElementById("random-guess").value)

  // proces
  if (number == user_guess) {
    document.getElementById('number').innerHTML = 'You chose correctly!'
  } else if (number > user_guess) {
    document.getElementById('number').innerHTML = 'Your number is too low.'
  } else if (number < user_guess) {
    document.getElementById('number').innerHTML = 'Your number is too high.'
  }
}
