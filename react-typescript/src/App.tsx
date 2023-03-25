import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

const showAlert = ():void =>{
  alert("alert");
}
function App() {
  return (
    <div className="App">
      <Button onClick={showAlert}>버튼</Button>
    </div>
  );
}

export default App;
