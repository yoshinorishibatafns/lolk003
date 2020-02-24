/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Auth } from '../api'
/* eslint-disable no-unused-vars */

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, mail }) => {
        localStorage.setItem('token', token)
        commit(types.AUTH_LOGIN, { token, mail })
      })
      .catch(err => { throw err })
  },
  logout: ({ commit, state }) => {
    return Auth.logout(state.auth.token)
      .then(() => {
        localStorage.removeItem('token')
        commit(types.AUTH_LOGOUT, { token: null, mail: null })
      })
      .catch(err => { throw err })
  }
}
