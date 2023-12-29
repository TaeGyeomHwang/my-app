import React from "react";
// 실습: 시계 만들기

function Tick(){
  return(
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

export default Tick;