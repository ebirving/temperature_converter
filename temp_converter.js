var whichTemp = prompt("Type f for fahrenheit, c for celsius, or k for Kelvin.")

if(whichTemp === "f") {
  var fahrenheit = prompt("What is the starting temperature in °F?")
  var fahrenheitToCelsius = (fahrenheit - 32)/1.8
  var fahrenheitToKelvin = (fahrenheit + 459.67)/1.8
  var fahrenheitTemps = []
  fahrenheitTemps.push("Farenheit: " + fahrenheit + " °F\n")
  fahrenheitTemps.push("Celsius: " + fahrenheitToCelsius + " °C\n")
  fahrenheitTemps.push("Kelvin: " + fahrenheitToKelvin + " °K\n")
  for(i = 0; i <= 2; i++) {
    console.log(fahrenheitTemps[i]);
  }
}

if(whichTemp === "c") {
  var celsius = prompt("What is the starting temperature in °C?")
  var celsiusToFahrenheit = celsius * 1.8 + 32
  var celsiusToKelvin = celsius + 273.15
  var celsiusTemps = []
  celsiusTemps.push("Celsius: " + celsius + " °C\n")
  celsiusTemps.push("Farenheit: " + celsiusToFahrenheit + " °F\n")
  celsiusTemps.push("Kelvin: " + celsiusToKelvin + " °K\n")
  while (celsiusTemps.length === 3) {
    console.log(celsiusTemps.join("\n"));
    celsiusTemps.push("");
  }
  celsiusTemps.pop()
}

if(whichTemp === "k") {
  var kelvin = prompt("What is the starting temperature in °K?")
  var kelvinToFahrenheit = kelvin * 1.8 - 459.67
  var kelvinToCelsius = kelvin - 273.15
  var kelvinTemps = []
  kelvinTemps.push(kelvin)
  kelvinTemps.push(kelvinToFahrenheit)
  kelvinTemps.push(kelvinToCelsius)
  console.log("Kelvin: " + kelvinTemps[0] + " °K\nFarenheit: " + kelvinTemps[1].toFixed(2) + " °F\nCelsius: " + kelvinTemps[2] + " °C")
}
