import React, { useContext } from "react"
import { ShellContext } from "./Shell"
import logo from "./logo.svg"
import "./App.css"

function App() {
    const {
        user: { initials },
    } = useContext(ShellContext)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{initials}</p>
            </header>
        </div>
    )
}

export default App
