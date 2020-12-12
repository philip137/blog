import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'


function Testform(props) {
    console.log(props.raw)
    return (
      <>
        <h1>{props.raw.data.title}</h1>
        <div>
          {props.raw.data.contents}
        </div>
      
      </>
    )
  }


  export default Testform;