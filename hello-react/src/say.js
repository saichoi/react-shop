// 7-1. 함수형 컴포넌트 - useState
// import React, { useState } from "react";

// const Say = () => {
//   // 배열의 첫번째 인자는 현재 상태(message)
//   //            두번째 인자는 변경되는 상태(setMesaage) 
//   const [message, setMessage] = useState("");
//   const onClickEnter = () => setMessage("안녕하세요!");
//   const onClickLeave = () => setMessage("안녕히 가세요!");

// return (
//     <div>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1>{message}</h1>
//     </div>
//   );
// };


// export default Say;








// 7-1. 함수형 컴포넌트 - useState 한 컴포넌트에서 여러번 사용
import React, { useState } from "react";

const Say = () => {
  // 배열의 첫번째 인자는 현재 상태(message)
  //            두번째 인자는 변경되는 상태(setMesaage) 
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  const [number, setNumber] = useState(0);

return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color:"red"}} onClick={()=>{setColor("red")}}>빨간색</button>
      <button style={{color:"green"}} onClick={()=>{setColor("green")}}>초록색</button>
      <button style={{color:"blue"}} onClick={()=>{setColor("blue")}}>파란색</button>
      {number}
      <button onClick={ ()=>{setNumber(number+1);}}>+1</button>
      
    </div>
  );
};


export default Say;












