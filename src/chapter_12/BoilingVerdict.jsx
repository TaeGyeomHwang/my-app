import React from "react";

// 물의 끓음 여부를 알려주는 컴포넌트
function BoilingVerdict(props){
  if (props.celsius >=100){
    return <p>물이 끓습니다.</p>
  }
  return <p>물이 끓지 않습니다.</p>
}

export default BoilingVerdict;