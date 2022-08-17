let _throttle = {
    bind: (el, binding, vnode, oldVnode) => {
        // bindConsole(el, binding, vnode, oldVnode);
        let throttleTime = binding.value; // 防抖时间
        if (!throttleTime) {
            // 用户若不设置防抖时间，则默认2s
            throttleTime = 2000;
        }
        let cbFun;
        el.addEventListener(binding.arg, event => {
            // 第一次执行
            if (!cbFun) {
                cbFun = setTimeout(() => {
                    cbFun = null;
                }, throttleTime);
            } else {
                if (binding.arg == 'click') {
                    alert('请不要重复点击')
                }
                // 阻止剩下的事件处理程序被执行。
                event && event.stopImmediatePropagation();
            }
        }, true);
    },
    update: (el, binding, vnode, oldVnode) => {
        // updateConsole(el, binding, vnode, oldVnode);
    }
}