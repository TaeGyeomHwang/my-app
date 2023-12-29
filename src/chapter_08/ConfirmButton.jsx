import React from "react";
// 클릭 이벤트 처리하기

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props); //  부모 생성자 호출
    this.state = {
      isConfirmed: false,
    };  //  state 선언

    // bind 사용하기
    // this.handleConfirm = this.handleConfirm.bind(this);
  }

  // 클래스 필드 문법 사용하기(변수로 만들어서 함수를 담게)
  handleConfirm = () => {
    this.setState((prevState)=>({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  // handleConfirm() {
  //   this.setState((prevState) => ({
  //     isConfirmed: !prevState.isConfirmed,
  //   }));
  // }

  render() {
    return (
      <button
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}

export default ConfirmButton;
