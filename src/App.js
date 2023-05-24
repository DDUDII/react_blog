/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let [제목, 이름변경] = useState(['기본 코트 추천', '여자 코트 추천', '봄 코트 추천']);
let [하트, 하트변경] = useState([0,0,0]);
let [modal, setModal] = useState(1);
let [title, setTitle] = useState(2);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>블로그</h1>
      </div>
      <button onClick={ ()=>{
        let copy = [...제목];
        copy.sort();
        이름변경(copy);
      }}>정렬</button>
      <button onClick={ ()=>{
        let copy = [...제목];
        copy[0] = '여자 코트 추천';
        이름변경(copy);
       }}> 글수정 </button>

      {
      제목.map (function(a, i){
      return (
      <div className='list' key={i}>
        <h4 onClick={ ()=>{setModal(1); setTitle(i) }}> { 제목 [i] }
        <span onClick={ ()=>{ 
          let copy3 = [...하트];
          copy3[i] = copy3[i]+1;
          하트변경(copy3)
        } }>💟</span> {하트[i]} </h4>
        <p>2월 17일 발행</p>
      </div>
      )
        })
      }
      <button onClick={ ()=> {setTitle(1)} }>제목0</button>
      { modal == 1 ? <Modal title={title} 이름변경={이름변경} 제목={제목}/>: null
      }
    </div>
  );
}
 function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>
        글수정</button>
    </div>
      
  )
 }
export default App;
