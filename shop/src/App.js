//  eslint-disable
import React, { useContext, useEffect, useState, lazy, Suspense } from 'react';
import { Navbar, Nav, NavDropdown, Container, Alert} from 'react-bootstrap';
import { Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Data from './data';
import axios from 'axios';
import Cart from './Cart';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//import Detail from './Detail';
let Detail = lazy(()=>{ return import ('./Detail.js') });


export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);
  let [name, setName] = useState('Choi')
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(()=>{
    if( count !== 0 && count < 3){
      setAge(age+1)
    }
  },[count])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shoe Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/detail">Detail</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Switch>
      <Route exact path="/">
        <Alert variant="success" className="background">
          <Alert.Heading>20% Season off</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
          </p>
        </Alert>

        <div>
          <div>안녕하십니까 전 {age}</div>
          <button onClick={()=>{
            setCount(count+1);
          }}>누르면한살먹기</button>
        </div>

        <div className="container">
          <재고context.Provider value={재고}>
          
          <div className="row">
            {
              shoes.map((a,i)=>{ // a : shoes 배열 안의 각각의 데이터 
                return <Card shoes={shoes[i]} i={i} key={i} /> // shoes와 i를 props로 전송
              }) 
            }
          </div>

        </재고context.Provider>

        <button className='btn btn-primary more mt-5' onClick={()=>{
          // 버튼 클릭시 로딩중 UI를 띄운다.
          document.querySelector(".more").textContent = '로딩중';
           // 서버에 Get 요청
          axios.get('https://codingapple1.github.io/shop/data2.json')
           // 요청 성공시 실행할 코드
          .then((result)=>{
            // 요청 성공하면 로딩중 UI를 지운다.
            document.querySelector(".more").textContent = '더보기';
            shoes변경([...shoes, ...result.data]); // ... : 대괄호를 벗겨준다 , [] : 대괄호로 다시 감싸준다.
          })
          // 요청 실패시 실행할 코드
          .catch(()=>{
            // 요청 실패하면 로딩중 UI를 지운다.
            console.log('실패했어요.');
          }) 
        }}>더보기</button>
      </div>

      </Route>
      <Route path="/detail/:id">
        <재고context.Provider value={재고}>
          <Suspense fallback={<div>로딩중이에요</div>}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </Suspense>
        </재고context.Provider>
      </Route>
      <Route path="/cart"> 
        <Cart></Cart>
      </Route>
      </Switch>
      
    </div>
  )
}

function Card(props){

  let  재고 = useContext(재고context);
  let history = useHistory();

  return(
    <div className="col-md-4" onClick={()=>{history.push('/detail/'+props.shoes.id)}}>
        <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes.id+1)+".jpg"} width="100%" alt="이미지"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>

    재고 : {재고[props.shoes.id]}
    <Test></Test>
    </div>
    
  )

  function Test(){
    let 재고 = useContext(재고context);
    return <p>재고 : {재고[props.i]}</p>
  }
}


export default App;
