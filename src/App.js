import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Button} from "./components/button";
import {Input} from "./components/input";

function App() {
  const [name, setName] = useState ('')
    const [surName, setSurName] = useState ('')
    const [rezald, setrezald] = useState ('')

    const addName = (e) => {
      setName(e.target.value)
    } 
    const addSurName = (e) => {
      setSurName(e.target.value)
    } 
    const handelClick = () => {
      const rezald = `${name} ${surName}`
      setrezald(rezald)
    }
    
 
  return (
    <div className="App">
        <Input firstName = {name} lastName = {surName} addName = {addName} addSurName = {addSurName} /> 
        <p>{rezald}</p>
        <button onClick={handelClick}>кнопка</button>
    </div>
  );
  }

export default App;
