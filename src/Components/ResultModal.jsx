import { forwardRef, useImperativeHandle ,useRef} from "react";

// we use the function forwardRef to use refs across components. 
const ResultModal = forwardRef(function ResultModal({timeRemaining, targetTime, onReset},ref) //functions with forward refs take in two arguments - prop & ref
{
    const dialog = useRef();
    const userLost = timeRemaining <=0
    const score = Math.round((1 - timeRemaining/(targetTime * 1000))*100)
    //used to detach the functionalities of ref object like showModal in this case from the other component 
    useImperativeHandle(ref, ()=>{
        return{
        open(){
            dialog.current.showModal()
        }
    }
    })
    return(
        <dialog ref = {dialog} className="ResultModal" onClose={onReset}>
            {userLost ? <h3><strong> You Lost </strong></h3>
            :  <h3><strong>Your Score : {score}!! </strong></h3>}
    
            <p>The timer was of <strong>{targetTime} seconds</strong>.</p>
            <p>You stopped the timer in <strong> {(timeRemaining/1000).toFixed(2)} seconds</strong>.</p>
            
        <form method = "dialog">
            <button onClick = {onReset}>Close</button>
        </form>
        </dialog>
    )
})
export default ResultModal;
