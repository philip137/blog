import React, { useState } from 'react'
import styled from 'styled-components'
import './content_page.css'

const StyledContentDiv = styled.div`
    width: ${(props) => props.vw || '0vw'}
    
`

function Content({children, ...props}) {
    
    return (
        <StyledContentDiv className={props.className} {...props}>
            {children}
        </StyledContentDiv>
    )
}

export default Content;