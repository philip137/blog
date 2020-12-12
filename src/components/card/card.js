import React, { useState } from 'react'
import styled from 'styled-components'
import './card.css'



function Card({children, ...rest}) {
    const props = {...rest}

    return (
        <div className={'card-' + props.name}>
            
        </div>
    )

}

export default Card;