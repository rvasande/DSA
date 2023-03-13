var string = prompt("please enter value")
var strLen = string.length
var reverseStr = ''
for(var i = strLen-1 ; i>=0 ; i--){
   reverseStr += string[i]
}
console.log(reverseStr);