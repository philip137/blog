import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import './App.css'



function Example(){

    const [items, setItems] = useState([
        {
            'id': 0,
            'title': 'Sample',
            'date': '2020년 12월 9일',
            'likes': 0
        },
        {
            'id': 1,
            'title': '새로운 글',
            'date': '2020년 12월 9일',
            'likes': 0
        },
        {
            'id': 2,
            'title': 'React Iteration.',
            'date': '2020년 12월 10일',
            'likes': 0
        }
    ])
    const [cur_item_id, setCurItemId] = useState(2)

    // list array의 map을 활용하여 iteration 가능.
    /*
    
    */

    let likeClicked = (e) => {
        console.log(e.target.getAttribute('idx'))
        const idx = e.target.getAttribute('idx')
        let newVal = [...items]
        newVal[idx].likes += 1
        setItems( newVal )
    }

   let articles = items.map( (item, idx) => (
    <div id={idx}>
        <h3> { item.title }
        <button idx={idx} href='#' onClick={ likeClicked }>👍</button> {item.likes} </h3>
        
        <p> { item.date } 발행 </p>
        <hr/>
    </div>
    ))
/*
    let articles = items.map(item => (
        <div id={item.id}>
            <h3> { item.title }
            <a href='#' onClick={ () => {
                let newVal = [...items]
                newVal[item.id].likes += 1
                setItems( newVal )
                }}>👍</a> {item.likes} </h3>
            
            <p> { item.date } 발행 </p>
            <hr/>
        </div>
    ))
    */
    
    return (
      <div>
        <div className="articles">
            {articles}
        </div>
        <FuncComponent item={'abc'} />

      </div>  
    )
}

const FuncComponent = (props) => {
    return (
        <div className='a'>
            <span>{props.item}</span>
            
        </div>
    )
}

export default Example;