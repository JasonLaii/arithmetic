/**
 * 
 * (最长回文子串)
 * 正读和反读都相同的字符序列为“回文”
 * abba, abccba 是回文
 * abcde ababab 不是回文
 * 
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

 * Example 1:

* Input: "babad"
* Output: "bab"
* Note: "aba" is also a valid answer.
* Example 2:

* Input: "cbbd"
* Output: "bb"
 */

var longestPalindromicSubstring = function(str) {
  let res = "";
  let current = "";
  //遍历str
  for (let i = 1; i < str.length; i++) {
    
    //从前往后扩展/延伸
    for (let j = 1; j < Math.ceil(str.length / 2); j++) {
      let pre = i - j;
      let next = i + j;

      //中心轴前后有数并且存在
      if (pre > -1 && next < str.length ) {

        if (str.charAt(pre) === str.charAt(next)) {
          current = str.slice(pre, next + 1);
          if (res.length < current.length) {
            res = current;
          }
        }
        //若回文小于3
        if(res.length < 3) {
          //
          if (str.charAt(pre) === str.charAt(i)) {
            current = str.slice(pre + 1, i + 1);
            if (res.length < current.length) {
              res = current;
            }
          }
          if (str.charAt(i) === str.charAt(next)) {
            current = str.slice(i, next + 1);
            if (res.length < current.length) {
              res = current;
            }
          }else{
            break;
          }
        }
      } else {
        break;
      }
    }
  }
  return res;
};

console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("cbbd"));
console.log(longestPalindromicSubstring("abcdeanana"));
