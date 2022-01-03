import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, 액션){
  if(액션.type === '알림창닫기'){
    state = false;
    return state;

  }
  return state;
}

// 1. 데이터의 초기값을 변수에 담에 준다.
let 초기값 = [
  { id : 0, name : 'White and Black', quan : 2},
  { id : 1, name : 'Red Knit', quan : 1}
];

// 2. 데이터 수정 방법을 정의
function reducer(state = 초기값, 액션){
  if(액션.type === '항목추가'){

    // findIndex : 배열 안에 원하는 데이터를 찾아주는 함수
    let found = state.findIndex((a)=>{return a.id === 액션.payload.id});
    if(found > 0){
      let copy = [...state];
      copy[found].quan++;
      return copy;
    }else {
      let copy = [...state];
      copy.push(액션.payload);
      return copy;
    }

  }else if(액션.type === '수량증가'){

    let  copy = [...state];
    copy[액션.data].quan++;
    return copy;

  }else if(액션.type === '수량감소'){

    let  copy = [...state];
    if(copy[액션.data].quan > 1){
      copy[액션.data].quan--;
    }else{
      alert("최소 1개 이상이어야 합니다.")
    }
    return copy;

  }else {
    return state;
  }
    
}

// 3. 데이터 수정 방법이 정의된 reducer를 데이터를 변수에 넣어서 사용한다.
let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
