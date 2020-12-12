import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

import './App.css'
import Navbar from './components/navbar/navbar'
import Content from './components/content_page/content_page'
import Card from './components/card/card'

function App(props) {
 return (
    <div className="App"> 
      <Navbar />
        <main className='main-view'>
          <div className='container'>
            <Content flex_grow={2} content={'이건?'}>
              <Card name="1">
                asd
              </Card>
            </Content>
            <Content flex_grow={1}>
              <Card>
                sss
              </Card>
            </Content>
          </div>
          
        </main>
    </div>
  );
}

export default App;
