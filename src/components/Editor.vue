<template>
    <div class="editor-component">
        <button class="button" @click="addNewPost">Добавить новую</button>
        <div class="wrapper">
            <input id="file" class="file" type="file" @change="onFileChange">
            <label for="file" class="download">Кликните здесь для загрузки изображения</label>
            <img class="img" :src="newPost.image"/>
            <input class="tile" type="text" v-model="newPost.title">
            <textarea class="text" type="text" v-model="newPost.text"></textarea>
        </div>
    </div>
</template>

<script>

export default {
    name: 'editor',
    data () {
        return {
            newPost: {
                image: null,
                title: '',
                text: ''
            }
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
                this.newPost.image = e.target.result
            };

            reader.readAsDataURL(file)
        },
        addNewPost () {
            let post = {
                image: this.newPost.image,
                title: this.newPost.title,
                text: this.newPost.text
            }

            this.newPost.image = null
            this.newPost.title = ''
            this.newPost.text = ''

            return this.$store.commit('addNewPostInfo', post)
        }
    }
}

</script>

<style lang="scss">

$button__background-color: #b9b9b9;
$button__border-color: #a6a6a6;
$color-white: #fff;
$download__background-color: #f2f2f2;
$edit-component__color: #a6a9aa;

.editor-component {
        min-width: 300px;
        max-width: 565px;
        margin: 0 auto;
        padding: 10px 10px 0 10px;
        color: $edit-component__color;

    > .button {
        outline: none;
        width: 100%;
        color: $color-white;
        background-color: $button__background-color;
        border: 2px solid $button__border-color;
        padding: 20px 0;
        font-size: 20px;
        border-radius: 5px;
        margin-bottom: 25px;
    }
}
.editor-component > .wrapper {
    & {
        display: flex;
        flex-flow: column;
        -webkit-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
        border-radius: 5px 0 5px 0;
        background: $color-white;
    }

    > .file {
        position: absolute;
        overflow: hidden;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        z-index: -1;
    }
    > .download {
        background-color: $download__background-color;
        padding: 150px 150px 130px;
        font-size: 20px;
        line-height: 1.5;
        border-radius: 5px 0 5px 0;
    }

    > .tile,
    > .text {
        border: none;
        color: $edit-component__color;
        padding: 10px 20px;
        outline: none;
        font-size: 20px;
    }

    > .text {
        resize: none;
    }
}

</style>
