
/**
 * Given a string, find the length of the longest substring without repeating characters.
 *  
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 *
 * Given "bbbbb", the answer is "b", with the length of 1.
 *
 * Given "pwwkew", the answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 */

// pwwkew
// 子串是连在一起的，例如 pww, kew..
// 子序列中的字符不一定是连在一起的， 例如 pwke

/**
 * @description: 
 * @param {Strint} str 
 * @return {Number}
 */
var lengthOfLongestSubstring = function(str){

  let slideWindow = [];
  let res = 0;
  let mapper = {};
  for(let c of str){

    if(mapper[c]){

      //findIndex((value,index,array))
      const delIndex = slideWindow.findIndex(_c => _c === c );
      for(let i = 0; i < delIndex; i++){
        mapper[slideWindow[i]] = false;
      }
      slideWindow = slideWindow.slice(delIndex + 1).concat(c);

    }else{
      if(slideWindow.push(c) > res){
        res = slideWindow.length;
      }
    }
    mapper[c] = true;
  }
  return res


}

// console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
