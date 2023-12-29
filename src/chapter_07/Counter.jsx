import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  //컴포넌트 내에서 직접 메타 태그를 변경해서는 안된다. side effect는 컴포넌트의 렌더링에 방해가 된다.
  // componentDidMount, componentDidUpdate와 비슷하게 작동
  useEffect(() => { // 모든 컴포넌트가 업데이트 될 때마다 호출.
    // 브라우저 API를 사용해서 document의 title을 업데이트
    document.title = `총 ${count}번 클릭했습니다.`;
  });

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  )
}

export default Counter;