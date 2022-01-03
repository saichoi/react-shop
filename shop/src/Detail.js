import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {재고context} from './App';
import {Nav} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`

function Detail(props){

  let { id } = useParams();
  let history = useHistory();
  let [alert, alert변경] = useState(true);
  let 재고 = useContext(재고context);
  let [클릭된탭, 클릭된탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  useEffect(()=>{
    var myArr = localStorage.getItem('watched');
    if(myArr == null){
      myArr = [];
    }else{
      myArr = JSON.parse(myArr);
    }
    myArr.push(id);
    myArr = new Set(myArr);
    myArr = [...myArr];
    localStorage.setItem('watched', JSON.stringify(myArr));
  },[]);

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{
       alert변경(false)
        return ()=>{clearTimeout(타이머)}
    },2000)
  },[]);
    return(
      <div className="container">
          <박스>
            <제목 className="red">상세페이지</제목>
        </박스>


        {
          alert === true 
          ? (
            <div className="my-alert-yellow">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>
            )
          : null
        }
        
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes[id].id+1)+".jpg"} width="100%" alt="이미지"/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <p>재고 : {재고[props.shoes[id].id]}</p>
            <button className="btn btn-danger" onClick={()=>{  
              props.dispatch({type:'항목추가', payload : { id:props.shoes[id].id, name: props.shoes[id].title, quan:1} });
              history.push('/cart');
             }}>주문하기</button> &nbsp;
            <button className="btn btn-primary" onClick={()=>{history.goBack();}}>뒤로가기</button> 
          </div>
        </div>

        <Nav className="mt-5 mb-3" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); 클릭된탭변경(0)}}>Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); 클릭된탭변경(1)}}>Tab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{스위치변경(false); 클릭된탭변경(2)}}>Tab 3</Nav.Link>
          </Nav.Item>
        </Nav>

        <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabContent 클릭된탭={클릭된탭} 스위치변경={스위치변경}/>
        </CSSTransition>

        <Lasted shoes={props.shoes}></Lasted>
      </div> 
    )
  }

  function TabContent(props){

    useEffect(()=>{
      props.스위치변경(true);
    })

    if(props.클릭된탭 === 0){
      return <div>Tab 1 내용입니다.</div>
    }else if(props.클릭된탭 === 1) {
      return <div>Tab 2 내용입니다.</div>
    }else if(props.클릭된탭 === 2){
      return <div>Tab 3 내용입니다.</div>
    }
  }

  function Info(props){
    return(
      <p>재고 : {props.재고[0]}</p>
    )
  }

function state를props화(state){
  return {
      state : state.reducer,
      alert열렸니 : state.reducer2
  }
}

function Lasted(props){
  let history = useHistory();
  var myArr = localStorage.getItem('watched');
  myArr = JSON.parse(myArr);
  
  return(
    <div className="lasted">
      <h3>최근본상품 목록</h3>
      {
        myArr.map((a,i)=>{ 
          return (
            <div className="row" shoes={props.shoes[i]} i={i} key={i}  onClick={()=>{history.push('/detail/'+props.shoes[a].id)}}>
              <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes[a].id+1)+".jpg"} width="100%" alt="이미지"/>
              <h5>{props.shoes[a].title}</h5>
              <p>{props.shoes[a].price}</p>
            </div>
           )
        }) 
      }
    </div>
  );
}

export default connect(state를props화)(Detail)
