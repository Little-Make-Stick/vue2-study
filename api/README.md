### API

#### Vue.config

##### 取消 Vue 所有的日志与警告

silent

```js
Vue.config.silent = true
```

##### 自定义合并策略的选项

optionMergeStrategies

```js
/* 父实例和子实例上定义的该选项的值作为第一个和第二个参数，Vue 实例上下文被作为第三个参数传入 */
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
    return child + 1
}
```
```js
const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
    if (!toVal) return fromVal
    if (!fromVal) return toVal
    return {
      getters: merge(toVal.getters, fromVal.getters),
      state: merge(toVal.state, fromVal.state),
      actions: merge(toVal.actions, fromVal.actions)
    }
}
```

##### 是否允许 vue-devtools 检查代码

devtools

```js
Vue.config.devtools = true
```

##### 组件的渲染和观察期间未捕获错误的处理函数

errorHandler

```js
Vue.config.errorHandler = function (err, vm, info) {
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
}
```

##### 为 Vue 的运行时警告赋予一个自定义处理函数

warnHandler

```js
Vue.config.warnHandler = function (msg, vm, trace) {
    // `trace` 是组件的继承关系追踪
}
```

##### 使 Vue 忽略在 Vue 之外的自定义元素 

ignoredElements

```js
Vue.config.ignoredElements = [
    'my-custom-web-component',
    'another-web-component',
    // 用一个 `RegExp` 忽略所有“ion-”开头的元素
    // 仅在 2.5+ 支持
    /^ion-/
]
```

##### 给 v-on 自定义键盘键位别名

keyCodes 

```js
Vue.config.keyCodes = {
    v: 86,
    f1: 112,
    // camelCase 不可用
    mediaPlayPause: 179,
    // 取而代之的是 kebab-case 且用双引号括起来
    "media-play-pause": 179,
    up: [38, 87]
}
```

##### 在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪

performance

```js
Vue.config.performance = true
```

##### 阻止 vue 在启动时生成生产提示

productionTip

```js
Vue.config.productionTip = false
```

#### 全局API

##### 使用基础 Vue 构造器，创建一个“子类”

extend()

```js
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
```

##### 在下次 DOM 更新循环结束之后执行延迟回调

nextTick()

```js
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})
```

##### 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新

set()

```js
Vue.set(user, 'token', 'VxVwO9lCjgZzVFP/OltfMDaC');
```

##### 删除对象的 property，且触发视图更新

delete()

```js
Vue.delete(user, 'token')
```

##### 注册或获取全局指令

directive()

```js
Vue.directive('copy', {
    insert(el){
        el.focus();
    }
})
```

##### 注册或获取全局过滤器

filter()

```js
Vue.filter('dateFormatter', (_date) => {
    let date = new Date(_date);
    let y = date.getFullYear();
    let M = (date.getMonth()+1)toSrting().padStart(2, '0')
    let d = (date.getDate())toSrting().padStart(2, '0')

    return `${y}-${M}-${d}`
})
```

##### 注册或获取全局组件

component()

```js
Vue.component('my-component', {
    template: '<div>hello</div>'
})
```

##### 安装 Vue.js 插件

use()

```js
Vue.use(router)
```

##### 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例

mixin()

```js
Vue.mixin({
    data(){
        ak: '',
    }
})
```

##### 将一个模板字符串编译成 render 函数

compile()

```js
var res = Vue.compile('<div><span>{{ msg }}</span></div>')

new Vue({
    data: {
        msg: 'hello'
    },
    render: res.render,
    staticRenderFns: res.staticRenderFns
})
```

##### 让一个对象可响应

observable()

```js
const state = Vue.observable({ count: 0 })

const Demo = {
    render(h) {
        return h('button', {
            on: { click: () => { state.count++ }}
        }, `count is: ${state.count}`)
    }
}
```

##### 提供字符串形式的 Vue 安装版本号

version()

```js
var version = Number(Vue.version.split('.')[0])

if (version === 2) {
    // Vue v2.x.x
} else if (version === 1) {
    // Vue v1.x.x
} else {
    // Unsupported versions of Vue
}
```