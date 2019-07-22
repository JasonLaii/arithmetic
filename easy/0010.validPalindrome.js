/**
 * 给一个字符串，判断是否为回文
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 忽略大小写
 * Note: For the purpose of this problem, we define empty string as valid palindrome.

 * Example 1:

 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * Example 2:

 * Input: "race a car"
 * Output: false
 */

function isValid(c){
  const charCode = c.charCodeAt(0);
  const isDigit = charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0);
  const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);
  return isDigit || isChar;
}

var validPalindrome = function(str){
  str = str.toLowerCase();
  let left = 0;
  let right =str.length -1;

  while(left<right){

    if(!isValid(str[left])){
      left++;
      continue;
    }

    if(!isValid(str[right])){
      right--;
      continue;
    }

    if(str[left] === str[right]){
      left++;
      right--;
    }else{
      break;
    }

  }
  return right <= left;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));

// console.log(isValid('a'))
