import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import LogoName from './LogoName';


const StyledNavWrapper = styled.nav`
  height: 4.2rem;
  width: 100%;
  background-color: #3A1B21;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavUL = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1.3rem;
  list-style-type: none;
`;

const StyledNavLink = styled.a`
  padding: 0.5rem 0.7rem;
  color: #FAF7F4;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  text-transform: lowercase;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  &:hover {
    text-decoration: none;
    color: #FAF7F4;
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }
`;


class Navbar extends Component {
  render() {
    return(
      <StyledNavWrapper>
        <StyledNavUL>
          <StyledNavLink href="#">About</StyledNavLink>
          <StyledNavLink href="#">Education</StyledNavLink>
          <StyledNavLink href="#">Projects</StyledNavLink>
          <StyledNavLink href="#">Contact</StyledNavLink>
        </StyledNavUL>
      </StyledNavWrapper>
    )
  }
}

export default Navbar;
