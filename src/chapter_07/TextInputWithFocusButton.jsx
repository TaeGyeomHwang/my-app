import React, { useRef } from "react";

function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    // current는 마운트된 input element를 가리킴
    inputElem.current.focus();
  };

  return (
    <>
      <input ref={inputElem} type="text" />
      <button onClick = {onButtonClick} >Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;