function isValid(str) {
    let chars = str.split('')

    let map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (map.has(chars[i])) {
            //为右括号时，如果栈为空或者栈顶与该括号类型不匹配返回false
            if (stack.length === 0 || map.get(chars[i]) !== stack.pop()) {
                return false;
            }
        } else {
            //为左括号时直接入栈
            stack.push(chars[i]);
        }
    }
    return stack.length === 0;
}

console.log(isValid('{[]}[]'));
