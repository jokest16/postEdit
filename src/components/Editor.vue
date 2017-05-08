<template>
    <div class="editor-companent">
            <button>Добавить новую</button>
            <input type="file" @change="onFileChange">
            <input type="text" v-model="postTitle">
            <textarea v-model="postText"></textarea>
            <img :src="image"/>
    </div>
</template>

<script>
export default {
    name: 'editor',
    data () {
        return {
            buttonText: 'Добавить новую',
            image: null,
            postTitle: '',
            postText: ''
        }
    },
    methods: {
        onFileChange (e) {
            let files = e.target.files || e.dataTransfer.files;
            if (files.length) {
                this.createImage(files[0])
            }
        },
        createImage (file) {
            let reader = new FileReader();

            reader.onload = (e) => {
                this.image = e.target.result
            };

            reader.readAsDataURL(file)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
