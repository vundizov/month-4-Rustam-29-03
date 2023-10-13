import { useState } from 'react'
import './input.css'
export function Input({addName, lastName,firstName, addSurName}) {
    
    return (
    <div className='inputt'>
        <input className='input' placeholder='name'  value={firstName} onChange={addName}/>
        <input className='input' id='input' placeholder='surname'  value={lastName}  onChange={addSurName} />
    </div>
    )
}