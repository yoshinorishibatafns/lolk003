import store from '../store'

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // TODO: check from backend api
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
}
