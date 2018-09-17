import AP from '../AP'
import showErrorMessage from 'Error'

async function request (url) {
  const ap = await AP
  return new Promise((resolve, reject) => {
    ap.request({
      url: url,
      success: (responseText) => {
        var data = JSON.parse(responseText)
        resolve(data)
      }
    })
  })
}

const catchMessage = (error, message) => showErrorMessage(`${message}. Please, reload the page.`, error)

async function requestToJira (url, errorMessage) {
  try {
    return await request(url)
  } catch (error) {
    catchMessage(error, errorMessage)
  }
}

export const getStatuses = () => requestToJira('/rest/api/2/status', 'While getting statuses')

export default {
  getStatuses
}
