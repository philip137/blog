import React, { useState } from 'react'
import styled from 'styled-components'
import './content_page.css'

const StyledContentDiv = styled.div`
    flex-grow: ${(props) => props.flex_grow || 0}
`

function Content({children, ...rest}) {
    const props = {...rest}
    console.log(props)
    return (
        <StyledContentDiv className='content' {...rest}>
            {children}
        </StyledContentDiv>
    )
}

export default Content;