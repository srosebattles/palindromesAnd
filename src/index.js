
// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(string){

  for (var i = 0; i < string.length; i++) {
    var letter = string[i]
    if (letter !== string[string.length - i - 1])
    return false
  }

  return true;
}

// tests
console.log(isPalindrome("poop"))

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )

// write a function on the Array prototype
// called groupBy(callback) the takes a callback
// function. For each item in groupBy, callback's
// arguments will be (value, index, array).
//
// The value returned by the callback becomes the
// key for the original value in a new collection.
//
// i.e.
//
// [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
//
// //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }

Array.prototype.groupBy = function(callback){
    var newGroups = {}
    for (var i =0; i < this.length; i++) {
      var currentItem = this[i]
      var result = callback(currentItem, i, this)
      if (typeof newGroups[result] === "undefined"){
        newGroups[result] = [currentItem]
      } else {
        newGroups[result].push(currentItem)
      }
    }
    return newGroups
}

var groups = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
     return (v%2 === 0) ? 'even' : 'odd'
})

console.log(groups)
