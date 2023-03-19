<template>
    <b-container class="py-3">
        <b-row>
            <b-col v-if="posts !== null" v-for="item in posts" :key="item.id" cols="4">
                <b-card :title="item.title" :img-src="`https://picsum.photos/600/300/?image=${item.id}`" :img-alt="item.title" img-top tag="article" class="mb-2" >
                    <b-card-text>{{ item.body }}</b-card-text>
                    <b-card-text v-if="item.userName">
                        <a :href="`/user/${item.userId}`">
                            {{ item.userName }}
                        </a>
                    </b-card-text>
                    <b-button :href="`/post/${item.id}`" variant="primary">Read more</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            posts: null
        }
    },
    computed: {
		...mapGetters('post', ["getPosts"]),
		...mapGetters('user', ["getUsers"])
	},
    async created() {
		await this.$store.dispatch("post/getPostList");
        await this.$store.dispatch("user/getUserList");
        this.getPostRecords();
	},
    methods: {
        ...mapActions({getPostList: 'post/getPostList'}),
        ...mapActions({getUserList: 'user/getUserList'}),

        async getPostRecords(){
            const posts = await this.getPosts();
            const users = await this.getUsers();
            const records = posts.map(item => ({
                ...item,
                userName: users.find(x => x.id === item.userId).name
            }));
            this.posts = records;
        }
    }
}
</script>