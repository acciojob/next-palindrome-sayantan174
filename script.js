function nextPalindrome(num) {
  //your JS code here.
	function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
  }

  // Increment the number and check for palindrome until found
  let nextNumber = number + 1;
  while (!isPalindrome(nextNumber)) {
    nextNumber++;
  }

  return nextNumber;
}

// const input = prompt("Enter a palindrome number");
// alert(nextPalindrome(input));
