class LazyMan {
    constructor(name) {
        this.name = name
        const ctorCb = (next) => {
            console.log(`Hi This is ${name}!`)
            next()
        }
        this.callbacks = [ctorCb]
        // 放到异步队列中
        setTimeout(() => {
            this.next()
        }, 0)
    }


    eat(food) {
        const eatCb = (next) => {
            console.log(`Eat ${food}~`)
            next()
        }
        this.callbacks.push(eatCb)
        // 返回this 链式调用
        return this
    }

    sleepFirst(time) {
        const firstCb = (next) => {
            setTimeout(() => {
                next()
            }, time * 1000)
        }
        // 推送到callbacks的第一个位置
        this.callbacks.unshift(firstCb)
        // 返回this 链式调用
        return this
    }

    sleep(time) {
        const sleepCb = (next) => {
            setTimeout(() => {
                next()
            }, time * 1000)
        }
        this.callbacks.push(sleepCb)
        // 返回this 链式调用
        return this
    }

    // 执行cbs中第一个方法
    next() {
        if (this.callbacks.length <= 0) return
        const cb = this.callbacks.shift()
        // 再次执行LazyMan.next
        cb(this.next.bind(this))
    }
}

// 同步添加回调函数至callbacks中
new LazyMan('Hank').sleepFirst(3).sleep(1).eat('dinner')


