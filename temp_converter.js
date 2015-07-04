var whichTemp = prompt("Type f for fahrenheit, c for celsius, or k for Kelvin.");

if(whichTemp === "f") {
  var fahrenheit = prompt("What is the starting temperature in °F?");
  var fahrenheitToCelsius = (fahrenheit - 32)/1.8;
  var fahrenheitToKelvin = (fahrenheit + 459.67)/1.8;
  var fahrenheitTemps = [];
  fahrenheitTemps.push(fahrenheit);
  fahrenheitTemps.push(fahrenheitToCelsius);
  fahrenheitTemps.push(fahrenheitToKelvin);
  console.log("Farenheit: " + fahrenheitTemps[0] + " °F");
  console.log("Celsius: " + fahrenheitTemps[1] + " °C");
  console.log("Kelvin: " + fahrenheitTemps[2] + " °K");
  console.log("\n");
}

if(whichTemp === "c") {
  var celsius = prompt("What is the starting temperature in °C?");;
  var celsiusToFahrenheit = celsius * 1.8 + 32;
  var celsiusToKelvin = celsius + 273.15;
  var celsiusTemps = [];
  celsiusTemps.push(celsius);
  celsiusTemps.push(celsiusToFahrenheit);
  celsiusTemps.push(celsiusToKelvin);
  console.log("Celsius: " + celsiusTemps[0] + " °C");
  console.log("Farenheit: " + celsiusTemps[1] + " °F");
  console.log("Kelvin: " + celsiusTemps[2] + " °K");
  console.log("\n");
}

if(whichTemp === "k") {
  var kelvin = prompt("What is the starting temperature in °K?");;
  var kelvinToFahrenheit = kelvin * 1.8 - 459.67;
  var kelvinToCelsius = kelvin - 273.15;
  var kelvinTemps = [];
  kelvinTemps.push(kelvin);
  kelvinTemps.push(kelvinToFahrenheit);
  kelvinTemps.push(kelvinToCelsius);
  console.log("Kelvin: " + kelvinTemps[0] + " °K");
  console.log("Farenheit: " + kelvinTemps[1].toFixed(2) + " °F");
  console.log("Celsius: " + kelvinTemps[2] + " °C");
  console.log("\n");
}
