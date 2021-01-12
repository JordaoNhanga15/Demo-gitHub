import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [textbox,steTextbox]=useState('')
  useEffect( ()=>{
    // textbox.length>2 ?alert('eimk') : alert('ola')
  },[textbox])
  return (
    <div className="App">
      <h1>{textbox.length}</h1>
      <input 
      type="text"
      placeholder="ola" 
      onChange={
        (e)=>{
          steTextbox(e.target.value)
        }
      }/>
    </div>
  );
}

export default App;
