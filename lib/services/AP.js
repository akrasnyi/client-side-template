function getAP () {
  function getUrlParam (param) {
    let codedParam = (new RegExp(param + '=([^&]*)')).exec(window.location.search)[1]
    return decodeURIComponent(codedParam)
  }

  let baseUrl = getUrlParam('xdm_e') + getUrlParam('cp')

  let script = document.createElement('script')
  script.src = baseUrl + '/atlassian-connect/all.js'

  // script.setAttribute('data-options', {...AP oprions})

  document.getElementsByTagName('head')[0].appendChild(script)

  return new Promise((resolve, reject) => {
    script.onload = () => resolve(window.AP)
    script.onerror = reject
  })
}

let ap = getAP()

export default ap
