import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Navbar from './Navbar';
import LogoName from './LogoName';
// import {StyledNavWrapper, StyledNavUL, StyledNavLink} from './NavbarStyled';


const StyledNavWrapper2 = styled.nav`
  height: 4.2rem;
  width: 100%;
  background-color: #3A1B21;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  z-index: 1;
`;

const StyledNavWrapperMobile = styled(StyledNavWrapper2)`
  height: 100%;
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(#3A1B21 30%, rgba(58, 27, 33, 0.0) 60%);
  flex-direction: column;
`;


const StyledNavUL2 = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-gap: 1.3rem;
  list-style-type: none;
`;

const StyledNavLink2 = styled.a`
  padding: 0.5rem 0.7rem;
  color: #FAF7F4;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  text-transform: lowercase;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;
  &:hover {
    text-decoration: none;
    color: #FAF7F4;
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }
`;

const StyledNavDrawerIcon = styled.i`
  display: block;
  ${props => {
    if (props.toggle) {
      return`
        className: fas fa-times;
      `;
    } else {
      return `
        className: fas fa-bars;
      `;
    }
  }}
`;



class NavbarMobile extends Navbar {
  state = {toggle: false};


  render() {
    return(
      <StyledNavWrapper2>
        <LogoName fontsize="1.5rem" color="#F6EEE3"></LogoName>
        <StyledNavDrawerIcon></StyledNavDrawerIcon>
      </StyledNavWrapper2>
    )
  }
}

export default NavbarMobile;
