import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

// import JIRA from '../../services/api/JIRA'
// import Addon from '../../services/api/Addon'
import AddonInfo from '../../components/AddonInfo'

import './page.scss'

@observer
export default class ConfigProject extends React.Component {
  @observable statuses = []
  @observable instance
  @observable version = {}

  async componentWillMount () {
    // const [version, instance, statuses] = await Promise.all([
    //   Addon.version(),
    //   Addon.instance.show(),
    //   JIRA.getStatuses()
    // ])

    this.version = {
      "nodeVersion": "v8.5.0",
      "packageName": "jira-addon-template",
      "gitStuff": "NOT_FOUND",
      "version": "NOT_FOUND"
    }
    this.instance = {
      "id": "885a2bdd-f5e7-338c-a04e-fd3911dbe2b2",
      "description": "Atlassian JIRA at https://akrasnyi-2.jira-dev.com",
      "baseUrl": "https://akrasnyi-2.jira-dev.com",
      "serverVersion": "100061",
      "pluginsVersion": "1.3.259",
      "createdAt": "2017-10-03T13:56:54.403Z",
      "updatedAt": "2017-10-03T13:56:54.403Z"
    }
    this.statuses = [{
      "self": "https://akrasnyi-2.jira-dev.com/rest/api/2/status/3",
      "description": "This issue is being actively worked on at the moment by the assignee.",
      "iconUrl": "https://akrasnyi-2.jira-dev.com/images/icons/statuses/inprogress.png",
      "name": "In Progress",
      "id": "3",
      "statusCategory": {
          "self": "https://akrasnyi-2.jira-dev.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
      }
    }]
  }

  render () {
    return <AddonInfo
      statuses={this.statuses}
      instance={this.instance}
      version={this.version}
    />
  }
}
