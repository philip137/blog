import React, { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import './card.css'



function Card(props) {
    const targetRef = useRef()
    const [dimensions, setDimensions] = useState({width:0, height: 0})
    const [isCollapsed, setIsCollapsed] = useState(false)

    useLayoutEffect( () => {
        if (targetRef.current){
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            })
        }
    }, [])


    if (props.item.data != null && props.item.data.contents)
    {
        console.log(dimensions.width, dimensions.height)
    }
    
    return (
        <div className={'card-container'}
             ref={targetRef}>
            <CardHeader data={props.item.data} />
            <CardContent data={props.item.data} />
            <CardFooter/>
        </div>
    )
}

function CardHeader(props) {
    return (
        <div className='cardform-header'>
            <h1><a href='#'>{props.data.title}</a></h1>
            <span className='cardform-date'>{props.data.date}</span>
        </div>
    )
}
function CardContent(props) {
    
    return (
        <div className="cardform-body">
                {props.data.contents}
        </div>
    )
}


function CardFooter(props) {

    return (
        <div className='cardform-footer'>
            들어갈 내용 : 카테고리 | 작성자 | 댓글 카운트
        </div>
    )
}


export default Card;