import React, { useState, useRef } from 'react';
import '../css/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ content: "Hi there 👋\nHow can I help you today?", role: "bot" }]);
  const [showTextArea, setShowTextArea] = useState(false);
  const [inputHeight, setInputHeight] = useState('auto');
  const inputRef = useRef(null);

  const handleSend = () => {
    const message = inputRef.current.value.trim();
    if (!message) return;

    setMessages(prevMessages => [...prevMessages, { content: message, role: "you" }]);
    inputRef.current.value = '';
    setInputHeight('auto');

    generateResponse(message);
    // setTimeout(() => {
    //   setMessages([...messages, { content: "Thinking...", role: "bot" }]);
    //   generateResponse(message);
    // }, 600);
  };

  const generateResponse = async (userMessage) => {
    
    try {
        const response = await fetch("http://localhost:4242/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ question: userMessage })
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch response from the server");
        }
    
        const data = await response.json();
        setMessages(prevMessages => [...prevMessages, { content: data.answer, role: "bot" }]);
      } catch (error) {
        console.error("Error:", error.message);
        setMessages(prevMessages => [...prevMessages, { content: "Oops! Something went wrong. Please try again.", role: "error" }]);
      }
    }
      

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    setInputHeight('auto');
    setInputHeight(`${inputRef.current.scrollHeight}px`);
  };

  const toggleTextArea = () => {
    setShowTextArea(!showTextArea);
  };

  return (
    <div>
    <div className="chatbot" style={{ display: showTextArea ? 'block' : 'none' }}>
      <div className='chatbot-header'>
        <h2>Chatbot</h2>
      </div>
      <ul className="chatbox" style={{ display: showTextArea ? 'block' : 'none' }}>
        {messages.map((message, index) => (
          <li key={index} className={`chat ${message.role === 'bot' ? 'left' : 'right'}`}>
            {message.role === 'bot' && <span className="material-symbols-outlined">Dizzy</span>}
            {message.role === 'you' && <span className="material-symbols-outlined">you</span>}
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input" >
        <textarea
          ref={inputRef}
          placeholder="Enter a message..."
          spellCheck="true"
          required
          style={{ height: inputHeight }}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
        ></textarea>
        <span id="send-btn" className="material-symbols-rounded" onClick={handleSend}>send</span>
      </div>
      
    </div>

    <div className="chatbot-btn-box">
        <button className="chatbot-btn-2" onClick={toggleTextArea}>
          
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
