function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

function add(x, y) {
    return x + y;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3));
console.log(curriedAdd(2, 3));
console.log(curriedAdd(2)(3)(4));
