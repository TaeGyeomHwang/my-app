import React from "react";
import styled from "styled-components";

// styled-components를 사용하여 스타일링해 보기

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-start;
  background-color: lightgrey;
`;

const Block = styled.div`
  // 그때그때 변화해야 하는 부분은 props를 이용해서 바꿈
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [
  {
    label: "1",
    padding: "1rem",
    backgroundColor: "red",
  },
  {
    label: "2",
    padding: "3rem",
    backgroundColor: "green",
  },
  {
    label: "3",
    padding: "2rem",
    backgroundColor: "blue",
  },
];

function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItems) => {
        return (
          <Block
            padding={blockItems.padding}
            backgroundColor={blockItems.backgroundColor}
          >
            {blockItems.label}
          </Block>
        );
      })}
    </Wrapper>
  );
}

export default Blocks;