export default {
  getPosts: state => {
    return () => {
      return state.posts
    }
  },
  getPost: state => {
    return () => {
      return state.post
    }
  }
};