import { useState, useEffect } from "react"

const App  = () => {

  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCureentTitle] = useState(null)
  
  const createNewChat = () => {
    setMessage(null)
    setValue("")
    setCureentTitle(null)
  }

  const handleClick = (uniqueTitles) => {
    setCureentTitle(uniqueTitles)
    setMessage(null)
    setValue("")
  }

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


  const currentChat = previousChats.filter(previousChats => previousChats.title === currentTitle)
  const uniqueTitles = Array.from(new set (previousChats.map(previousChats => previousChats.title)))

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>+ New Chat</button>
        <ul className="history"></ul>
        {uniqueTitles?.map((uniqueTitles, index) =><li key={index} onClick={ () => handleClick(uniqueTitles)}>{uniqueTitles}</li>)}
        <nav>
          <p>Made by Farhan</p>
        </nav>
      </section>
      <section className="main">
        {!currentTitle && <h1>FarhanGPT</h1>}
        <ul className="feed">
            {currentChat?.map((chatMessage, index) => <li key={index}>
              <p className="role">{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
            </li>)}
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
