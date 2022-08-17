let _lazy = {
    bind(el, binding) {
        let defaultSrc = "https://sponsors.vuejs.org/images/dcloud.avif";
        init(el, binding.value, defaultSrc)
    },
    inserted(el) {
        // 兼容处理
        if ('IntersectionObserver' in window) {
            observe(el)
        } else {
            listenerScroll(el)
        }
    },
}

// install方法
function install(Vue, options) {
    // 代替图片的loading图
    let defaultSrc = 'options.default'

    Vue.directive('lazy', {
        bind(el, binding) {
            init(el, binding.value, defaultSrc)
        },
        inserted(el) {
            // 兼容处理
            if ('IntersectionObserver' in window) {
                observe(el)
            } else {
                listenerScroll(el)
            }
        },
    })
} // 初始化
function init(el, val, def) {
    // data-src 储存真实src
    el.setAttribute('data-src', val) // 设置src为loading图
    el.setAttribute('src', def)
} // 利用IntersectionObserver监听el
function observe(el) {
    let io = new IntersectionObserver((entries) => {
        let realSrc = el.dataset.src
        if (entries[0].isIntersecting) {
            if (realSrc) {
                el.src = realSrc
                el.removeAttribute('data-src')
            }
        }
    })
    io.observe(el)
} // 监听scroll事件
function listenerScroll(el) {
    let handler = throttle(load, 300)
    load(el)
    window.addEventListener('scroll', () => {
        handler(el)
    })
} // 加载真实图片
function load(el) {
    let windowHeight = document.documentElement.clientHeight
    let elTop = el.getBoundingClientRect().top
    let elBtm = el.getBoundingClientRect().bottom
    let realSrc = el.dataset.src
    if (elTop - windowHeight < 0 && elBtm > 0) {
        if (realSrc) {
            el.src = realSrc
            el.removeAttribute('data-src')
        }
    }
} // 节流
function throttle(fn, delay) {
    let timer
    let prevTime
    return function (...args) {
        let currTime = Date.now()
        let context = this
        if (!prevTime) prevTime = currTime
        clearTimeout(timer)
        if (currTime - prevTime > delay) {
            prevTime = currTime
            fn.apply(context, args)
            clearTimeout(timer)
            return
        }

        timer = setTimeout(function () {
            prevTime = Date.now()
            timer = null
            fn.apply(context, args)
        }, delay)
    }
}
