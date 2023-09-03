const App  = () => {

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
      console.log(data)
    } catch (error){
      console.error(error)
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
          <input id="myInput"/>
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
