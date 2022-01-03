// 6. 클래스형 컴포넌트의 state
// import React, { Component } from "react";
 
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state의 초깃값 설정하기
//     this.state = {
//       number: 0
//     };
//   }
//   render() {
//     const { number } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }
 
// export default Counter;

// 6-1.state 객체 안에 값이 여러개일 경우 
// import React, { Component } from "react";
 
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state의 초깃값 설정하기
//     this.state = {
//       number : 0,
//       favoriteNumber : 0
//     };
//   }
//   render() {
//     const { number, favoriteNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h1>바뀌지 않는 값 {favoriteNumber}</h1>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }
 
// export default Counter;













// 6-2.constructor 선언하지 않고 state 초기값 설정하기
// import React, { Component } from "react";
 
// class Counter extends Component {
//   state = {
//     number:0,
//     favoriteNumber:0
//   }
//   render() {
//     const { number, favoriteNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h1>바뀌지 않는 값 {favoriteNumber}</h1>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }
 
// export default Counter;











// 6-3-1.state 값 변경시 객체 대신 인자 전달하기 -> 한번만 반영됨
// import React, { Component } from "react";
 
// class Counter extends Component {
//   state = {
//     number:0,
//     favoriteNumber:0
//   }
//   render() {
//     const { number, favoriteNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h1>바뀌지 않는 값 {favoriteNumber}</h1>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState({ number: number + 2 });
//             this.setState({number:this.state.number+1})
//             // 한번만 반영된다 -> +1 만 된다.

//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }
 
// export default Counter;







// 6-3-2.state 값 변경시 객체 대신 인자 전달하기 -> prevState, props
// import React, { Component } from "react";
 
// class Counter extends Component {
//   state = {
//     number:0,
//     favoriteNumber:0
//   }
//   render() {
//     const { number, favoriteNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h1>바뀌지 않는 값 {favoriteNumber}</h1>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//           onClick={() => {
//             // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//             this.setState(prevState => { 
//               return{
//                 number : prevState.number + 1,
//                 favoriteNumber : prevState.favoriteNumber + 1 ,
//               }
//             });

//             this.setState(prevState => { 
//               return{
//                 number : prevState.number + 1
//               }
//             });

//             // -> 모두 반영된다.
            
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }
 
// export default Counter;











// 6-4. state 값 변경후 특정 작업 실행하기
import React, { Component } from "react";
 
class Counter extends Component {
  state = {
    number:0,
    favoriteNumber:0
  }
  render() {
    const { number, favoriteNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 {favoriteNumber}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState(
              { 
                number : number + 1
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
            
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
 
export default Counter;

