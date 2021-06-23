const target = {foo: 'bar'}
const handle = {
    get() {
        return Reflect.get(...arguments)
    }
}
const proxy = new Proxy(target, handle)
console.log(proxy.foo)