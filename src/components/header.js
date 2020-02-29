import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import "typeface-raleway"
import DarkModeToggle from '../components/darkMode'

const Header = styled('header')`
  background: rebeccapurple;
  width: 100%;
  padding: 1.5rem 1.0875rem;
  margin-bottom: 2rem;
  font-family: "raleway";
`

const Nav = styled('nav')`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #a9a9a9;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}


const Header1 = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
            Ignatius
            </Link>
          </li>
          <li>
            <Link to="/background/" activeStyle={activeLinkStyle}>
              Background
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
          <li><DarkModeToggle /></li>
        </ul>
      </Nav>
    </Header>
  )
 }

Header1.propTypes = {
  siteTitle: PropTypes.string,
}

Header1.defaultProps = {
  siteTitle: '',
}

export default Header1
