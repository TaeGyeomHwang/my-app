import React from "react";

// 온도를 입력받기 위한 컴포넌트
const scaleNames = {
  c: '섭씨',
  f: '화씨',
  a: '절대온도'
};

function TemperatureInput(props){
  const {scale, temperature, onTemperatureChange} = props

  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위: {scaleNames[scale]}):</legend>
      <input value={temperature} onChange={onTemperatureChange} />
    </fieldset>
  )
}

export default TemperatureInput;