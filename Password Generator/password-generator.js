// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordNumbers = [0][9]
var passwordLetters = ""
var passwordSymbols = ""
var password = "generatePassword"



console.log()
console.log("Do you want symbols in your password?")

//  for (let i = 0; i => passwordNumbers.length; i++) {
//  console.log(i);
//  }

//  Write password to the #password input
  function writePassword() {
var password = generatePassword()
  var passwordText = document.querySelector("#password");
  
 }

//   Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
window.alert("Do you want letters in your password?")
window.prompt("Yes or No")
window.alert("Do you want numbers in your password?")
window.prompt("Yes or No")
window.alert("Do you want symbols in your password?")
window.prompt("Yes or No")
window.prompt("Pick a number from 8 to 128")