import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

// 온도 변환 함수
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function celsiusToAbsolute(celsius) {
  return (celsius + 273);
}
function fahrenheitToAbsolute(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9 + 273
}
function AbsoluteToCelsius(absolute) {
  return (absolute - 273);
}
function AbsoluteToFahrenheit(absolute) {
  return ((absolute - 273) * 9 / 5) + 32;
}

// 온도를 변환 후 리턴하는 함수
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  // 소수점 세번째 자리수까지 반올림
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// 섭씨온도와 화씨온도 표시하기, state가 하나이므로 자식요소의 영향이 부모까지 미친다.
function Calculator(props) {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (event) => {
    setTemperature(event.target.value);
    setScale('c');
  }

  const handleFahrenheitChange = (event) => {
    setTemperature(event.target.value);
    setScale('f');
  }

  const handleAbsoluteChange = (event) => {
    setTemperature(event.target.value);
    setScale('a');
  }

  const celsius = scale !== 'c' ?
    (scale === 'f' ? tryConvert(temperature, fahrenheitToCelsius)
      : tryConvert(temperature, AbsoluteToCelsius))
    : temperature;
  const fahrenheit = scale !== 'f' ?
    (scale === 'c' ? tryConvert(temperature, celsiusToFahrenheit)
      : tryConvert(temperature, AbsoluteToFahrenheit))
    : temperature;
  const absolute = scale !== 'a' ?
    (scale === 'c' ? tryConvert(temperature, celsiusToAbsolute)
      : tryConvert(temperature, fahrenheitToAbsolute))
    : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <TemperatureInput
        scale="a"
        temperature={absolute}
        onTemperatureChange={handleAbsoluteChange}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  )
}

export default Calculator;