import { useState } from 'react'
import './input.css'
export function Input() {
    const [name, setName] = useState ('')
    return (
    <div>
        <input className='input' placeholder='seach' onChange={(event) => setName(event.target.value) }  />
        <h2>{name}</h2>
    </div>
    )
}