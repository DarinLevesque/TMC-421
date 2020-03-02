/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'
import Image from '../components/image'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import 'typeface-raleway'

import Header from './header'
import '../styles/global.css'

const shortcodes = { SEO, Image }

const Layout = ({ children, title }) => [
  <>
    <div className="siteContainer">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="siteContent">
        <Header />
        <main className="main">
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </main>
      </div>{' '}
      {/* end of .siteContent */}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <Link to="/sitedetails/">References</Link>
      </footer>
    </div>{' '}
    {/* end of .siteContainer */}
  </>,
]

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
