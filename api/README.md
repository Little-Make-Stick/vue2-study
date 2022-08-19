### 全局API

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

#### 全局方法

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

#### 全局数据

##### Vue 实例的数据对象

data

```js
var data = { a: 1 }

// 直接创建一个实例
var vm = new Vue({
    data: data
})
vm.a // => 1
vm.$data === data // => true
```

##### props 可以是数组或对象，用于接收来自父组件的数据

props

```js
props: ['name', 'password'],

props: {
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        validator: (val)=>{
            return val.length >= 6 && val.length <= 18
        }
    }
}
```

##### 创建实例时传递 props

propsData

```js
var Comp = Vue.extend({
    props: ['msg'],
    template: '<div>{{ msg }}</div>'
})

var vm = new Comp({
    propsData: {
        msg: 'hello'
    }
})
```

##### 计算属性将被混入到 Vue 实例中

computed

```js
var vm = new Vue({
  data: { a: 1 },
  computed: {
    // 仅读取
    aDouble: function () {
        return this.a * 2
    },
    // 读取和设置
    aPlus: {
        get: function () {
            return this.a + 1
        },
        set: function (v) {
            this.a = v - 1
        }
    }
  }
})
vm.aPlus   // => 2
vm.aPlus = 3
vm.a       // => 2
vm.aDouble // => 4
```

##### methods 将被混入到 Vue 实例中

methods

```js
var vm = new Vue({
    data: { a: 1 },
    methods: {
        plus: function () {
            this.a++
        }
    }
})
vm.plus()
vm.a // 2
```

##### 一个对象，键是需要观察的表达式，值是对应回调函数

watch

```js
new Vue({
    data: { a: 1 },
    watch: {
        a: function (newV) {
            this.a = newV;
            this.callback()
        }
    }
})
```

#### 全局DOM

##### 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标

el

```js
vm.$el
```

##### 一个字符串模板作为 Vue 实例的标识使用

template

```html
<script type="x-template">....</script>

<template>....</template>
```

##### 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力

render

```js
render: function (createElement) {
    return createElement(
        'h' + this.level,   // 标签名称
        this.$slots.default // 子节点数组
    )
},
```

##### 当 render 函数遭遇错误时，提供另外一种渲染输出

renderError 

```js
renderError (h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
}
```

#### 全局生命周期钩子

##### 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用

beforeCreate


##### 在实例创建完成后被立即同步调用

created

##### 在挂载开始之前被调用：相关的 render 函数首次被调用

beforeMount

##### 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了

mounted

```js
mounted: function () {
    this.$nextTick(function () {
        // 仅在整个视图都被渲染之后才会运行的代码
    })
}
```

##### 在数据发生改变后，DOM 被更新之前被调用

beforeUpdate

##### 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用

updated

```js
updated: function () {
    this.$nextTick(function () {
        // 仅在整个视图都被渲染之后才会运行的代码
    })
}
```

##### 被 keep-alive 缓存的组件激活时调用

activated

##### 被 keep-alive 缓存的组件失活时调用

deactivated

##### 实例销毁之前调用

beforeDestroy

##### 实例销毁后调用

destroyed

##### 在捕获一个来自后代组件的错误时被调用

errorCaptured

此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。

此钩子可以返回 false 以阻止该错误继续向上传播。

#### 全局资源

#####  Vue 实例可用指令的哈希表

directives

##### Vue 实例可用过滤器的哈希表

filters

##### Vue 实例可用组件的哈希表

components

#### 全局组合

##### 已创建的实例之父实例，在两者之间建立父子关系

parent

##### 接收一个混入对象的数组

mixins

##### 允许声明扩展另一个组件 (可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend

extends

```js
var CompA = { ... }

// 在没有调用 `Vue.extend` 时候继承 CompA
var CompB = {
  extends: CompA,
  ...
}
```

##### 允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效

provide / inject

```js
// 父级组件提供 'foo'
var Provider = {
    provide: {
        foo: 'bar'
    },
    // ...
}

// 子组件注入 'foo'
var Child = {
    // inject: ['foo'],
    // 如果它需要从一个不同名字的 property 注入，则使用 from 来表示其源 property
    inject: {
        bar: {
            from: 'foo',
            default: 'foo'
        }
    }
    created () {
        console.log(this.foo) // => "bar"
    }
    // ...
}
```

#### 全局其他

##### 允许组件模板递归地调用自身

name

##### 改变纯文本插入分隔符

delimiters: 默认值： ["{{", "}}"]

```js
new Vue({
    delimiters: ['${', '}']
})
```

##### 使组件无状态 (没有 data) 和无实例 (没有 this 上下文)

functional

##### 允许一个自定义组件在使用 v-model 时定制 prop 和 event

model

```html
<my-checkbox v-model="foo" value="some value"></my-checkbox>
<script>
Vue.component('my-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        // this allows using the `value` prop for a different purpose
        value: String,
        // use `checked` as the prop which take the place of `value`
        checked: {
            type: Number,
            default: 0
        }
    },
    // ...
})
</script>

<!-- 相当于 -->

<my-checkbox
  :checked="foo"
  @change="val => { foo = val }"
  value="some value">
</my-checkbox>
```

##### 通过设置 inheritAttrs 到 false，父作用域的不被认作 props 的 attribute 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上这些规则将会被去掉。

inheritAttrs

##### 保留且渲染模板中的 HTML 注释

comments

当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。


### 实例API

#### 实例属性

##### Vue 实例观察的数据对象

`$data`

##### 当前组件接收到的 props 对象

