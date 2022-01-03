// 1.함수형 컴포넌트
// import React from 'react';
// import "./App.css";

// const App = () => {
//   const name = "리액트";
//   return <div className='react'>{name}</div>
// };

// export default App;










// 2.클래스형 컴포넌트
// import React, {Component} from 'react';
// import "./App.css";

// class App extends Component{
//   render(){
//     const name = "react";
//      return <div className='react'>{name}</div>
//   }
// }

// export default App;











//  3.컴포넌트 불러오기
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return (
//     <div>
//       <MyComponent/>
//       <MyComponent></MyComponent>
//     </div>
//   );
// };

// export default App;







// 4.props 사용하는 법
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent name="React"/>;
// };

// export default App;










// 4-1. defaultProps
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent/>;
// };

// export default App;










// 4-2. children
// import React from 'react';
// import MyComponent from './MyComponent';


// const App = () => {
//   return (
//     <>
//       <MyComponent name="리액트"/>
//       <MyComponent>칠드런</MyComponent>
//     </>
//     );
// };

// export default App;






// 4-3. 비구조화 할당 문법
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent name="리액트"/>
// };

// export default App;






// 4-4. propTypes
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   // return <MyComponent name={3}/>
//   return <MyComponent name="리액트"/>
// };

// export default App;










// 4-4. propTypes
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   // return <MyComponent name={3}/>
//   return <MyComponent name="리액트"/>
// };

// export default App;








// 4-5.isRequired
// 5. 클래스형 컴포넌트에서 props 사용하기
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent name="리액트" favoriteNumber={3}/>
// };

// export default App;







// 6.  클래스형 컴포넌트의 state
// 6-1.state 객체 안에 값이 여러개일 경우 
// 6-2.constructor 선언하지 않고 state 초기값 설정하기
// 6-3.state 값 변경시 객체 대신 인자 전달하기
// 6-4. state 값 변경후 특정 작업 실행하기
// import React from 'react';
// import Counter from './Counter';

// const App = () => {
//   return (
//     <div>
//       <Counter></Counter>
//     </div>
//   );
// };

// export default App;







// 7. 함수형 컴포넌트 - 배열 비구조화 할당
// import React from 'react';

// const App = () => {

//   // const array = [1, 2];
//   // const one = array[0];
//   // const two = array[1];

//   const array = [1, 2];
//   const [one, two] = array;

//   return (
//     <div>
//       {array}<br/>
//       {array[0]}<br/>
//       {array[1]}<br/>
//       {one}<br/>
//       {two}<br/>
//     </div>
//   );
// };

// export default App;









// 7-1. 함수형 컴포넌트 - useState
import React from 'react';
import Say from './say';

const App = () => {
  return (
    <div>
      <Say></Say>
    </div>
  );
};

export default App;






// 이벤트 핸들링
// import React from 'react';
// import EventPractice from './EventPractice';
 
// const App = () => {
// return <EventPractice />;
// };
 
// export default App;