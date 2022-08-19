### 混入

* 往页面混入一个模块


    ```js
    var mixinClock = {
        data() {
            return {
                clock: '',
                interalId: '',
            }
        },
        created() {
            this.interalId = setInterval(()=>{
                this.setClock()
            }, 1000)
        },
        destroyed() {
            clearInterval(this.interalId)
        },
        methods:{
            setClock() {
                this.clock = this.dateTimeFormatter(new Date())
                console.log(this.clock)
            },
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
    }
    ```


    ```js
    new Vue({
        el: '.main-container',
        mixins: [mixinClock],
    })
    ```

* 全局混入公共变量，公共方法

    ```js
    Vue.minix({
        data(){
            return {
                ak: '',
            }
        },
        methods:{
            getUserInfo(){
                let userId = this.$store.state.userId;
                let res = this.$http.get(url, {id: userId});
                return res.data;
            }
        }
    })

