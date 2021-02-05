import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const StyledLogoName = styled.h1`
  font-size: ${({fontsize}) => fontsize || '1rem'};
  color: ${({color}) => color || '#FFFFFF'};
  font-family: 'Vidaloka', serif;
`;

const LogoName = ({fontsize, color}) => {
  return <StyledLogoName fontsize={fontsize} color={color}>Emily Mackay</StyledLogoName>
};

export default LogoName;
