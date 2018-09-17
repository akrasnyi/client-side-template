import React from 'react'
// import { render } from 'react-dom'
import '@atlaskit/css-reset'
import '@atlaskit/reduced-ui-pack'

import './page.scss'

const Landing = () => {
  return (
    <div id='page'>
      <header role='header'>
        <section>
          <ak-grid layout='fixed'>
            <ak-grid-column size='2' class='header-icons'>
              <a href='/'>
                <img src='/img/jira_rgb_with_atlassian.svg' />
              </a>
            </ak-grid-column>
          </ak-grid>
        </section>
      </header>
      <section id='content' className='landing' role='main'>
        <ak-grid layout='fixed'>
          <ak-grid-column size='12' class='aui-page-panel-content main'>
            <h1>This one seems fine too!</h1>
          </ak-grid-column>
        </ak-grid>
      </section>
      <footer id='footer' role='contentinfo'>
        <ak-grid layout='fixed'>
          <ak-grid-column size='12' class='footer-body'>
            <ul id='aui-footer-list'>
              <li>
                <a href='https://atlassian.com'>Atlassian</a>
              </li>
              <li>
                <a href='https://support.atlassian.com'>Support</a>
              </li>
              <li>
                <a href='https://www.atlassian.com/legal/privacy-policy'>Privacy policy</a>
              </li>
              <li>
                <a href='https://www.atlassian.com/legal/customer-agreement'>Terms of use</a>
              </li>
              <li>Copyright © 2017 Atlassian</li>
            </ul>
            <div id='footer-logo'><a href='http://www.atlassian.com'>Atlassian</a></div>
          </ak-grid-column>
        </ak-grid>
      </footer>
    </div>
  )
}

export default Landing
