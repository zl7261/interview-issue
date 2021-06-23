function solution(head, foot) {
    var result = null
    for (var i = 0; i < head; i++) {
        var j = head - i;
        if ((i * 2) + (j * 4) === foot) {
            result = '鸡' + i + '兔' + j;
            break
        }
    }
    return result
}

console.log(solution(42, 94));