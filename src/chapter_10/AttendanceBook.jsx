import React from "react";
// 출석부 출력하기
const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props){
  return(
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{`name: ${student.name}, id: ${student.id}`}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;