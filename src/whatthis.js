// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}

/**
 * THE PROBLEMS
 */
console.log(whatIsThis('hello','world'))
console.assert(whatIsThis('hello', 'world') === "[object Window],hello,world" )
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//Since "this" is not otherwise set in whatIsThis, it refers to the global object. The .join causes the arguments to be joined together by commas in a string.

console.log(window.whatIsThis("hello","world"))
console.assert(window.whatIsThis('hello', 'world') === "[object Window],hello,world")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//Much the same as the above, except that we've intentionally made the window our scope by using dot syntax.

console.log(inAnObject.test1('face', 'book'))
console.assert(inAnObject.test1('face', 'book') === "[object Object],face,book")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//The "this" refers to the whole inAnObject object

console.assert(inAnObject.anotherObject.test2('twitter', 'book') === "[object Object],twitter,book")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//This time, the "this" refers to the anotherObject nested within the inAnObject object.

console.assert(whatIsThis.call() === "[object Window],,")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//Since nothing was specified for "this", it defaulted to the global object.

console.assert(whatIsThis.call(trickyTricky) === "[object Object],,")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//Because whatIsThis was passed the variable trickyTricky, the whole object trickyTricky becomes "this".

 console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === "[object Object],nice,job")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//Because I did a nice job, obviously! the whatIsThis is doing the same as before- the whole object trickyTricky becomes "this", and gets joined to the strings passed into whatIsThis as parameters.

 console.assert(whatIsThis.call(confusing) === "[object Object],,")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//The same thing happens as when we use whatIsThis to call trickyTricky- the whole object becomes "this". Results do not change just because the content of the objects are different.

console.assert(whatIsThis.call(confusing, 'hello') === "[object Object],hello,")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//"This" is set to the object "confusing", and that is joined to the string "hello" by the whatIsThis function.

console.log(whatIsThis.apply(trickyTricky))
console.assert(whatIsThis.apply(trickyTricky) === "[object Object],,")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//"This" is set to the object trickyTricky, and nothing else was passed in as the arguments.

console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === "[object Object],nice,job")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
// Apply takes an array as its arguments, but runs the items through the whatIsThis function just as call does with strings.

console.assert(whatIsThis.apply(confusing, 'nice', 'job') === TypeError)
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//Apply needs an array as its second argument, so when it is fed strings instead it shows an error.

console.assert(inAFunction('what will', 'happen?') === "Sally,what will,happen?")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//cool! "This" is specifically set to the name "Sally" within the inAFunction function. The whatIsThis function invoked within inAFunction joins "this" to other arguments in a string as it usually does.

 try{
     console.log(inAFunction.test3('A','B'))
     console.assert(inAFunction.test3('A', 'B') === FILL_ME_IN)
 } catch(e){
     log(e)
 }
// // Once you've figured out what the output/result is, answer here in a comment: Why is this so?
//It doesn't seem to do anything/respond to the console log statement. Is that because it is inside a function, or because test3 is not defined anywhere

var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === "Sally,what will,happen?")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//basically, newObject is a copy of our function inAFunction (even though we called it object. . .), so it does the exact same thing

var newObject2 = new inAFunction('what will', 'happen?')
console.log(newObject2.test3('C','D'))
//console.assert(newObject2.test3('C', 'D') === )
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//Doesn't seem to do anything. Is that because test3 isn't defined anywhere?

console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === "[object Object],face,book")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//

console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === "[object Object],foo,bar")
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
