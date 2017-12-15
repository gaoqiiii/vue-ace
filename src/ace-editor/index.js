import brace from 'brace'
import langTools from 'brace/ext/language_tools'
// 默认配置
var defaultConfig = {
    value: '',
    width: 500,
    height: 300,
    lang: 'javascript',
    theme: 'monokai',
    readOnly: false,
    fullScreen: false,
    autoCompletion:false,
    tabSize: 4
}
export default {
    template: `<div :style="{height:myConfig.height + 'px', width:myConfig.width + 'px'}"></div>`,
    props: {
        config: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    data () {
        return {
            myConfig: Object.assign({}, defaultConfig, this.config),
            $ace: null
        }
    },
    watch: {
        config(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.myConfig = Object.assign({}, defaultConfig, newVal);
            }
        }
    },
    methods: {
        setfullScreen () {
             this.$el.classList.toggle('ace-full-screen')
             this.$ace.resize()
         }
    },
    mounted () {
        this.$ace = brace.edit(this.$el)
        let session = this.$ace.getSession()
        this.$emit('init', this.$ace)

        require(`brace/mode/${this.myConfig.lang}`)
        require(`brace/theme/${this.myConfig.theme}`)
        // 代码提示与自动补全
        this.$ace.setOptions({
    		enableBasicAutocompletion: this.myConfig.autoCompletion,
    		enableLiveAutocompletion: this.myConfig.autoCompletion
    	});

        session.setMode(`ace/mode/${this.myConfig.lang}`) // 配置语言
        this.$ace.setTheme(`ace/theme/${this.myConfig.theme}`) // 配置主题
        this.$ace.setValue(this.myConfig.value, 1) // 设置默认内容
        this.$ace.setReadOnly(this.myConfig.readOnly) // 设置是否为只读模式
        session.setTabSize(this.myConfig.tabSize) //Tab大小
        session.setUseSoftTabs(true);

        this.$ace.setShowPrintMargin(false) // 不显示打印边距
        session.setUseWrapMode(true) // 自动换行


        // 绑定输入事件回调
        this.$ace.on('change', ($editor, $fn) => {
            var content = this.$ace.getValue()
            this.$emit('input', content, $editor, $fn)
        })
    }
}
