<template>
  <div id="app">
    <div class="wrapper">
      <editor></editor>
    </div>
  </div>
</template>

<script>
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    Editor
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
    text-align: center;
    color: #2c3e50;
    background-color: $wrapper__background-color;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  & > .wrapper {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
  }
}
</style>
