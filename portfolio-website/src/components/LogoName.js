import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const StyledLogoName = styled.h1`
  font-size: ${({font-size}) => font-size || '1rem'};
  color: ${({color}) => color || '#FFFFFF'};
  font-family: 'Vidaloka', serif;
`;

const LogoName = ({font-size, color}) => {
  return <StyledLogoName fontsize={font-size} color={color}></StyledLogoName>
};

export default LogoName;
