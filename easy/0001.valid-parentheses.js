
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

let test = '{[()]}'
let wrong = '[)'

var isValid = function(s){

  const stack = [];
  const mapper = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  }

  for( let i in s){

    const item = s[i];
    if(['(','[','{'].indexOf(item) > -1 ){
      stack.push(item)
      console.log(stack)
    }else{
      const peak = stack.pop();
      if(item !== mapper[peak]){
        return false
      }
    }
  }
  if(stack.length > 0 ) return false;
  return true;
}

console.log(isValid(wrong))
