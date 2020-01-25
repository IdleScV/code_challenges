//! Written in November 2019. One of my first challenges off of codecademy's challenge projects list.

//! The goal is to create 3 functions that
//! 1. validates a single credit card using the "Luhn Algorith" (https://en.wikipedia.org/wiki/Luhn_algorithm#Description)
//! 2. find invalid credit cards out of a batch of credit cards, and
//! 3. return a list of credit card companies that issued the invalid credit cards. (first digit references card company)

//! any comments that start with '//!' are from Jan 2020.

// All valid credit card numbers
const valid1 = [ 4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8 ];
const valid2 = [ 5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9 ];
const valid3 = [ 3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6 ];
const valid4 = [ 6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5 ];
const valid5 = [ 4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6 ];

// All invalid credit card numbers
const invalid1 = [ 4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5 ];
const invalid2 = [ 5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3 ];
const invalid3 = [ 3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4 ];
const invalid4 = [ 6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5 ];
const invalid5 = [ 5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4 ];

// Can be either valid or invalid
const mystery1 = [ 3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4 ];
const mystery2 = [ 5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9 ];
const mystery3 = [ 6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3 ];
const mystery4 = [ 4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3 ];
const mystery5 = [ 4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3 ];

// An array of all the arrays above
const batch = [
	valid1,
	valid2,
	valid3,
	valid4,
	valid5,
	invalid1,
	invalid2,
	invalid3,
	invalid4,
	invalid5,
	mystery1,
	mystery2,
	mystery3,
	mystery4,
	mystery5
];

// first is to create the formula for cards with numlength that are even

let validateCred = (cardnum) => {
	let sum = 0;

	//For Calculating card sum with and even numbered length.
	//! LOTS OF DRY CODE, CAN PROBABLY BE CLEANED UP IF NECCESSARY.
	//! Honestly it's probably easier to understand like this?
	if (cardnum.length % 2 === 0) {
		for (let i = 1; i < cardnum.length; i += 2) {
			sum += cardnum[i];
		}
		for (let i = 0; i < cardnum.length; i += 2) {
			if (cardnum[i] < 5) {
				sum += cardnum[i] * 2;
			} else {
				sum += cardnum[i] * 2 - 9;
			}
		}
	}

	//For calculating card sum an odd numbered length

	if (cardnum.length % 2 === 1) {
		for (let i = 0; i < cardnum.length; i += 2) {
			sum += cardnum[i];
		}
		for (let i = 1; i < cardnum.length; i += 2) {
			if (cardnum[i] < 5) {
				sum += cardnum[i] * 2;
			} else {
				sum += cardnum[i] * 2 - 9;
			}
		}
	}
	//Print true or false for card validation
	return sum % 10 === 0;
};

/* //? To test the function validateCred()
validateCred(invalid1) 
validateCred(invalid2) 
validateCred(invalid3)
validateCred(invalid4)
validateCred(invalid5)
validateCred(valid1)
validateCred(valid2)
validateCred(valid3)
validateCred(valid4)
validateCred(valid5)
validateCred(mystery1)
validateCred(mystery2)
validateCred(mystery3)
validateCred(mystery4)
validateCred(mystery5)
*/

let findInvalidCards = (nestCard) => {
	let invalidCards = [];
	//! I can .forEach() through this.
	for (let i = 0; i < nestCard.length; i++) {
		if (validateCred(nestCard[i]) === false) {
			invalidCards.push(nestCard[i]);
		}
	}
	return invalidCards;
};

// Shows all card arrays that are invalid
//? console.log(findInvalidCards(batch));

//Show card companies that have issued invalid cards

//! JAN 2020 comment: Use a switch statement here
let idInvalidCardCompanies = (nestCard) => {
	let companiesToMail = [];
	for (let i = 0; i < nestCard.length; i++) {
		if (nestCard[i][0] === 3) {
			companiesToMail.push('Amex (American Express)');
		}
		if (nestCard[i][0] === 4) {
			companiesToMail.push('Visa');
		}
		if (nestCard[i][0] === 5) {
			companiesToMail.push('Mastercard');
		}
		if (nestCard[i][0] === 6) {
			companiesToMail.push('Discover');
		} else {
			companiesToMail.push('Company not found');
		}
	}
	return Array.from(new Set(companiesToMail)); //removes duplicates
};

//? console.log(idInvalidCardCompanies(findInvalidCards(batch)));
