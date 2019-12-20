const getters = {
  limit: state => state.app.limit,
  info: state => {
    if (!state.user.info) {
      state.user.info = JSON.parse(localStorage.getItem('info'))
    }
    return state.user.info
  }
}

export default getters
