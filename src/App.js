import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {Button} from "./components/button";
import {Input} from "./components/input";
import { Card } from './components/card';
import axios from 'axios'

function App() {
  
  const [list, setList] = useState ([])
  const [query, setQuery] = useState('')

  useEffect (() => {
  async function fetchData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    
    setList(response.data)
  }
    fetchData()

  },[])

  const add = (e)=> {
    e.preventDefault()
    const New = {
      title:query,
      id: Date.now()
    } 
    setList([...list, New])
    setQuery('')
  }

  const Delete = (id)=> {
    setList(list.filter((it)=> it.id != id))
  }

  return (
    <div className="App">

      <form onSubmit={add}>
        <input value={query} onChange={(e)=> setQuery(e.target.value)}/>
        <button type='submit'>кнопка</button>
      </form>  


      {list.map((it) => (
        <div key={it.id} className=''>{it.title}<button onClick={()=> Delete(it.id)}> 
          delete
          </button></div>
      ))}
    </div>
    );
  }

export default App;
