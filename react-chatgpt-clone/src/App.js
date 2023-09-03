import { useState, useEffect } from "react"

const App  = () => {

  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "Hello how are you"
      }),
      headers: {
        "Content-Type": "application/json"
      }

    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      
      setMessage(data.choices[0].message)
    } catch (error){
      console.error(error)
    }
  }

function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === 13) { 
      getMessages()
        console.log('Enter key pressed')
  }
}
  

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history"></ul>
        <li>bb</li>
        <nav>
          <p>Made by Farhan</p>
        </nav>
      </section>
      <section className="main">
        <h1>FarhanGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
          <input onKeyDown={this.handleKeyDown}/>
          <div id="submit" onClick={getMessages}>➢</div>
        </div>
        <p className="info">
          CHATGPT version 3.5
        </p>
        </div>
      </section>
      
    </div>
  );
}

export default App;
