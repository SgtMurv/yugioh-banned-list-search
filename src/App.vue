<template>
    <div id="app">
        <input type="text" v-model="searchString" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'App',
    data: () => {
        return {
            searchString: '',
            bannedListResults: [],
        }
    },
    created() {
        this.$store.dispatch('fetchBannedList')
    },
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
