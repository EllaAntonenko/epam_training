//- Your name is saved in the payment terminal, 
//write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

let myName = "Ella";
function defineName(myName){
if(myName === "Ella"){
    return ("Hello, " + myName)
} 
    return ("There is no such name")
}
console.log(defineName("Ella")) 