import React, { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(5)
  const [inputValue, inputSetValue] = useState("Текст в инпуте")
  
  const increment = () => {setLikes(likes + 1)}
  const decrement = () => {setLikes(likes - 1)}

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{inputValue}</h2>
      <input
        type = "text"
        value={value}
        onChange={event => inputSetValue(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
