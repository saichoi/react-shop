import React, { memo, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

const Cart = (props) => {

    let state = useSelector((state) => state ); // redux 안의 모든 state
    console.log(state.reducer);
    let dispatch = useDispatch();

    return (
        <div>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {
                        state.reducer.map((a,i)=>{
                            return(
                            <tr key={i}>
                                <td>{ a.id }</td>
                                <td>{ a.name }</td>
                                <td>{ a.quan }</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>{dispatch({type:'수량증가', data : a.id})}}>+</button>
                                    <button className="btn btn-danger" onClick={()=>{dispatch({type:'수량감소', data : a.id})}}>-</button>
                                </td>
                            </tr>

                            )
                        })
                   
                    }

                </tbody>
            </Table>
                {
                    props.alert열렸니 === true
                    ? 
                    <div className='my-alert-yellow'>
                        <p>지금 구매하시면 신규 할인 20%</p>
                        <button className='btn btn-danger' onClick={()=>{props.dispatch({type:'알림창닫기'})}}>닫기</button>
                    </div>
                    : null           
                }

                <Parent 이름="최다혜" 나이="30"></Parent>

        </div>
    );
};

function Parent(props){
    return (
        <div>
            <Child1 이름={props.이름}></Child1>
            <Child2 나이={props.나이}></Child2>
        </div>
    )
}

function Child1(){
    useEffect(()=>{ console.log('렌더링됨 1')});
    return <div>첫번째 자식</div>
}

let Child2 = memo(function(){
    useEffect(()=>{ console.log('렌더링됨 2')});
    return <div>두번째 자식</div>
});

// function state를props화(state){
//     return {
//         state : state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }

// export default connect(state를props화)(Cart)
export default Cart;