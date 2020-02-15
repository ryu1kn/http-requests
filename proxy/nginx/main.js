
function forwardRequest(r) {
  r.variables.request_headers = JSON.stringify(r.headersIn)
  r.subrequest(`/__forward__${r.uri}`, {method: r.method, args: _queryString(r.args)})
    .then(res => {
      r.variables.response_headers = JSON.stringify(res.headersOut)
      r.variables.response_body = res.responseBody
      _copyResponse(res, r)
    })
    .catch(e => r.return(500, e.message))
}

function _queryString(queryObj) {
  return Object.keys(queryObj).map(k => `${k}=${queryObj[k]}`).join('&')
}

function _copyResponse(res, r) {
  _copyResponseHeaders(res, r)
  r.return(res.status, res.responseBody)
}

function _copyResponseHeaders(src, dest) {
  Object.keys(src.headersOut).forEach(key => {
    dest.headersOut[key] = src.headersOut[key]
  })
}

function doNothing(_r) {}
