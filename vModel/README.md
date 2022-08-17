### 双向绑定

* 监听组件输入赋给变量

    ```js
    let user = {
        username: ''
    }
    let inputEl = document.querySelector('[name="username"]')

    inputEl.addEventListener('change', (el)=>{
        user.username = el.target.value
    })
    ```

* 数据劫持处理响应

    ```js
    let inputVal = document.querySelector('.username-val')
    
    Object.defineProperty(user, 'username', {
        set(newV) {
            inputEl.value = newV
            inputVal.innerHTML = newV
            console.log('[设置值]=====>', newV)
        },
        get() {
            console.log('[返回值]=====>', user.username)
            return user.username
        }
    })
    ```