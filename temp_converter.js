// Set this variable to a starting Fahrenheit temperature...
var fahrenheit = 32;

// Enter conversion code below...
var fahrenheitToCelsius = (fahrenheit - 32)/1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67)/1.8;

var fahrenheitTemps = [fahrenheit, fahrenheitToCelsius, fahrenheitToKelvin];
// Enter console.log statements below...
//console.log("Farenheit: " + fahrenheit + " °F");
//console.log("Celsius: " + fahrenheitToCelsius + " °C");
//console.log("Kelvin: " + fahrenheitToKelvin + " °K");
console.log("Farenheit: " + fahrenheitTemps[0] + " °F");
console.log("Celsius: " + fahrenheitTemps[1] + " °C");
console.log("Kelvin: " + fahrenheitTemps[2] + " °K");
console.log("\n");
// Repeat the above for Celsius and Kelvin...
var celsius = 0;

var celsiusToFahrenheit = celsius * 1.8 + 32;
var celsiusToKelvin = celsius + 273.15;

var celsiusTemps = [celsius, celsiusToFahrenheit, celsiusToKelvin];

//console.log("Celsius: " + celsius + " °C");
//console.log("Farenheit: " + celsiusToFahrenheit + " °F");
//console.log("Kelvin: " + celsiusToKelvin + " °K");
console.log("Celsius: " + celsiusTemps[0] + " °C");
console.log("Farenheit: " + celsiusTemps[1] + " °F");
console.log("Kelvin: " + celsiusTemps[2] + " °K");
console.log("\n");

var kelvin = 273.15;

var kelvinToFahrenheit = kelvin * 1.8 - 459.67;
var kelvinToCelsius = kelvin - 273.15;

var kelvinTemps = [kelvin, kelvinToFahrenheit, kelvinToCelsius];

//console.log("Kelvin: " + kelvin + " °K");
//console.log("Farenheit: " + kelvinToFahrenheit.toFixed(2) + " °F");
//console.log("Celsius: " + kelvinToCelsius + " °C");
console.log("Kelvin: " + kelvinTemps[0] + " °K");
console.log("Farenheit: " + kelvinTemps[1].toFixed(2) + " °F");
console.log("Celsius: " + kelvinTemps[2] + " °C");
console.log("\n");
