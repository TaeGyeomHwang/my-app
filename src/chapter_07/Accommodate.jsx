import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";
// 훅을 사용한 컴포넌트 개발

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);
  // state 두개 선언

  useEffect(() => {
    console.log("============================");
    console.log("useEffect() is called");
    console.log(`isFull: ${isFull}`);
  });
  // isFull count 두개의 state에 반응

  useEffect(() => {
    // MAX_CAPACITY에 도달하면 setIsFull이 True.
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  },[count]);
  // count state에만 반응

  return(
    <div style={{padding: 16}}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
      {/* isfull이 ture일 경우 실행 */}
    </div>
  );
}

export default Accommodate;