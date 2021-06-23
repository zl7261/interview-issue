define('moduleA',
    ['moduleB'],
    function (moduleB) {
        return moduleB.api()
    })