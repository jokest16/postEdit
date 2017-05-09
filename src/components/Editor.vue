<template>
    <div class="editor-component">
        <button class="button" @click="addNewPost">Добавить новую</button>
        <div class="wrapper">
            <input id="file" class="file" type="file" @change="onFileChange">
            <label for="file" class="download" :class="{'-dashed': dashedBorder}">
                <img class="img" :src="newPost.image" v-if="newPost.image"/>
                <span class="label" v-else>Кликните здесь для загрузки изображения</span>
            </label>
            <input class="tile" type="text" placeholder="Заголовок" v-model="newPost.title">
            <textarea class="text" type="text" placeholder="Введите текст" v-model="newPost.text"></textarea>
        </div>
    </div>
</template>

<script>

export default {
    name: 'editor',
    data () {
        return {
            dashedBorder: true,
            newPost: {
                image: null,
                title: '',
                text: '',
                showen: true
            }
        }
    },
    methods: {
        onFileChange (e) {
            let files = e.target.files || e.dataTransfer.files;
            if (files.length) {
                this.dashedBorder = false
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
                text: this.newPost.text,
                showen: this.newPost.showen
            }

            if(this.newPost.image && this.newPost.title && this.newPost.text) {
                this.newPost.image = null
                this.newPost.title = ''
                this.newPost.text = ''
                this.dashedBorder = true
                return this.$store.commit('addNewPostInfo', post)
            }else {
                alert('Please add image, title, text')
            }
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
    & {
        min-width: 280px;
        max-width: 565px;
        margin: 0 auto;
        padding: 10px 10px 0 10px;
        color: $edit-component__color;
    }

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
        margin-bottom: 30px;
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
        position: relative;
        background-color: $download__background-color;
        font-size: 20px;
        line-height: 1.5;
        border-radius: 5px 0 5px 0;
        height: 335px;
        width: 100%;
    }

    > .download > .img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
    }

    > .download > .label {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        max-width: 250px;
    }

    > .download.-dashed:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 2px dashed $button__border-color;
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }

    > .download.-dashed:hover {
        &:after {
            opacity: 1;
        }
    }

    > .tile,
    > .text {
        border: none;
        color: $edit-component__color;
        outline: none;
        font-size: 20px;
    }

    > .tile {
        padding: 15px 20px 10px;
    }

    > .text {
        resize: none;
        padding: 0px 20px 20px;
    }
}

@media (min-width: 768px) {
    .editor-component > .wrapper {
        > .download > .label {
            font-size: 20px;
        }
    }
}
</style>
