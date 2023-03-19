export default {
  getUsers: state => {
    return () => {
      return state.users
    }
  },
  getUser: state => {
    return () => {
      return state.user
    }
  }
};