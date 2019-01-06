import transform from 'lodash/transform'

import Cookie from 'js-cookie'

const headersList = ['Authorization']

const getCookieHeaders = () =>
  headersList.reduce((o, h) => {
    o[h] = Cookie.get(h)
    return o
  }, {})

export const persistHeadersInCookies = (headers) => {
  return headersList.forEach((headerName) =>
    Cookie.set(headerName, headers[headerName])
  )
}

export const cleanHeadersInCookies = () => (
  headersList.forEach((headerName) =>
    Cookie.remove(headerName)
  )
)

export const extractFromHeaders = (headers) => (
  transform(headersList, (result, headerName) => {
    result[headerName] = headers[headerName]
  }, {})
)

export const persistHeaders = persistHeadersInCookies
export const cleanHeaders = cleanHeadersInCookies

export const getHeaders = () => {
  const headers = getCookieHeaders()

  persistHeaders(headers)
  return headers
}
