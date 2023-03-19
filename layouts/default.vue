<template>
	<div>
		<client-only>
            <Header />
            <nuxt />
			<Footer />
		</client-only>
	</div>
</template>
<script>
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';

export default {
	components: {
        Header,
		Footer
	}
}
</script>