### 自定义指令

1. 声明指令

    ```js
    Vue.directive('focus', {
        bind(el, binding) {},
        inserted(el) {
            el.focus();
        },
    })
    ```

2. 使用指令

    ```html
    <input v-focus/>
    ```

3. 指令传参

    ```js
    Vue.directive('focus', {
        bind(el, binding) {},
        inserted(el, binding) {
            let timeOutVal = binding.value;
            setTimeOut(()=>{
                el.focus();
            }, timeOutVal)
        },
    })
    ```

    ```html
    <input v-focus="3000"/>
    ```

4. 动态指令

    ```js
    Vue.directive('focus', {
        bind(el, binding) {},
        inserted(el, binding) {
            let timeOutVal = binding.value;
            setTimeOut(()=>{
                if(binding.arg == 'input'){
                    el.focus();
                } else {
                    console.log('非聚焦元素')
                }
            }, timeOutVal)
        },
    })
    ```

    ```html
    <input v-focus:input="3000"/>
    ```

