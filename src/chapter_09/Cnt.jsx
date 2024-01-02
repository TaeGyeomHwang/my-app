import React, { useState } from "react";

function Cnt() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount((prevCount) => prevCount + 1);
    setCount(count+1);
    // 왜 count++는 안되는지?
  }

  return (
    <div>
      {count ? <h1>현재 카운트: {count}</h1> : ""}
      <button onClick={increaseCount}>증가</button>
    </div>
  )
}

export default Cnt;