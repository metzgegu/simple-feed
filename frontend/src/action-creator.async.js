const API_URL = 'http://localhost:3000'

export const getAccountInfo = () =>
  fetch(`${API_URL}/account/validate`, {
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

export const getFeedItemList = (accessToken) =>
  fetch(`${API_URL}/dashboard/?accessToken=${accessToken}`, {
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
