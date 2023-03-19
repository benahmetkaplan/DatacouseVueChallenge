<template>
    <b-container class="py-3">
        <b-card v-if="getUser() !== null" :title="getUser().name">
            <b-card-text v-if="getUser().phone !== undefined"><strong>Phone:</strong> {{ getUser().phone }}</b-card-text>
            <b-card-text v-if="getUser().email !== undefined"><strong>E-Mail:</strong> {{ getUser().email }}</b-card-text>
            <b-card-text v-if="getUser().username !== undefined"><strong>Username:</strong> {{ getUser().username }}</b-card-text>
            <b-card-text v-if="getUser().website !== undefined"><strong>Website:</strong> {{ getUser().website }}</b-card-text>
            <b-card-text v-if="getUser().address.city !== undefined"><strong>City:</strong> {{ getUser().address.city }}</b-card-text>
            <b-card-text v-if="getUser().company.name !== undefined"><strong>Company:</strong> {{ getUser().company.name }}</b-card-text>
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
        ...mapGetters('user', ["getUser"])
    },
    mounted(){
        this.getUser();
    },
    created() {
		this.$store.dispatch("user/getUserRecord", this.id);
	},
    methods: {
        ...mapActions({getUserRecord: 'user/getUserRecord'})
    }
}
</script>