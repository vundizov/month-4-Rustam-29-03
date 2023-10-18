import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Button} from "./components/button";
import {Input} from "./components/input";
import { Card } from './components/card';

const cards = [
  {id: 1,name:"milk"},
  {id: 2,name:"potato"},
  {id: 3,name:"cola"},
  {id: 4,name:"pivo"},
  {id: 5,name:"tomatto"},
  {id: 6,name:"water"},  
]

function App() {
  
  const [list, setList] = useState (cards)
  const [query, setQuery] = useState('')

 
    const handelFilterOnclick = () => {
      const Cards = cards.filter(i => i.id === query)
      if (Cards.length === 0) {
      const id = list.length
      const item = {id: id, name: query}
      setList([...list, item])
    }else{
      setList(Cards)
    }
      setQuery('')
    }
    
 
  return (
    <div className="App">
        <Input value={query} setValue={setQuery}/> 
        <button onClick={handelFilterOnclick}>кнопка</button>


        {list.map((card) => {
          return <Card key={card.id} name={card.name}/>
        })}

    </div>
    );
  }

export default App;
