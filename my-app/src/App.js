import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8081/api/hello')
    .then(response => {
      setMessage(response.data)
    })
    .catch(error => {
      alert("데이터를 가져올수 없습니다.");
    });
    
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
