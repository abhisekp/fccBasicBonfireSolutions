/*
MY SOLUTIONS TO FREECODECAMP BASIC BONFIRE CHALLENGES
FCC Profile http://www.freecodecamp.com/abhisekp
ShortURL: http://j.mp/abhisekpFCCbasicBonfireSolutions
Contact Me: https://gitter.im/abhisekp
Github Profile: https://github.com/abhisekp
*/
/*


# 01. Bonfire: Meet Bonfire
> Make this function return true no matter what.
http://freecodecamp.com/challenges/bonfire-meet-bonfire
*/
function meetBonfire(argument) {
    // Good luck!
    console.log("you can read this function's argument in the developer tools",
        argument);

    return true;
}
/*


# 02. Bonfire: Reverse a String
> Reverse the provided string. Your result must be a string.
http://freecodecamp.com/challenges/bonfire-reverse-a-string
*/
function reverseString(str) {
    return str.split("").reverse().join("");
}
/*


# 03. Bonfire: Factorialize a Number
> Return the factorial of the provided integer.
http://freecodecamp.com/challenges/bonfire-factorialize-a-number
*/
function factorializeRecursive(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return num * factorializeRecursive(num - 1);
    }
}

function factorializeWhile(num) {
    var fact = 1;
    while (num) {
        fact *= num--;
    }
    return fact;
}
/*


# 04. Bonfire: Check for Palindromes
> Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
http://freecodecamp.com/challenges/bonfire-check-for-palindromes
*/
function palindromeReverse(str) {
    var normalizedStr = str.replace(/[\W_]/g, "").toLowerCase();
    var reversedStr = normalizedStr.split("").reverse().join("");
    return normalizedStr === reversedStr;
}

function palindromeFor(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
        if (str[i] !== str[len - i]) {
            return false;
        }
    }
    return true;
}
/*


# 05. Bonfire: Find the Longest Word in a String
> Return the length of the longest word in the provided sentence.
http://freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string
*/
function findLongestWordFor(str) {
    var maxWordLength = 0,
        words = str.split(" ");
    for (var i = 0, len = words.length; i < len; i++) {
        if (words[i].length > maxWordLength) {
            maxWordLength = words[i].length;
        }
    }

    return maxWordLength;
}

function findLongestWordForEach(str) {
    var maxWordLength = 0,
        words = str.split(" ");

    words.forEach(function(curr) {
        if (curr.length > maxWordLength) {
            maxWordLength = curr.length;
        }
    });

    return maxWordLength;
}

function findLongestWordReduce(str) {
    var maxWordLength = 0,
        words = str.split(" ");
    maxWordLength = words.reduce(function(max, curr) {
        return curr.length > max ? curr.length : max;
    }, 0);

    return maxWordLength;
}
/*


# 06. Bonfire: Title Case a Sentence
> Return the provided string with the first letter of each word capitalized.
http://freecodecamp.com/challenges/bonfire-title-case-a-sentence
*/
function titleCaseFor(str) {
    str = str.toLowerCase();
    var words = str.split(" ");
    for (var i = 0, len = words.length; i < len; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    str = words.join(" ");

    return str;
}

function titleCaseMap(str) {
    str = str.toLowerCase();
    var words = str.split(" ");
    str = words.map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    }).join(" ");

    return str;
}

