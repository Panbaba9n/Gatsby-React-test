import React from 'react';
import Link from 'gatsby-link';

import Navigation from '../navigation';

const Header = () => (
  <div
    style={{
      background: '#fff',
      marginBottom: '1.45rem',
      borderBottom: '5px solid purple'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Navigation to="/">Gatsby</Navigation>
      </h1>
        <ul style={{ listStyle: `none`, float: `right`, margin: `0 0 0 auto` }}>
            <Navigation to="/">Home</Navigation>
            <Navigation to="/about-pandas/">About pandas</Navigation>
            <Navigation to="/markdown-files/">Markdown</Navigation>
            <Navigation to="/page-2/">Go to page 2</Navigation>
            <Navigation to="/counter/">Counter</Navigation>
            <Navigation to="/about-css-modules/">About css modules</Navigation>
            <Navigation to="/contact/">Contact</Navigation>
        </ul>

    </div>
  </div>
)

export default Header
