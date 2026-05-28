import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  // const [state,setState] = useState(initial);
  // const [count,setCount] = useState(0);
  // const [isHiding, setIsHiding] = useState(false);

  // function ShowHide() {
  //   setIsHiding(!isHiding);
  // }

  const [isLiked, setIsLiked] = useState(false);
  function toggleLike() {
    setIsLiked(!isLiked);
  }
  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => count > 0 ? setCount(count-1):null}>Decrease</button>

      {
        !isHiding && <h1>Hiding Text</h1>
      }
      <button onClick={ShowHide}>Show/Hide</button> */}
      
      
      <button onClick={toggleLike}>
        {isLiked ? "Unlike" : "Like"}
      </button>
      
    </div>
  )
}

export default App