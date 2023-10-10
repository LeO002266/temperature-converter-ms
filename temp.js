document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertButton = document.getElementById("convertButton");
    const resultContainer = document.getElementById("result");
    const inputValue = document.getElementById("inputValue");
    const fromUnitDisplay = document.getElementById("fromUnitDisplay");
    const outputValue = document.getElementById("outputValue");
    const toUnitDisplay = document.getElementById("toUnitDisplay");

    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        if (!isNaN(temperature)) {
            const from = fromUnit.value;
            const to = toUnit.value;
            let result;

            if (from === "celsius" && to === "fahrenheit") {
                result = (temperature * 9/5) + 32;
            } else if (from === "celsius" && to === "kelvin") {
                result = temperature + 273.15;
            } else if (from === "celsius" && to === "rankine") {
                result = (temperature + 273.15) * 9/5;
            } else if (from === "fahrenheit" && to === "celsius") {
                result = (temperature - 32) * 5/9;
            } else if (from === "fahrenheit" && to === "kelvin") {
                result = (temperature - 32) * 5/9 + 273.15;
            } else if (from === "fahrenheit" && to === "rankine") {
                result = temperature + 459.67;
            } else if (from === "kelvin" && to === "celsius") {
                result = temperature - 273.15;
            } else if (from === "kelvin" && to === "fahrenheit") {
                result = (temperature - 273.15) * 9/5 + 32;
            } else if (from === "kelvin" && to === "rankine") {
                result = temperature * 9/5;
            } else if (from === "rankine" && to === "celsius") {
                result = (temperature - 491.67) * 5/9;
            } else if (from === "rankine" && to === "fahrenheit") {
                result = temperature - 459.67;
            } else if (from === "rankine" && to === "kelvin") {
                result = temperature * 5/9;
            } else {
                result = temperature; // Default to the same unit
            }

            inputValue.textContent = temperature;
            fromUnitDisplay.textContent = fromUnit.options[fromUnit.selectedIndex].text;
            outputValue.textContent = result.toFixed(2);
            toUnitDisplay.textContent = toUnit.options[toUnit.selectedIndex].text;
            resultContainer.classList.remove("hidden");
        } else {
            alert("Please enter a valid temperature value.");
        }
    }

    convertButton.addEventListener("click", convertTemperature);
});