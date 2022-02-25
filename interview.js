// 1 : revesre a string 
// old way 
// var reverseString = (str)=>{
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }
// var reverseString = reverseString('rakibul');
// console.log(reverseString);
// var reverseString = (str)=>{
//     var revString = '';
//     str.split('').forEach(char=>revString = char + revString);
//     return revString;
// }
// var reverseString = reverseString('noushedul');
// console.log(reverseString);

// solve this using reduce 
// var reverseString = (str)=>{
//     return str.split('').reduce((revString,char)=>char+revString,'');
// };
// var reverseString = reverseString('akib');
// console.log(reverseString);

// 2: VALIDATE A PALINDROME 
// return true if palindrome and false if not 

// var palindrome = (str)=>{
//     var newPalindrome = str
//                         .split('')
//                         .reverse()
//                         .join('');
//     return newPalindrome === str;
// }
// var  palindrome = palindrome('racecar'); 
// madam also palindrome string 
// console.log(palindrome);

// 3: REVERSE A INTEGER 
// var reverseInt = (int)=>{
//     var newreverseInt = int.toString().split('').reverse().join('');
//     return parseInt(newreverseInt) * Math.sign(int);
// }
// console.log(reverseInt(123));

//  4: CAPITALIZE LETTERS
// var capitalizeLetter = (str)=>{
//     return str
//             .toLowerCase()
//             .split(' ')
//             .map(word=>word[0].toUpperCase() + word.substring(1))
//             .join(' ');
// }
// console.log(capitalizeLetter('i loVe javascript'));
