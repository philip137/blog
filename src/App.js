//https://react.vlpt.us/

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Content from './components/content_page/content_page'
import Card, { CardForm } from './components/card/card'

const test_vals = [
  {
    'id': 'philip.choi',
    'type': 'post',
    'data': {
      'title': '첫번째 게시글',
      'contents': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ullamcorper arcu. Donec a faucibus sapien. Morbi pretium arcu vitae convallis tristique. Proin sit amet elit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu semper enim. Suspendisse lobortis orci eget feugiat molestie. Integer pretium, justo nec mollis pulvinar, ligula tortor egestas leo, sit amet ultricies nisi neque et justo. Proin ac magna non mauris rutrum luctus vel nec libero. Quisque quis accumsan nisi, quis faucibus risus. Vestibulum gravida efficitur arcu ac sollicitudin. Proin at ipsum vel tortor sodales accumsan. Sed auctor ipsum velit, sit amet imperdiet nisi porta vitae. Nullam fermentum facilisis luctus. \
      Sed euismod, orci et condimentum commodo, purus massa faucibus ex, in rhoncus orci massa in mauris. In a bibendum magna, vitae porta mauris. Suspendisse porta efficitur ante sit amet ornare. Sed id libero feugiat, posuere metus sed, consequat velit. Nulla eget semper massa. Quisque lectus mauris, rhoncus vitae sodales sit amet, posuere ut felis. Suspendisse egestas eros et est condimentum, vitae tincidunt eros fringilla. Vivamus eu tempor ex. Praesent mollis a tellus ut porttitor. Duis quis augue quis elit maximus bibendum. Vivamus nec est velit. Proin vulputate nisl id tortor maximus lobortis. \
      Nam odio mi, pellentesque at ante vel, interdum maximus lorem. Maecenas ligula eros, ornare dictum dui non, vestibulum blandit ligula. Cras ante lectus, vulputate eget rhoncus non, maximus nec leo. Suspendisse facilisis pulvinar eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras interdum ullamcorper dignissim. Integer dapibus ultricies vehicula. Donec felis ligula, mattis et lacinia ut, viverra congue nulla. Phasellus vitae metus quis diam pharetra tincidunt. Sed pellentesque dolor nec ligula tincidunt, in auctor libero auctor. Quisque ullamcorper lectus elit, eu porta nisi efficitur ac. Integer molestie, dolor non tincidunt finibus, neque tortor finibus arcu, sit amet convallis orci urna at nulla. Aliquam pulvinar et erat ut egestas. Mauris suscipit vehicula risus, nec mattis risus efficitur a. Curabitur consequat sem vel nunc pulvinar venenatis. \
      Etiam venenatis ligula quis nisi ultricies, non rutrum nunc porta. Donec a commodo lacus, ac finibus metus. Sed in nulla eget est placerat vehicula. Integer id semper est. Integer et arcu interdum ligula ornare ultricies. Aenean ac sem nunc. Nulla quis arcu facilisis, pharetra urna quis, vehicula velit. Morbi feugiat maximus nisi at semper.\
      Nunc tincidunt elit nec pulvinar fermentum. Ut egestas justo a pellentesque pretium. Cras vestibulum tempor tortor, a tristique neque porttitor vel. Nam iaculis lectus ac enim imperdiet aliquet. Morbi a ipsum venenatis, rutrum justo ut, commodo odio. Aenean sed molestie neque. Etiam dictum tristique tellus vitae varius. Ut viverra urna orci, vel finibus orci semper in. Mauris purus turpis, pulvinar ut sapien sit amet, finibus vulputate tortor. Proin sed ultrices leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      ,
      'date': '2020-12-12 22:30:42'
    }
  },
  {
    'id': 'ralo',
    'type': 'post',
    'data': {
      'title': '사쿠란보 맛있게 볶는 법',
      'contents': "컽!",
      'date': '2020-12-13 22:30:42'
    }
  },
  {
    'id': 'manager',
    'type': 'notice',
    'data': {
      'title': '공지사항',
      'contents': "이건 서브컨텐츠로..",
      'date': '1970-01-01 12:00:00'
    }
  }
]

const FetchContents = () => {
  console.log("Enter")
  const [contents, setContents] = useState([])
  axios.defaults.baseURL = 'http://127.0.0.1:3001'
  axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
  axios.get('http://127.0.0.1:3001/api/contents')
    .then((res) => {
      console.log(res)
    })
}

function App(props) {
  const [testval, setTestval] = useState(test_vals)
  // const testval = FetchContents();

  let cards = testval.map( (item, idx) => {
    if (item.type === 'post')
    {
      return (
        <Card item={item} />

      )
    }
  })
  let sub_cards = testval.map( (item, idx) => {
    if (item.type === 'notice') {
      return (
        <Card item={item} />
      )
    }
  })
  return (
    <div className="App"> 
      <Navbar />

      <main className='main-view'>
        <div className='main-container'>
          <Content className="contents main" vw={'70vw'}>
            {cards}
          </Content>
          <Content className="contents sub" vw={'30vw'}>
            {sub_cards}
          </Content>
        </div>
        
      </main>
    </div>
  );
}




export default App;
