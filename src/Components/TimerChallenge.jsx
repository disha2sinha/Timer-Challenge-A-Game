import { useState,useRef } from "react"
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({title, targetTime}){

    const timer = useRef();
    const dialog = useRef(); //We have to be able to forward this ref to the resultModal component
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    

    if (timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 100);
        }, 100)
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current); 
    }
    return(
        <>
        <ResultModal ref={dialog} timeRemaining={timeRemaining} targetTime={targetTime} onReset = {handleReset}></ResultModal>
        <section className = "challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick = {timerActive ? handleStop : handleStart}>{timerActive ? 'Stop' : 'Start'} Challenge</button>
            </p>
            <p className={timerActive ? 'active': undefined}>
                {timerActive ? 'Time is running...' : 'Timer Inactive'}
            </p>
        </section>
        </>
    )
}

