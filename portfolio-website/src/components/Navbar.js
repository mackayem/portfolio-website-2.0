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
