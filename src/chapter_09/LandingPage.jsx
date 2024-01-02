import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  // 자식 컨테이너가 부모 컨테이너의 상태를 변경하는 구조
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const onClickLogin = () => {
    setIsloggedIn(true);
  };

  const onClickLogout = () => {
    setIsloggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
      {/* 만약 텍스트도 state에 영향 받게 하고싶다면? */}
      {/* {isLoggedIn && <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>} */}
    </div>
  );
}

export default LandingPage;