import React, { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

// 컨텍스트를 사용하여 테마 변경 기능 만들기
function DarkOrLight(props){
  const [theme, setTheme] = useState("light")

  // 의존성 배열에 있는 값이 변경될 경우에만 재렌더링
  const toggleTheme = useCallback(()=>{
    if(theme == "light"){
      setTheme("dark");
    }else if(theme == "dark"){
      setTheme("light");
    }
  },[theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;