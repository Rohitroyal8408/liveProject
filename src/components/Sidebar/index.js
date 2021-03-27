import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebarBtn,SidebarBtnLink} from './SidebarComp';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to='about'>About</SidebarLink>
                    <SidebarLink onClick={toggle} to='contactus'>Contact Us</SidebarLink>
                    <SidebarLink onClick={toggle} to='services'>Services</SidebarLink>
                    <SidebarLink onClick={toggle} to='signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarBtnLink to='/signin'>Sign In</SidebarBtnLink>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
