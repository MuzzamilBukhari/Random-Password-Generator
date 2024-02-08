const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "1234567890";
const symbols = `"~!@#$%^&*()_-+={[}]|\:;'<,>.?/` + "`";
const allChars = lowerCase + upperCase + nums + symbols;
let length = 8;
let passwordDiv = document.querySelector("#password");
const generatePassword = () => {
    let password = "";
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordDiv.value = password;
}

const copyPassword = () => {
    passwordDiv.select();
    document.execCommand("copy");
}