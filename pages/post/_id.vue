<template>
    <b-container class="py-3">
        <b-card v-if="getPost() !== null" :title="getPost().title" :img-src="`https://picsum.photos/600/300/?image=${getPost().id}`" :img-alt="getPost().title" img-top>
            <b-card-text v-if="getPost().body !== undefined">{{ getPost().body }}</b-card-text>
        </b-card>
    </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        ...mapGetters('post', ["getPost"])
    },
    mounted(){
        this.getPost();
    },
    created() {
		this.$store.dispatch("post/getPostRecord", this.id);
	},
    methods: {
        ...mapActions({getPostRecord: 'post/getPostRecord'})
    }
}
</script>