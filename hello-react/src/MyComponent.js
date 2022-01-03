// 3.컴포넌트 내보내기
// import React from 'react';

// const MyComponent = () => {
//   return (
//     <div>
//       나의 첫 컴포넌트
//     </div>
//   );
// };

// export default MyComponent;











// 4.props 사용하는 법
// import React from 'react';

// const MyComponent = (props) => {
//   return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>
// };




// // 4-1. defaultProps
// MyComponent.defaultProps = {
//   name : "기본이름"
// }

// export default MyComponent;







// 4-2. children
// import React from 'react';

// const MyComponent = (props) => {

//   return (
//     <div>
//       안녕하세요. 제 이름은 {props.name}입니다.
//       children값은 {props.children}입니다.
//       </div>
//     );
// };

// export default MyComponent;







// 4-3비구조화 활당 문법
// import React from 'react';

// const MyComponent = (props) => {
//   const { name, children } = props;

//   return (
//     <div>
//       안녕하세요. 제 이름은 {name}입니다.
//       children값은 {children}입니다.
//       </div>
//     );
// };

// export default MyComponent;


// 4-4. propTypes
// import React from 'react';
// import { PropTypes} from 'prop-types';

// const MyComponent = (props) => {
//   const { name, children } = props;

//   return (
//     <div>
//       안녕하세요. 제 이름은 {name}입니다.
//       children값은 {children}입니다.
//       </div>
//     );
// };

// MyComponent.propTypes = {
//   name: PropTypes.string
// };

// export default MyComponent;






// 4-5.isRequired
// import React from 'react';
// import { PropTypes} from 'prop-types';

// const MyComponent = (props) => {
//   const { name, children, favoriteNumber} = props;

//   return (
//     <div>
//       안녕하세요. 제 이름은 {name}입니다.
//       children값은 {children}입니다.
//       <br/>
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//       </div>
//     );
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber : PropTypes.number.isRequired
// };

// export default MyComponent;


// 5. 클래스형 컴포넌트에서 props 사용하기
// import React, {Component} from 'react';
// import { PropTypes } from 'prop-types';

// class MyComponent extends Component{
//   render(){
//     const {name, favoriteNumber, children} = this.props;
//     return(
//       <div>
//         안녕하세요. 제 이름은 {name}입니다.
//         children값은 {children}입니다.
//         <br/>
//         제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//       </div>
//     );
//   }
// }

// MyComponent.defaultProps = {
//   name : "기본이름"
// }

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber : PropTypes.number.isRequired
// };

// export default MyComponent;