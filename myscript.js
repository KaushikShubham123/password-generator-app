let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let genBtn = document.getElementById("genBtn");
let copyicon = document.getElementById("copyicon")
let strength1 = document.getElementById("strength1")
let strength2 = document.getElementById("strength2")
let strength3 = document.getElementById("strength3")
let strength4 = document.getElementById("strength4")

sliderValue.textContent = inputSlider.value;
showStrength(inputSlider.value);

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
    console.log(inputSlider.value, typeof inputSlider.value)
    showStrength(inputSlider.value);
});
genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";


function generatePassword() {
    let genPassword = "";
    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";
    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {

        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copyicon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {

        navigator.clipboard.writeText(passBox.value)
    }
})


function showStrength(currentSliderValue) {

    strength1.style.backgroundColor = "unset";
    strength2.style.backgroundColor = "unset";
    strength3.style.backgroundColor = "unset";
    strength4.style.backgroundColor = "unset";
    if (currentSliderValue >= 1) {
        strength1.style.backgroundColor = "rgb(0, 255, 89)";
    }
    if (currentSliderValue >= 8) {
        strength2.style.backgroundColor = "rgb(0, 255, 89)";
    }
    if (currentSliderValue >= 15) {
        strength3.style.backgroundColor = "rgb(0, 255, 89)";
    }
    if (currentSliderValue >= 20) {
        strength4.style.backgroundColor = "rgb(0, 255, 89)";
    }
}