`$props`

##### Vue 实例使用的根 DOM 元素

`$el`

##### 当前 Vue 实例的初始化选项

`$options`

##### 父实例

`$parent`

##### 当前组件树的根 Vue 实例

`$root`

##### 当前实例的直接子组件

`$children`

##### 用来访问被插槽分发的内容

`$slots`

##### 用来访问作用域插槽

`$scopedSlots`

##### 一个对象，持有注册过 ref attribute 的所有 DOM 元素和组件实例

`$refs`

##### 当前 Vue 实例是否运行于服务器

`$isServer`

##### 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)

`$attrs`

##### 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器

`$listeners`

#### 实例数据

##### 观察 Vue 实例上的一个表达式或者一个函数计算结果的变化

`$watch()`

指定 deep: true 可以发现对象内部值的变化
指定 immediate: true 将立即以表达式的当前值触发回调


```js
vm.$watch('someObject', callback, {
  deep: true
})
```

##### 设置属性

`$set()`

##### 删除值

`delete()`

#### 实例事件

##### 监听当前实例上的自定义事件

`$on()`

```js
vm.$on('test', function (msg) {
    console.log(msg)
})
vm.$emit('test', 'hi')
// => "hi"
```

##### 监听一个自定义事件，但是只触发一次

`$once()`

##### 移除自定义事件监听器

`$off()`

如果没有提供参数，则移除所有的事件监听器；

##### 触发当前实例上的事件, 附加参数都会传给监听器回调

`$emit()`

```html
<div id="emit-example-simple">
  <welcome-button v-on:welcome="sayHi"></welcome-button>
</div>
<script>
Vue.component('welcome-button', {
    template: `
        <button v-on:click="$emit('welcome')">
            Click me to be welcomed
        </button>
    `
})
new Vue({
    el: '#emit-example-simple',
    methods: {
        sayHi: function () {
            alert('Hi!')
        }
    }
})
</script>
```

#### 实例生命周期

##### 手动地挂载一个未挂载的实例

`$mount()`

```js
// 创建并挂载到 #app (会替换 #app)
new MyComponent().$mount('#app')
```

##### 迫使 Vue 实例重新渲染

`$forceUpdate()`

```js
```

##### 将回调延迟到下次 DOM 更新循环之后执行

`$nextTick()`

```js
this.$nextTick(function () {
    // DOM 现在更新了
    // `this` 绑定到当前实例
    this.doSomethingElse()
})
```

##### 完全销毁一个实例

`$destroy()`

### 指令

##### 更新元素的 textContent

v-text

```html
<span v-text="msg"></span>
```

##### 更新元素的 innerHTML

v-html

```html
<div v-html="html"></div>
```

##### 切换元素的 display CSS property

v-show

##### 有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建

v-if

##### 源数据多次渲染元素或模板块

v-for

```html
<div v-for="item in items">
  {{ item.text }}
</div>
```

##### 绑定事件监听器。事件类型由参数指定

v-on

相关链接： https://v2.cn.vuejs.org/v2/api/#v-on

```html
<!-- 缩写 -->
<button @click="doThis"></button>
```

##### 动态地绑定一个或多个 attribute，或一个组件 prop 到表达式

v-bind

相关链接： https://v2.cn.vuejs.org/v2/api/#v-bind

```html
<!-- 缩写 -->
<img :src="imageSrc">
```

##### 在表单控件或者组件上创建双向绑定

v-model

##### 提供具名插槽或需要接收 prop 的插槽

v-slot

```html
<template v-slot:header>
    Header content
</template>
```

##### 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签

v-pre

```html
<span v-pre>{{ this will not be compiled }}</span>
```

##### 保持在元素上直到关联实例结束编译

v-cloak

```html
<style>
[v-cloak] {
    display: none;
}
</style>
<div v-cloak>
    {{ message }}
</div>
```

##### 只渲染元素和组件一次

v-once

```html
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
```

### 特殊属性

##### 在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes

key

```html
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>
```

##### 给元素或子组件注册引用信息

ref

```html
<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>
```

##### 用于动态组件且基于 DOM 内模板的限制来工作

is

```html
<!-- 当 `currentView` 改变时，组件也跟着改变 -->
<component v-bind:is="currentView"></component>
```

##### 标记往哪个具名插槽中插入子组件内容

slot

##### 将元素或组件表示为作用域插槽

slot-scope

##### 表示一个作为带作用域的插槽的 &lt;template&gt; 元素

scope

### 内置组件

##### 渲染一个“元组件”为动态组件

`<component></component>`

```html
<!-- 动态组件由 vm 实例的 `componentId` property 控制 -->
<component :is="componentId"></component>
```

##### 单个元素/组件的过渡效果

`<transition></transition>`

相关链接： https://v2.cn.vuejs.org/v2/api/#transition

```html
<!-- 动态组件 -->
<!-- name 用于自动生成 CSS 过渡类名,替代初始的v -->
<transition name="fade" mode="out-in" appear>
    <component :is="view"></component>
</transition>
```

##### 多个元素/组件的过渡效果

`<transition-group></transition-group>`

```html
<transition-group tag="ul" name="slide">
    <li v-for="item in items" :key="item.id">
        {{ item.text }}
    </li>
</transition-group>
```

##### 保留组件状态或避免重新渲染

`<keep-alive></keep-alive>`

```html
<!-- 基本 -->
<keep-alive>
    <component :is="view"></component>
</keep-alive>
```

##### 作为组件模板之中的内容分发插槽

`<slot></slot>`

