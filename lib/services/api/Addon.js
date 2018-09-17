import fetch from '../Fetch'
import queryString from 'query-string'
import showErrorMessage from 'Error'

const tokens = queryString.parse(window.location.search)
const conType = { 'Content-Type': 'application/json' }
let isBroken = false

const catchMessage = (error = '', message) => {
  if (isBroken) {
    return showErrorMessage(message)
  }
  isBroken = true
  return showErrorMessage(`${error.code} ${message}: ${error.message}`)
}

const getAddonToken = fetch('/api/sessions', {
  headers: Object.assign(
    {'Authorization': tokens.jwt},
    conType
  ),
  method: 'POST'
})
.then(response => response.data.token)
.catch(error => catchMessage(error, 'while getting addon token'))

function request (url, params) {
  if (isBroken) return catchMessage('', 'Please reload the page')

  return getAddonToken.then(addonToken => {
    params.headers['Addon-Token'] = addonToken

    return fetch(url, params)
  })
  .then(response => response.data)
}

export function version () {
  return request(`/version.json`, {
    headers: conType,
    method: 'GET'
  })
}

export function showInstance () {
  return request(`/api/instances`, {
    headers: conType,
    method: 'GET'
  })
}

export default {
  version: version,
  instance: {
    show: showInstance
  }
}
