export default {    
    async getTodoList(store) {
        let endpoint = `${this.$config.API_URL}/todos`;
        try {
            let response = await this.$axios.get(endpoint);
            store.commit("setTodos", response.data);
        } catch (error) {
            console.error(`Error: `, error);
        }
    }
};