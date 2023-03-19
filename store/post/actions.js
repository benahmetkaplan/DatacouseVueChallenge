export default {    
    async getPostList(store) {
        let endpoint = `${this.$config.API_URL}/posts`;
        try {
            let response = await this.$axios.get(endpoint);
            store.commit("setPosts", response.data.slice(0, 18));
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
    async getPostRecord(store, payload) {
        let endpoint = `${this.$config.API_URL}/posts/` + payload;
        try {
            let response = await this.$axios.get(endpoint);
            store.commit("setPost", response.data);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
};