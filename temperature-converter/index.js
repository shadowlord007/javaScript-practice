
const texBox = document.getElementById('texBox');
const toFarenhite = document.getElementById('toFarenhite');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');


function convert() {
    if(toFarenhite.checked) {
        let temp = Number(texBox.value);
        temp = temp * 9/5 + 32
        result.textContent = temp.toFixed(1) + "°F";

    }
    else if (toCelsius.checked) {
        let temp = Number(texBox.value);
        temp = (temp - 32) * (5/9)
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}