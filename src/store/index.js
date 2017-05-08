import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
    state: {
        posts: []
    },
    getters: {
        getPosts (state) {
            return state.posts
        },
    },
    mutations: {
        addNewPostInfo (state, postInfo) {
            state.posts.unshift(postInfo)
        }
    }
})

export default vuex