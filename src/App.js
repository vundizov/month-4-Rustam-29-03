import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Button} from "./components/button";
import {Input} from "./components/input";
import { useState } from 'react';

function App() {

  const [age,setAge] = useState (10)
  const statysAge = () => {
    setAge (21);
  };
  return (
    <div className="App">
        <Input/>
        <Button onSetAge={statysAge} />
    </div>
  );
}

export default App;
