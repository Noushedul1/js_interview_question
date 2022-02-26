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

// 5: FizzBuzz 
// var fizzbuzz = (str)=>{
//     for(var i = 1; i<= 100; i++){
//         if(i % 15===0 && i % 5===0){
//             console.log('FizzBuzz');
//         }
//         else if(i % 3 === 0){
//             console.log('Fizz');
//         }
//         else if(i % 5 === 0){
//             console.log('Buzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
// console.log(fizzbuzz());

// 6: COUNT MAX CHARACTER 
// var charcount = (str)=>{
//     var charMap = {};
//     str.split('').forEach(char=>{
//         if(charMap[char]){
//             charMap[char]++;
//         }
//         else{
//             charMap[char] = 1;
//         }
//     });
//     console.log(charMap);
// }
// console.log(charcount('javascript'));

// 7: ADD ALL NUMBERS 
// var addAll = (...numbers)=>{
//     return numbers.reduce((total,num)=>total+num,0);
// }
// console.log(addAll(1,2,3,4,5));

// 8: EVEN AND ODD SUMS 
// var evenOddSum = (arr)=>{
//     var evenSum = 0;
//     var oddSum = 0;
//     arr.forEach(num=>(num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
//     return [evenSum, oddSum];
// }
// console.log(evenOddSum([50,60,60,45,71]));