import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const StyledLogoName = styled.h1`
  font-size: ${({fontsize}) => fontsize || '1rem'};
  color: ${({color}) => color || '#FFFFFF'};
  font-family: 'Dawning of a New Day', cursive;
  padding: 1.5rem;
  margin: 0;
`;

const LogoName = ({fontsize, color}) => {
  return <StyledLogoName fontsize={fontsize} color={color}>Emily Mackay</StyledLogoName>
};

export default LogoName;
