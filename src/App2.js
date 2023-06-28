import "./App.css";
import { useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [showText, setShowText] = useState(true);
    const [textColor, setTextColor] = useState("black");

    const [value, setValue] = useState(1);
    
    //const handleInputChange = (event) => {
        //setInputValue(event.target.value);
    //};


    return (
    <div className="App">
        <button 
            onClick={() => { 
                // setShowText(!showText); 
                setTextColor(textColor === "black" ? "green" : "black")
                }}> 
            show/hide 
        </button>

        <button
            onClick={() =>{
                setValue(value + 1);
            }}>
        increase
        </button>

        <button
            onClick={() =>{
                setValue(value - 1);
            }}>
        decrease
        </button>

        <button
            onClick={() =>{
                setValue(0);
            }}>
        set to zero
        </button>
        {showText && <h1 style={{ color: textColor }}> Hi </h1>}
        {/* <Input type="text" onChange={handleInputChange}/> */}
        {inputValue}
        {value}
    </div>
    )
   
}

export default App;