function titleCaseReplace(str) {
    return str.replace(/(\w)([\w']*)/g, function(match, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase();
    });
}
/*


# 07. Bonfire: Return Largest Numbers in Arrays
> Return an array consisting of the largest number from each provided sub-array.
http://freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays
*/
function largestOfFourFor(arr) {
    // You can do this!
    for (var i = 0; i < arr.length; i++) {
        var max = arr[i][0];
        for (var j = 1; j < arr.length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        arr[i] = max;
    }
    return arr;
}

function largestOfFourMap(arr) {
    // You can do this!
    // Yes, I can. :P
    return arr.map(Function.apply.bind(Math.max, null));
}
/*


# 08. Bonfire: Confirm the Ending
> Check if a string (first argument) ends with the given target string (second argument).
http://freecodecamp.com/challenges/bonfire-confirm-the-ending
*/
function endSubstr(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // "I find my own luck!" -- AbhisekP.

    return target === str.substr(str.length - target.length);
}

function endRegExp(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // "I find my own luck!" -- AbhisekP.

    return new RegExp(target + "$").test(str);
}

function endEndsWith(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // "I find my own luck!" -- AbhisekP.
    return str.endsWith(target);
}

function endLastIndexOf(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // "I find my own luck!" -- AbhisekP.

    return str.lastIndexOf(target) === str.length - target.length;
}
/*


# 09. Bonfire: Repeat a string repeat a string
> Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
http://freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string
*/
function repeatWhile(str, num) {
    // repeat after me
    // am i in class 2 or something?
    var repeated = "";
    while (num-- > 0) {
        repeated += str;
    }
    return repeated;
}

function repeatRepeat(str, num) {
    // repeat after me
    // am i in class 2 or something?

    return num <= 0 ? "" : str.repeat(num);
}
/*


# 10. Bonfire: Truncate a string
> Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.
http://freecodecamp.com/challenges/bonfire-truncate-a-string
*/
function truncateSlice(str, num) {
    // Clear out that junk in your trunk
    // trunk is loaded

    if (str.length > num) {
        str = str.slice(0, num - 3) + "...";
    }

    return str;
}

function truncateRegExp(str, num) {
    // Clear out that junk in your trunk
    // trunk is loaded

    return new RegExp("^(.{0," + num + "})(?!.+)$").test(str) ? str : str.slice(
        0, num - 3) + "...";
}

function truncateSliceOneLiner(str, num) {
    // Clear out that junk in your trunk
    // trunk is loaded

    return str.length <= num ? str : str.slice(0, num - 3) + "...";
}
/*


# 11. Bonfire: Chunky Monkey
> Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
http://freecodecamp.com/challenges/bonfire-chunky-monkey
*/
function chunkFor(arr, size) {
    // Break it up
    // It's already broken :(
    arr = arr.slice();
    var arr2 = [];
    for (var i = 0, len = arr.length; i < len; i += size) {
        arr2.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return arr2;
}
/*


# 12. Bonfire: Slasher Flick
> Return the remaining elements of an array after chopping off n elements from the head.
http://freecodecamp.com/challenges/bonfire-slasher-flick
*/
function slasherSlice(arr, howMany) {
    // it doesn't always pay to be first
    // well, now my head is chopped off >:(
    return arr.slice(howMany);
}
/*


# 13. Bonfire: Mutations
> Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
http://freecodecamp.com/challenges/bonfire-mutations
*/
function mutationEvery(arr) {
    // change is the only constant in universe

    return arr[1].toLowerCase().split("").every(function(curr) {
        return arr[0].toLowerCase().indexOf(curr) >= 0;
    });
}

function mutationFor(arr) {
    // change is the only constant in universe

    var test = arr[1].toLowerCase(),
        target = arr[0].toLowerCase();

    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) {
            return false;
        }
    }

    return true;
}
/*


# 14. Bonfire: Falsey Bouncer
> Remove all falsey values from an array.
http://freecodecamp.com/challenges/bonfire-falsey-bouncer
*/
function bouncerFilter(arr) {
    // Don't show a false ID to this bouncer.
    // I've a hammer fist.
    return arr.filter(Boolean);
}

function bouncerFor(arr) {
    // Don't show a false ID to this bouncer.
    // I've a hammer fist.
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            filtered.push(arr[i]);
        }
    }

    return filtered;
}
/*


# 15. Bonfire: Where art thou
> Make a function that looks through an array (first argument) and returns an array of all objects that have equivalent property and value pair (second argument).
http://freecodecamp.com/challenges/bonfire-where-art-thou
*/
function whereThouReduce(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function(obj) {
        // return a Boolean value for filter callback using reduce method
        return srcKeys.reduce(function(res, key) {
            // reduce to Boolean value to be returned by reduce method
            return obj.hasOwnProperty(key) && obj[key] ===
                source[key];
        }, false);
    });
}

