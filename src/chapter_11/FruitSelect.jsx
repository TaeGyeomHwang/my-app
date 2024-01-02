import React, {useState} from "react";

const data = [
  {
    id: 1,
    type: 'apple',
    name: '사과',
  },
  {
    id: 2,
    type: 'banana',
    name: '바나나',
  },
  {
    id: 3,
    type: 'grape',
    name: '포도',
  },
  {
    id: 4,
    type: 'orange',
    name: '오렌지',
  },
]

function FruitSelect(props){
  const [value, setValue] = useState('grape');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit =(event) => {
    alert('선택한 과일: ' + value);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요:
        <select value={value} onChange={handleChange}>
          {/* 미리 태그를 작성해 두는게 아니라 데이터를 서버에서 받아올 경우는 forEach 함수나 map 함수를 사용한다. */}
          {data.map((e) => {
            return <option key={e.id} value={e.type}>{e.name}</option>;
          })}
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default FruitSelect;