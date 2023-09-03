

const App  = () => {
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
          <input/>
          <div id="submit">➢</div>
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
