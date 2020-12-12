import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import './card.css'



function Card(props) {
    console.log(props.children)
    const a = useRef()
    console.log(a)
    return (
        <div className={'card ' + props.name}>
            {props.children}
        </div>
    )

}

export default Card;