import React, { useState } from 'react'
import styled from 'styled-components'
import './navbar.css'

//display: flex;
const StyledNavMenu = styled.ul`
    display: none;
    padding-left: 0;
    margin: 0px;
    @media screen and (max-width: 768px) {
        width: 100%;
        display: ${(props) => props.display || 'none'};
        flex-direction: column;
        align-items: center;
    }
`

const StyledNavMenuli = styled.li`
    padding: 8px 12px;
    &:hover {
        color: #a1a09d;
        border-radius: 4px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`

const StyledNavIcons = styled.ul`
    display: flex;
    padding-left: 0;
    @media screen and (max-width: 768px) {
        display: ${(props) => props.display || 'none'};
        justify-content: center;
        width: 100%;
    }
`

function Navbar() {
    const [isMenuOn, setIsMenu] = useState(false);
    
    var toggleClicked = () => {
        setIsMenu(!isMenuOn);
    }
    
    return (
        <div className='navbar'>
            <NavTitle/>
            <a className='navbar_toggleButton' href='#'>
                <i class="fas fa-bars" onClick={toggleClicked}></i>
            </a>

            <NavMenu isMenuOn={isMenuOn}/>
            
            <NavIcons isMenuOn={isMenuOn}/>
        </div>
    )
}

function NavTitle(props) {
    return (
        <div className='navbar_title'>
                {/*} <i class="fas fa-blog"></i> {*/}
                <a href='#'>Philip Blog</a>
        </div>
    )
}

function NavMenu(props) {
    return (
            <StyledNavMenu className='navbar_menu' display= {props.isMenuOn ? 'flex' : 'none'}>
                <StyledNavMenuli > <a href='#'>Home</a></StyledNavMenuli>
                <StyledNavMenuli > <a href='#'>About</a></StyledNavMenuli>
                <StyledNavMenuli > <a href='#'>Post</a></StyledNavMenuli>
            </StyledNavMenu>
    )
}



function NavIcons(props) {
    return (
        <StyledNavIcons className='navbar_icons' display={props.isMenuOn ? 'flex' : 'none'}>
                <li><a href='https://github.com/philip137/blog' target="_blank">
                <i class="fab fa-github"></i>
                </a></li>
                
                <li>
                <a href='https://roadmap.sh/frontend' target="_blank">
                <i class="fas fa-road"></i>
                </a>
                </li>
                
        </StyledNavIcons>
    )
}

export default Navbar