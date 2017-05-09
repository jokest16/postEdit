<template>
    <div id="app">
        <div class="wrapper" :class="{'-full': !getPosts.length}">
            <editor></editor>
            <posts></posts>
        </div>
    </div>
</template>

<script>
import Editor from './components/Editor'
import Posts from './components/Posts'
import {mapGetters} from 'vuex'

export default {
    name: 'app',
    components: {
        Editor,
        Posts
    },
    computed: {
        ...mapGetters([
            'getPosts',
        ])
    }
}
</script>

<style lang="scss">
$wrapper__background-color: #e1e1e1;

#app {
    & {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: $wrapper__background-color;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 0 10px;
    }

    & > .wrapper {
        max-width: 1025px;
        margin: 0 auto;
        background-color: #fff;
        padding-bottom: 30px;
    }
    & > .wrapper.-full {
        height: 100%;
    }
}


@media (min-width: 480px) {
    #app {
        padding: 0 40px;
    }
}

@media (min-width: 768px) {
    #app {
        padding: 0 60px;
    }
}
</style>
