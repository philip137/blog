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
    const targetRef = useRef()
    const [overflow, SetOverflow] = useState('hidden')
    const [dimensions, setDimensions] = useState({width:0, height: 0})
    
    useLayoutEffect( () => {
        //console.log(targetRef.current)
        if (targetRef.current){
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            })
            console.log("dimensions : " + dimensions.height)
            SetOverflow(dimensions.height > 300 ? 'hidden' : 'none')
        }
    }, [])

    let link_more = () => {
        let ret = (<span>... more</span>)
        return ret
    }

    return (
        <>
        <div className="cardform-body" ref={targetRef} >
            <StyledCardBody overflow={overflow}>
                {props.data.contents}
            </StyledCardBody>
            {overflow == 'hidden' ? link_more() : ''}
        </div>
        </>
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