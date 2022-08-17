### 过滤器


常用于 `过滤数据` 或者 `格式化数据`

```html
<div class="main-container">
    <div class="datetime-wrapper">
        {{ datetime | dateTimeFormatter }}
    </div>
</div>
<script>
    new Vue({
        el: '.main-container',
        data(){
            return {
                datetime: new Date(),
            }
        },
        filters:{
            dateTimeFormatter(_date) {
                let date = new Date(_date);
                let y = date.getFullYear();
                let M  = (date.getMonth()).toString().padStart(2, '0');
                let d = (date.getDate()).toString().padStart(2, '0');
                let h = (date.getHours()).toString().padStart(2, '0');
                let m = (date.getMinutes()).toString().padStart(2, '0');
                let s = (date.getSeconds()).toString().padStart(2, '0');
                return `${y}-${M}-${d} ${h}:${m}:${s}`
            }
        }
    })
</script>
```


注意：

    1. 一个对象可以使用多个过滤器 

    2. 过滤器作为函数使用，支持传参，第一个参数默认是调用的对象