import { useState, useEffect } from "react"

const App  = () => {

  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCureentTitle] = useState([])

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
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

useEffect(() =>{
if(!currentTitle && value && message) {
  setCureentTitle(value)
}
if(currentTitle && value && message){
  setPreviousChats(previousChats => (
    [...previousChats, 
      {
        title: currentTitle, 
        role: "user",
        content: value
    }, 
    {
      title: currentTitle,
      role: message.role, 
      content: message.content
    }
  ]
  ))
}
}, [message], currentTitle)
  

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
          <input value={value} onKeyDown={this.handleKeyDown} onChange={(e) => setValue(e.target.value)}/>
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
