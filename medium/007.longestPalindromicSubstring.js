
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

 var longestPalindromicSubstring = function(str){

  let res = '';
  let current = '';
  for(let i=1; i<str.length; i++){
    
    let pre = i - 1;
    let next = i + 1;
    
    //回文
    // if(pre === next){


      while( str[pre] === str[next]){

        if( !(str[pre]) || !(str(next))){

          
          current = str.slice(pre,next);
  
          if(current > res){
            res = current;
          }
        }

        pre--;
        next++;
      }
    // }

  } 

 }

 longestPalindromicSubstring('babad')
