class Mvvm {
    constructor(config) {
        this.$data = config.data

        Object.keys(this.$data).forEach(key => {
            this.DataProxy(key)
        })

        this.dep = new Dep(this.$data)
    }

    DataProxy(key) {
        let that = this
        Object.defineProperty(that, key, {
            configurable: false,
            enumerable: true,
            get() {
                return this.$data[key]
            },
            set(val) {
                this.$data[key] = val
            }
        })
    }
}

class Dep {
    constructor(data) {
        this.watchTaskQueue = {}
        Object.keys(data).forEach(key => {
            this.watchTaskQueue[key] = []
        })
    }

    add(key, keys, node, vm, type) {
        this.watchTaskQueue[key].push(new Watcher(node, vm, keys, type))
    }

    notify(key) {
        this.watchTaskQueue[key].forEach(task => {
            task.update()
        })
    }
}

class Watcher {
    constructor(el, vm, keys, type) {
        this.el = el
        this.vm = vm
        this.keys = keys
        this.type = type
    }

    update() {
        if (this.keys.length <= 1) {
            this.el[this.type] = this.vm.$data[this.keys[0]]
            return
        }
        let v = null
        this.keys.forEach(val => {
            v = !v ? this.vm.$data[val] : v[val]
        })
        this.el[this.type] = v
    }
}