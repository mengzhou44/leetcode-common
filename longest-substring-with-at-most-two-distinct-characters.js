// Problem Statement:

// Given a string s , find the length of the longest substring t that contains at most 2 distinct characters.

// Example 1:
// Input: "eceba"
// Output: 3
// Explanation: t is "ece" which its length is 3.

// Example 2:
// Input: "ccaabbb"
// Output: 5
// Explanation: t is "aabbb" which its length is 5.

function lengthOfLongestSubstringTwoDistinct(s)  {
    let left= 0
    let longest = 0
    let  map = new Map()
    for(let right=0; right<s.length; right++) {
          map.set(s[right], right)
          while(map.size()>2) {
              map.set(left)
          }
          longest = Math.max(longest, right-left +1)
    }

    return longest

    function isValidWindow() {
        return  map.size() <=2
    }
}




//console.log(lengthOfLongestSubstringTwoDistinct('eceba'))
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb'))