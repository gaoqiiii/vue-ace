# vue-ace

> A Vue.js project

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### use

```
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
      },
      // **新增** 动态修改主题
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
```
### Configuration


param | type |default | des |
---|---|---|---
value| string|'' |编辑内容
width | number|500| 编辑器宽度
height | number|300| 编辑器高度
lang | string| javascript| 语言模版
theme | string| monokai| 编辑器主题
readOnly | boolean| false | 是否开启只读模式
fullScreen| boolean| false | 是否开启全屏模式
autoCompletion| boolean| false|是否开启代码提示和自动补全
tabSize| number | 4 | tab大小
# vue-ace
