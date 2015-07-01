// Set this variable to a starting Fahrenheit temperature...
var fahrenheit = 32;

// Enter conversion code below...
var fahrenheitToCelsius = (fahrenheit - 32)/1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67)/1.8;

// Enter console.log statements below...
console.log("Farenheit: " + fahrenheit + " °F");
console.log("Celsius: " + fahrenheitToCelsius + " °C");
console.log("Kelvin: " + fahrenheitToKelvin + " °K");
console.log("\n")
// Repeat the above for Celsius and Kelvin...
var celsius = 0;

var celsiusToFahrenheit = celsius * 1.8 + 32;
var celsiusToKelvin = celsius + 273.15;

console.log("Celsius: " + celsius + " °C");
console.log("Farenheit: " + celsiusToFahrenheit + " °F");
console.log("Kelvin: " + celsiusToKelvin + " °K");
console.log("\n")

var kelvin = 273.15;

var kelvinToFahrenheit = kelvin * 1.8 - 459.67;
var kelvinToCelsius = kelvin - 273.15;

console.log("Kelvin: " + kelvin + " °K");
console.log("Farenheit: " + kelvinToFahrenheit.toFixed(2) + " °F");
console.log("Celsius: " + kelvinToCelsius + " °C");
console.log("\n")
