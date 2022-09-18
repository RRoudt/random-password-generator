const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswords = document.getElementById("generate-passwords")
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let passwordOne = ""
let passwordTwo = ""

generatePasswords.addEventListener("click", function () {
    passwordOne = ""
    passwordTwo = ""
    let passwordLength = document.getElementById("password-length").value
    
    // Run two for loops, and in each loop:
    // - Run for the passwordLength
    // - Generate a random number for the length of the characters array
    // - Round down the random number
    // - Assign the character corresponding to the number to the password element
    
    for (let i = 0; i < passwordLength; i++) {
        let randomChar = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomChar]
        passwordOneEl.textContent = passwordOne
    }
    for (let i = 0; i < passwordLength; i++) {
        let randomChar = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomChar]
        passwordTwoEl.textContent = passwordTwo
    }
})

passwordOneEl.addEventListener("click", function () {
    navigator.clipboard.writeText(passwordOne)
    passwordOneEl.textContent = "Password copied!"
})

passwordTwoEl.addEventListener("click", function () {
    navigator.clipboard.writeText(passwordTwo)
    passwordTwoEl.textContent = "Password copied!"
})