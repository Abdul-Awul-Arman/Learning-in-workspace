import React from "react"
import {createRoot} from "react-dom/client"
import "./State_preactice.css"
import {useState} from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
    //  */

    let [count,setCount]=useState(0);

    function increment(){
        setCount(prevCount=> prevCount+1);
    };

    function decrement(){
        setCount(prevCount=> prevCount-1);
    };


    return (
        <main className="container">
            <h1>How many times will Bob say &quot; state &quot;  in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={()=>{
                    decrement()
                }} >–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={() => {
                    increment();
                }}>+</button>
            </div>
        </main>
    )
}

createRoot(document.getElementById("root")).render(<App/>)





