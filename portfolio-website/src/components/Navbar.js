import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import {StyledNavWrapper, StyledNavUL, StyledNavLink} from './NavbarStyled';



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
};

export default Navbar;
