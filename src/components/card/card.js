import React, { useState } from 'react'
import styled from 'styled-components'
import './card.css'



function Card({children, ...props}) {

    return (
        <div className={'card ' + props.name}>
            {children}
        </div>
    )

}

export default Card;