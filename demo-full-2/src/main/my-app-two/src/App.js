import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');
  // /api/hi 로 가져온 인사말 msg에 useEffect로 넣어서 메세지 확인
  useEffect(() => {
    axios.get('http://localhost:8082/api/hi')
    .then(response => {
      setMsg(response.data)
    })
    .catch(error => {
      alert("데이터를 가져올 수 없습니다.")
    });
  },[])
  return (
    <div className="App">
    <header className="App-header">
      <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
