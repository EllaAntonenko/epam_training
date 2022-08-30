//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches 
//the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const string = 'ahb acb aeb aeeb adcb axeb'
const regex = /a.b/gi
const a = string.matchAll(regex)
const matchAll = Array.from(a)
console.log(matchAll)