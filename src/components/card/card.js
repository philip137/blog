import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import './card.css'



function Card(props) {
    console.log({...props})
    return (
        <div className={'card-container'}>
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