import React from "react"
import {createRoot} from "react-dom/client"
import "./state.css"
import {useState} from "react"


export default function App() {

    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

    let [result,setResult]=useState("NO");


    // console.log(result,setResult())

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={
                ()=>{
                    setResult("YES")
                }
            } >{result}</button>
        </main>
    )
}


createRoot(document.getElementById("root")).render(<App/>)


