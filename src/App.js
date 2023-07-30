
import { useState } from "react";
import './App.css';

export default function App() {
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
        })
        .then(res => res.json())
        .then(data => setResponse(data.message))
        .catch(err => console.log(err))
    }
    
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter a message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            <p>{response}</p>
        </div>
    );
    }