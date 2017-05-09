<template>
    <ul class="post-list">
        <li class="post" v-for="post in getPosts">
            <transition name="fade">
                <div class="wrapper" v-show="post.showen">
                    <img class="image" :src="post.image" alt="post-image">
                </div>
            </transition>
            <h3 class="title">{{ post.title }}</h3>
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
    $post-list__color: #a6a9aa;
    $color-white: #fff;
    $post-list-wrapper__background-color: #f2f2f2;

    .post-list {
        & {
            position: relative;
            min-width: 275px;
            max-width: 565px;
            margin: 0 auto;
            padding: 10px 10px 0 10px;
            color: $post-list__color;
            list-style: none;
            overflow-y: auto;
            max-height: 535px;
        }

        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar {
            width: 5px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #555;
        }
    }
    .post-list > .post {
        & {
            display: flex;
            flex-flow: column;
            -webkit-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
            border-radius: 5px 0 5px 0;
            background: $color-white;
            position: relative;
            margin-bottom: 30px;
        }

        > .wrapper {
            position: relative;
            border-radius: 5px 0 5px 0;
            height: 335px;
            width: 100%;
            background-color: $post-list-wrapper__background-color;
        }

        > .wrapper > .image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 100%;
            max-height: 100%;
        }

        > .tile,
        > .text {
            font-size: 20px;
            text-align: left;
        }

        > .title {
            padding: 15px 20px 10px;
        }

        > .text {
            resize: none;
            padding: 0px 20px 20px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
