export default {    
    async getUserList(store) {
        let endpoint = `${this.$config.API_URL}/users`;
        try {
            let response = await this.$axios.get(endpoint);
            store.commit("setUsers", response.data);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
    async getUserRecord(store, payload) {
        let endpoint = `${this.$config.API_URL}/users/` + payload;
        try {
            let response = await this.$axios.get(endpoint);
            store.commit("setUser", response.data);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
};