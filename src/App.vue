<!-- eslint-disable -->
<template>
    <todoHeader />
    <router-view />
</template>
<!-- eslint-disable -->
<script setup>
import todoHeader from "@/components/todoHeader.vue";
</script>
<!-- eslint-disable -->
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
