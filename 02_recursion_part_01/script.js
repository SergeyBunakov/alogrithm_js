"use strict";
console.log("Рекурсія");

function factRecursion(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factRecursion(n - 1);
}

console.log(`Рекурсивний факторіал: ${factRecursion(3)}, ${factRecursion(5)}, ${factRecursion(7)}`);

// let counter = 0;

// function foo(){
//     counter++

//     foo()
// }

// try {
//     foo()
// } catch (e) {
//     console.log(counter);
// }

//  =================================

function factNotRecursion(n) {
    const stack = [[n, 1]];

    while (stack.length > 0) {
        const [current, result] = stack.pop();

        if (current === 0 || current === 1) {
            return result;
        }
        stack.push([current - 1, result * current]);
    }
}

console.log(`Не рекурсивний факторіал:  ${factNotRecursion(3)}, ${factNotRecursion(5)}, ${factNotRecursion(7)}`);


function factIsIteration(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(`Факторіал за допомогою ітерації: ${factIsIteration(3)}, ${factIsIteration(5)}, ${factIsIteration(7)}`)
