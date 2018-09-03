<template>
    <div id="app">
        <div class="ace-editor-wrap">
            <ace-editor
                :config = "config"
                @init="init"
                @input= "aceChange"
            ></ace-editor>
        </div>
        <button @click="change">换主题</button>
    </div>
</template>

<script>
import aceEditor from './ace-editor'
export default {
  name: 'app',
  data () {
    return {
      config: {
          width:800,
          height:800,
          value: '',
          autoCompletion: true,
          fullScreen: true,
          theme: 'monokai'
      }
    }
  },
  methods: {
      init ($ace) {
          console.log($ace)
      },
      aceChange (content,$ace,$fn) {
          console.log('content', content)
      },
      // 动态修改主题
      changeTheme () {
        this.config = Object.assign({}, this.config, {
            theme: 'eclipse' 
        })
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
