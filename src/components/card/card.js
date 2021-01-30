import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import styled from 'styled-components'
import './card.css'

const StyledCardBody = styled.div`
    max-height: inherit;
    overflow: ${(props) => props.overflow || 'hidden'};
`

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
    const [overflow, SetOverflow] = useState('hidden')

    const [dimensions, setDimensions] = useState({width:0, height: 0})
    const targetRef = useRef()

    useLayoutEffect( () => {
        if (targetRef.current){
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            })
            console.log(dimensions.height)
        }
    }, [])

    return (
        <>
        <div className="cardform-body">
            <StyledCardBody ref={targetRef} overflow={dimensions.height > 300 ? 'hidden' : 'none' }>
                {props.data.contents}
            </StyledCardBody>
            <span>... more</span>
        </div>
        
        
        </>
        // <div className="cardform-body">
        //         {props.data.contents}
        // </div>
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