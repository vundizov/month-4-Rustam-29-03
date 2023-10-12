import { useState } from 'react';
import './button.css'
export function Button(props) {
    // const [test, setTest] = useState (1)
    // console.log(test);
    // return (
    //     <button className='button' onClick={() => setTest(test + 1)}>
    //         {test}
    //     </button>
    //     )
    return (
    <button className='button' onClick={() => props.onSetAge()}>
        change
    </button>
    )

}