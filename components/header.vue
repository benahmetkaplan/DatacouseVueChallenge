<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">{{ $config.APP_NAME }}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :class="(path === '/' ? 'active' : '')" href="/">Posts</b-nav-item>
                <b-nav-item :class="(path === '/todo' ? 'active' : '')" href="/todo">Todo</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>

export default {
    name: "Header", 
    data() {
        return {
            path: process.browser && window.location.pathname
        }
    }
}
</script>