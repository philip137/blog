import React, { useState } from 'react'
import styled from 'styled-components'
import './content_page.css'

const StyledContentDiv = styled.div`
    flex-grow: ${(props) => props.flex_grow || 0}
`

function Content({children, ...props}) {
    
    return (
        <StyledContentDiv className='content' {...props}>
            {children}
        </StyledContentDiv>
    )
}

export default Content;