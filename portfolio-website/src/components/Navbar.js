import React, {Component} from 'react';

const NavbarItems = [
  { title: 'About',
    url: "#about-section",
    className: 'nav-links'
  },
  { title: 'Education',
    url: "#education-section",
    className: 'nav-links'
  },
  { title: 'Projects',
    url: "#project-section",
    className: 'nav-links'
  },
  { title: 'Contact',
    url: "#contact-section",
    className: 'nav-links'
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
        <h1 id="navbar-name">Emily Mackay</h1>
        <div className="navbar-icon" onClick={this.toggleMenu}>
          <i className={this.state.toggled ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.toggled ? 'navbar-menu active' : 'navbar-menu'}>
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
