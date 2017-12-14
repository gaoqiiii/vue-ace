<template>
    <div id="app">
        <div class="ace-editor-wrap">
            <ace-editor
                class="ace-full-screen"
                :config = "config"
                @init="init"
                @input= "aceChange"
            ></ace-editor>
        </div>
    </div>
</template>

<script>
import aceEditor from './ace-editor'
export default {
  name: 'app',
  data () {
    return {
      config: {
          width:1000,
          height:1000,
          value: '',
          autoCompletion: true,
          fullScreen: true
      }
    }
  },
  methods: {
      init ($ace) {
          console.log($ace)
      },
      aceChange (content,$ace,$fn) {
          console.log('content', content)
      }
  },
  components: {
    'ace-editor': aceEditor
  }
}
</script>

<style lang="scss">
    @import url("./ace-editor/style.css");
    html,body {
        width: 100%;
        height: 100%;
    }
    .ace-editor-wrap {
        width: 100%;
        height: 100%;
    }
</style>
