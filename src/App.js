import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import './App.css'


function App(props) {
  const [hello, setHello] = useState('hello app js!')
  const [count, setCount] = useState(0)
  const [props_message, setPropsMessage] = useState(props.message)

  var clickHandler = () => {
    setHello('changed ' + count + 'times. hello app js!');
    setCount(count+1)
    // props.message = "changed" Occur an error. members of prop are read only.
    setPropsMessage("changedd")

  }
  
  return (
    <div className="App"> 
      <nav className="black-nav">
        Blog
      </nav>
      <div className="props">
        {props_message} <br/>
        {props.message}
        <hr/>
      </div>
      <div className="state">
        {hello}<br></br>
        <button onClick={clickHandler}> click me! </button>

      </div>
      
    </div>
  );
}

export default App;
