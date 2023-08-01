
import { useState } from "react";
import "../Chatbox.css"; // Import custom CSS styles for the chatbox (create this file separately)
import Image6 from '../images/image_6.png';
import Image11 from '../images/image_11.jpeg';
export default function Chatbox() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .catch((err) => console.log(err));
  }

  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <div className="chatbox-header">
            <img src={Image11} width="450px" height="120px" alt="" />
          <h1>ChatGPT</h1>
          <p>AI-Powered Chatbot</p>
        </div>
        <div className="chatbox-messages">
          <p className="user-message">{message}</p>
          {response && <p className="bot-message">{response}</p>}
        </div>
        <form className="chatbox-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Send a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>

      </div>
    </div>
  );
}
