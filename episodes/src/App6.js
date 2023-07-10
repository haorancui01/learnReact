import "./App.css"
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {

    const [ excuseResult, setExcuseResult ] = useState("");

    const fetchData = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
            setExcuseResult(res.data[0].excuse);
        })
    }


    return (
        <div className="App">
            <h1> Generate an excuse</h1>
            <button onClick={() => fetchData("party")}> Party </button>
            <button onClick={() => fetchData("family")}> Family </button>
            <button onClick={() => fetchData("office")}> Office </button>
            <p>Excuse: {excuseResult}</p>
        </div>
    )
}

export default App;