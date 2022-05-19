// Created by: Anita Kay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function displayNumbers() {
	
	// get the user min and max
	let userMin = parseInt(document.getElementById('userMin').value)	
  let userMax = parseInt(document.getElementById('userMax').value)

  // initialize the counter to 0
	let counter = userMin;
	// initalize numbers as an empty string
	let numbers = ""
	
  // use a while loop to display the numbers from 0 up to the user number
	while ((counter >= userMin) && (counter <= userMax)) {
		// build the string of numbers with a line break each time
		numbers = numbers + counter + "<br>"
		// increment the counter
		counter = counter + 1
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers
}