//! Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	//? Make x into a string that is split into an array called k
	let k = x.toString().split('');
	//? Make x into a reversed string that is split into an array called y
	let y = x.toString().split('').reverse();

	console.log(y);
	console.log(k);

	return k.join() === y.join();
};

console.log(isPalindrome(-121), 'return false');
console.log(isPalindrome(121), 'return true');
console.log(isPalindrome(1221), 'return true');
