import React, { useState } from "react";

function NameForm(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    // 사용자가 입력한 값을 함수로 변경할 수도 있음
    // input에 들어가는 값이 변경될 때마다 실행 ex) 네이버 검색창의 추천 검색어 제공 처럼 활용 가능
    setValue(event.target.value.toUpperCase());
  }

  const handleSubmit = (event) => {
    alert('입력한 이름: ' + value);
    // 서버가 없기 때문에 기본적으로 설정된 동작 막음
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={value} onChange={handleChange} />
        {/* <textarea type="text" value={value} onChange={handleChange} /> */}
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default NameForm;