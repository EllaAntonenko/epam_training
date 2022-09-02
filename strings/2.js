//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const string1 = '2 + 3 223 2223'
const regex1 = /2 .* 3/
const isExit = string1.match(regex1)
console.log(isExit)