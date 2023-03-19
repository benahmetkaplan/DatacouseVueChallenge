export default {
  getTodos: state => {
    return () => {
      return state.todos
    }
  }
};