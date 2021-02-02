import React, {Component} from 'react';

const NavbarItems = [
  {
    title: 'About',
    url: "#about-section",
    cName: 'nav-links'
  },
  {
    title: 'Education',
    url: "#education-section",
    cName: 'nav-links'
  },
  {
    title: 'Projects',
    url: "#project-section",
    cName: 'nav-links'
  },
  {
    title: 'Contact',
    url: "#contact-section",
    cName: 'nav-links'
  }
]



class Navbar extends Component {
  render() {
    return(


      <nav className="navbar-wrapper">
        <ul>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
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