function whereThouFor(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function(obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            // check if obj in collection doesn't have the key
            // or if it does have the key,
            // then check if the property value doesn't match the value in source
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !==
                source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

function whereThouEvery(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function(obj) {
        // return a Boolean value for `filter` method
        return srcKeys.every(function(key) {
            // reduce to Boolean value to be returned for `every` method
            return obj.hasOwnProperty(key) && obj[key] ===
                source[key];
        });
    });
}
/*


# 16. Bonfire: Seek and Destroy
> You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
http://freecodecamp.com/challenges/bonfire-seek-and-destroy
*/
function destroyerFor(arr) {
    // Remove all the values
    // I don't like the emptiness :P

    var args = [].slice.call(arguments, 1);
    return arr.filter(function(el) {
        for (var i = 0; i < args.length; i++) {
            if (args[i] === el) {
                return false;
            }
        }

        return true;
    });
}

function destroyerReduce(arr) {
    // Remove all the values
    // I don't like the emptiness :P

    // grab the other args
    var args = [].slice.call(arguments, 1);

    // filter the given array
    return arr.filter(function(el) {
        // return a Boolean true if args elements doesn't match el
        return args.reduce(function(res, curr) {
            return res && curr !== el;
        }, true);
    });
}

function destroyerIndexOf(arr) {
    // Remove all the values
    // I don't like the emptiness :P

    // grab the other args
    var args = [].slice.call(arguments, 1);

    // filter the given array
    return arr.filter(function(el) {
        // return elements not in the args
        return args.indexOf(el) === -1;
    });
}
/*


# 17. Bonfire: Where do I belong
> Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
http://freecodecamp.com/challenges/bonfire-where-do-i-belong
*/
function numSort(a, b) {
    return a - b;
}

function whereBelongReduce(arr, num) {
    // Find my place in this sorted array.
    // Why? Are you lost?

    return arr.sort(numSort).reduce(function(pos, curr, index) {
        return num <= curr ? pos : index + 1;
    }, 0);
}

function whereSortOneLiner(arr, num) {
    return arr.push(num) && arr.sort(function(a, b) {
        return a - b;
    }).indexOf(num);
}
/*


NOTE: You may use the following require statement to access functions defined in this file from another notebook.
"var abhisekpFCCbasicBonfireSolutions = require('notebook')('abhisekp/fcc-basic-bonfire-solutions/4.0.0');"
*/
/*



*/
module.exports = {
    meetBonfire: meetBonfire,
    reverseString: reverseString,
    factorializeRecursive: factorializeRecursive,
    factorializeWhile: factorializeWhile,
    palindromeReverse: palindromeReverse,
    palindromeFor: palindromeFor,
    findLongestWordFor: findLongestWordFor,
    findLongestWordForEach: findLongestWordForEach,
    findLongestWordReduce: findLongestWordReduce,
    titleCaseFor: titleCaseFor,
    titleCaseMap: titleCaseMap,
    titleCaseReplace: titleCaseReplace,
    largestOfFourFor: largestOfFourFor,
    largestOfFourMap: largestOfFourMap,
    endSubstr: endSubstr,
    endRegExp: endRegExp,
    endEndsWith: endEndsWith,
    endLastIndexOf: endLastIndexOf,
    repeatWhile: repeatWhile,
    repeatRepeat: repeatRepeat,
    truncateSlice: truncateSlice,
    truncateRegExp: truncateRegExp,
    truncateSliceOneLiner: truncateSliceOneLiner,
    chunkFor: chunkFor,
    slasherSlice: slasherSlice,
    mutationEvery: mutationEvery,
    mutationFor: mutationFor,
    bouncerFilter: bouncerFilter,
    bouncerFor: bouncerFor,
    whereThouReduce: whereThouReduce,
    whereThouFor: whereThouFor,
    whereThouEvery: whereThouEvery,
    destroyerFor: destroyerFor,
    destroyerReduce: destroyerReduce,
    destroyerIndexOf: destroyerIndexOf,
    whereBelongReduce: whereBelongReduce,
    whereSortOneLiner: whereSortOneLiner
};
