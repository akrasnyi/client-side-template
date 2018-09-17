import React from 'react'
import PropTypes from 'prop-types'

const format = data => JSON.stringify(data, null, 4)

function AddonInfo ({ version, instance, statuses }) {
  return (
    <section id='content' role='main' className='ac-content'>
      <div className='aui-page-panel main-panel'>
        <div>
          <section className='aui-page-panel-item'>
            <h1>Everything seems to be working fine</h1>
            <br />
            <h3>Version.json</h3>
            <pre>
              {format(version)}
            </pre>
            <br />
            <h3>Instance info retrieved from addon back-end</h3>
            <pre>
              {format(instance)}
            </pre>
            <br />
            <h3>Statuses retrieved directly from JIRA</h3>
            <pre>
              {format(statuses)}
            </pre>
          </section>
        </div>
      </div>
    </section>
  )
}

AddonInfo.propTypes = {
  version: PropTypes.object.isRequired,
  instance: PropTypes.object.isRequired,
  statuses: PropTypes.object.isRequired
}

export default AddonInfo
