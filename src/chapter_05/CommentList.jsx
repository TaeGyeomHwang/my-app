import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "유재석",
    comment: "리액트 재미있어요~!",
  },
  {
    name: "강민경",
    comment: "저도 리액트 배워 보고 싶어요!!",
  },
]

function CommentList(props) {
  return (
    <div>
      {comments.map((e) => {  // e는 element의 줄임말
        return (
          <Comment name={e.name} comment={e.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;