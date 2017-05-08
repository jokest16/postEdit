<template>
    <ul class="post-list">
        <li class="post" v-for="post in getPosts">
            <img class="image" :src="post.image" alt="post-image">
            <h1 class="title">{{ post.title }}</h1>
            <p class="text">{{ post.text }}</p>
        </li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex'
import Editor from './Editor'

export default {
    name: 'posts',
    components: {
        Editor
    },
    computed: {
        ...mapGetters([
            'getPosts',
        ])
    },
    methods: {}
}
</script>

<style lang="scss">

</style>
