const temp = document.getElementById("temperature");
const celsius = document.getElementById("toCelsius");
const fahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");

const submit = document.getElementById("submit");

submit.onclick = function () {

    let tempValue = temp.value;
    tempValue = Number(tempValue);

    if (isNaN(tempValue)) {
        result.textContent = "Please enter a valid temperature";
    } else if (celsius.checked) {
        let convertedTemp = (tempValue - 32) * (5 / 9);
        result.textContent = `The temperature in Celsius is: ${convertedTemp.toFixed(2)}°C`;
        
    } else if (fahrenheit.checked) {
    let convertedTemp = tempValue * (9 / 5) + 32;
    result.textContent = `The temperature in Fahrenheit is: ${convertedTemp.toFixed(2)}°F`;
    }
    else{
        result.textContent = "Please select a unit";
    }
}
