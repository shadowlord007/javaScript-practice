



function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbersChar = "0123456789"
    const symbolsChar = "!@#$%^&*()_+"

    let allowedChar = ""
    let password = ""

    allowedChar += includeLowerCase ? lowerCaseChar : "";
    allowedChar += includeUpperCase ? upperCaseChar : "";
    allowedChar += includeNumbers ? numbersChar : "";
    allowedChar += includeSymbols ? symbolsChar : "";

    if (length <= 0 ) {
        return "Password length should be greater than 0"
    }
    if (allowedChar.length === 0) {
        return "At least one character type should be included"
    }
    for (i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];

    }
    return password;

}


const passwordLength = 12
const includeLowerCase = true
const includeUpperCase = true
const includeNumbers = true
const includeSymbols = true



const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)
console.log(`Generate Password: ${password}`)