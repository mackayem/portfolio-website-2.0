import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import LogoName from './LogoName';

const NavbarItems = [
  { title: 'About',
    url: "#about-section",
    className: 'navbar-links'
  },
  { title: 'Education',
    url: "#education-section",
    className: 'navbar-links'
  },
  { title: 'Projects',
    url: "#project-section",
    className: 'navbar-links'
  },
  { title: 'Contact',
    url: "#contact-section",
    className: 'navbar-links'
  }
]


const StyledNavWrapper = styled.nav`
  height: 4.2rem;
  width: 100%;
  background-color: $redwine;
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
  padding: 0.7rem;
  color: $white;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  text-transform: lowercase;
  font-size: 1.2rem;
  &:hover {
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;





class Navbar extends Component {
  state = {toggled: false}
  toggleMenu = () => {
    this.setState({toggled: !this.state.toggled})
  }

  render() {
    return(
      <nav id="navbar-wrapper">
        <div id="navbar-icon" onClick={this.toggleMenu}>
          <i className={this.state.toggled ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.toggled ? 'navbar-menu toggled' : 'navbar-menu'}>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                {item.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
