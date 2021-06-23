function container(){
    outer()
}

function outer() {

    inner()
}

function inner() {
    console.log(arguments.callee.caller.arguments.callee.caller)
}

container()