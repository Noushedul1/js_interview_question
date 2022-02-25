// 1 : revere a string 
// old way 
var reverseString = (str)=>{
    return str
        .split('')
        .reverse()
        .join('');
}
var reverseString = reverseString('rakibul');
console.log(reverseString);
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