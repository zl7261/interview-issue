function name(n) {
    n = 0
    console.log(n)
    if (n > 10) return
    n++

    name(n)
}

name('123')