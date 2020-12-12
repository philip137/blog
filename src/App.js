import React, { useState } from 'react'
import styled from 'styled-components'
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
            <Content className="main-contents" flex_grow={2}>
              <Card name="a1">
                Card 1
              </Card>
              <Card name="a2">
                Card 2
              </Card>
            </Content>
            <Content className="sub-contents" flex_grow={1}>
              <Card>
                Card 3 - Sub Contents
              </Card>
            </Content>
          </div>
          
        </main>
    </div>
  );
}

export default App;
