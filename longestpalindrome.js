//longest palindrome

//

function longestPalindrome(s) {
    if (s.length === 0) {
      return 0;
    }
  
    for (let length = s.length; length >= 1; length--) {
      for (let i = 0; i <= s.length - length; i++) {
        const substring = s.substring(i, i + length);
        if (isPalindrome(substring)) {
          return length;
        }
      }
    }
}