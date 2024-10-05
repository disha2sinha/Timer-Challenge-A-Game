import {useState, useRef} from 'react';
export default function Player(){
    const PlayerName = useRef();
    const [input, setInput] = useState(null);

    function handleClick(){
        setInput(PlayerName.current.value)
    }
    return(
        <>
        <p>Welcome {input}</p>
        <input ref = {PlayerName} type='text'></input>
        <button onClick={handleClick}>Enter Name</button>
        </>
    )
}