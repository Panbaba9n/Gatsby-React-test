import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
<div>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1260,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

  {/*<div style={{ margin: '3rem auto', maxWidth: 600 }}>*/}
    {/*<h1>Richard Hamming on Luck</h1>*/}
    {/*<div>*/}
      {/*<p>*/}
        {/*From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">*/}
          {/*You and Your Research*/}
        {/*</a>”.*/}
      {/*</p>*/}
      {/*<blockquote>*/}
        {/*<p>*/}
          {/*There is indeed an element of luck, and no, there isn’t. The prepared*/}
          {/*mind sooner or later finds something important and does it. So yes, it*/}
          {/*is luck.{" "}*/}
          {/*<em>*/}
            {/*The particular thing you do is luck, but that you do something is*/}
            {/*not.*/}
          {/*</em>*/}
        {/*</p>*/}
      {/*</blockquote>*/}
    {/*</div>*/}
    {/*<p>Posted April 09, 2011</p>*/}
  {/*</div>*/}
</div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
