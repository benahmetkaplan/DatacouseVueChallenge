<template>
    <b-container class="py-3">
        <div class="mb-3">
            <label for="text-search">Search:</label>
            <b-form-input type="text" v-model="key" @change="search"></b-form-input>
        </div>

        <b-list-group>
            <b-list-group-item
                class="d-flex justify-content-between align-items-center"
                v-if="results !== null"
                v-for="item in results"
                :key="item.id"
                :class="{ 'is-done': item.completed }"
            >
                <span><strong><a :href="`/user/${item.userId}`">{{ item.userName }}</a></strong>&emsp;{{ item.title }}</span>
                <button
                class="btn"
                :class="item.completed ? 'btn-success' : 'btn-danger'"
                :title="'set ' + (item.completed ? 'todo' : 'done')"
                >
                {{ item.completed ? "✓" : "✗" }}
                </button>
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            key: '',
            todos: null,
            results: null
        }
    },
    computed: {
		...mapGetters('todo', ["getTodos"]),
		...mapGetters('user', ["getUsers"])
	},
    async created() {
		await this.$store.dispatch("todo/getTodoList");
        await this.$store.dispatch("user/getUserList");
        this.getTodoRecords();
	},
    methods: {
        ...mapActions({getTodoList: 'todo/getTodoList'}),
        ...mapActions({getUserList: 'user/getUserList'}),

        async getTodoRecords(){
            const todos = await this.getTodos();
            const users = await this.getUsers();
            const records = todos.map(item => ({
                ...item,
                userName: users.find(x => x.id === item.userId).name
            }));
            this.todos = records;
            this.results = records;
        },
        search(){
            const todos = this.todos;
            this.results = todos.filter(x => x.title.includes(this.key));
        }
    }
}
</script>