### 插槽

#### 匿名插槽

* 子组件设置匿名插槽

    ```html
    <script type="text/x-template" id="custom-comp">
        <div class="custom-comp-container">
            <h2>{{title}}</h2>
            <slot></slot>
        </div>
    </script>
    ```

* 父组件引入子组件

    知识点：
    1. 父组件向子组件传参
    2. 具化匿名插槽

    ```html
    <custom-comp title="标题">
        <template>
            <p>第一行。。。</p>
            <p>第二行。。。。</p>
        </template>
    </custom-comp>
    ```

#### 具名插槽

* 子组件设置具名插槽

    ```html
    <script type="text/x-template" id="custom-comp">
        <div class="custom-comp-container">
            <h2>{{title}}</h2>
            <slot name="warpper"></slot>
        </div>
    </script>
    ```

* 父组件引入子组件

    知识点：
    1. 父组件向子组件传参
    2. 具化具名插槽

    ```html
    <custom-comp title="标题">
        <template v-slot="wrapper">
            <p>第一行。。。</p>
            <p>第二行。。。。</p>
        </template>
    </custom-comp>

    <custom-comp title="标题">
        <template #wrapper>
            <p>第一行。。。</p>
            <p>第二行。。。。</p>
        </template>
    </custom-comp>
    ```

#### 子组件通过插槽向父组件传参

* 子组件设置具名插槽

    ```html
    <script type="text/x-template" id="custom-comp">
        <div class="custom-comp-container">
            <h2>{{title}}</h2>
            <slot name="warpper" v-bind:props="props"></slot>
        </div>
    </script>
    ```

* 父组件引入子组件

    知识点：
    1. 父组件向子组件传参
    2. 具化具名插槽
    3. 接收子组件传回来的参数: slotProps

    ```html
    <custom-comp title="标题">
        <template v-slot:wrapper="slotProps">
            <p>第一行。。。</p>
            <p>第二行。。。。</p>
            <p>参数： {{slotProps.props}}</p>
        </template>
    </custom-comp>

    <custom-comp title="标题">
        <template #wrapper="slotProps">
            <p>第一行。。。</p>
            <p>第二行。。。。</p>
        </template>
    </custom-comp>
    ```