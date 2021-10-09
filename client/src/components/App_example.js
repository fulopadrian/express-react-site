//jshint esversion: 6

import React from "react";

function App() {
  const [data, setData] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [result, setResult] = React.useState("");

  React.useEffect(function() {
    fetch("/home")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/home", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({ message: message }),
    })
    .then((res) => res.json())
    .then((result) => setResult(result.message))
    .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{result !== "" ? result : null}</p>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" name="message" value={message}></input>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
