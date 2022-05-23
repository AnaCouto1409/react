import React, { useState } from "react";
import { Header } from "./header";
import { useEffect } from "react";

function App(){
    const [count, setCount]= useState(0)
    return(
        <div className="App">
            <header />
            <main />
            <fotter />
        </div>
    )
}
export default App;