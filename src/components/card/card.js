import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import styled from 'styled-components'
import './card.css'

const StyledCardBody = styled.div`
    max-height: inherit;
    overflow: ${(props) => props.overflow || 'hidden'};
`
const StyledMoreSpan = styled.span`
    visibility: ${(props) => props.visibility || 'hidden'};
`
function Card(props) {
    useLayoutEffect( () => {
        
    })
    return (
        <div className={'card-container'}>
            <CardHeader date={props.item.data.date} title={props.item.data.title} />
            <CardContent contents={props.item.data.contents} />
            <CardFooter/>
        </div>
    )
}

function CardHeader(props) {
    return (
        <div className='cardform-header'>
            <h1><a href='#'>{props.title}</a></h1>
            <span className='cardform-date'>{props.date}</span>
        </div>
    )
}

function CardContent(props) {
    const targetRef = useRef()
    const [overflow, SetOverflow] = useState('hidden')
    const [more, SetMore] = useState(false)
 
    useLayoutEffect( () => {
        if (targetRef.current){
            console.log(targetRef.current.offsetHeight)
            SetOverflow(targetRef.current.offsetHeight > 300 ? 'hidden' : 'none')
        }
    }, [])

    let link_more = () => {
        let ret = (<span visible={more} >... more</span>)
        return ret
    }

    return (
        <>
        <div className="cardform-body" ref={targetRef} >
            <StyledCardBody overflow={overflow}>
                {props.contents}
            </StyledCardBody>
            <StyledMoreSpan visibility={overflow == 'hidden' ? 'none' : 'hidden'}>... more</StyledMoreSpan>
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