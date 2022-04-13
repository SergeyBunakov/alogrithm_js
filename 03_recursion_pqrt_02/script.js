"use strict";

console.log("Recursion Part-2");
// Дитина піднімається сходами з n сходинок. За один крок вона може переміститися на одну, дві або три сходинки. Знайти кілткість можливих варіантів переміщення дитини сходами.

// 1. Базовий випадок
// if (n < 0) return 0;
// if (n == 0) return 1;

// 2. Рекурентне співвідношення
// c[n] = c[n - 1] + c[n - 2] + c[n - 3];
// c[3] = c[2] + c[1] + (c[0] = 1);
// c[3] = 2 + 1 + 1 = 4;

console.log('=== Знаходимо кількість варіантів за допомогою рекурсії')

function countWays1(n) {
    if (n < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    // O(5^n)
    return countWays1(n - 1) + countWays1(n - 2) + countWays1(n - 3);
}
console.log(countWays1(3));
console.log(countWays1(2));
console.log(countWays1(1));
console.log(countWays1(12));

console.log("=== Меморізація за допомогою cache ===");

function countWays2(n, cache = []) {
    if (n < 0) {
        return 0;
    }
    if (!cache[n]) {
        if (n === 0) {
            cache[n] = 1;
        } else {
            // O(n)
            // O(n) memory
            cache[n] =
                countWays2(n - 1, cache) +
                countWays2(n - 2, cache) +
                countWays2(n - 3, cache);
        }
    }
    return cache[n];
}

console.log(countWays2(3));
console.log(countWays2(2));
console.log(countWays2(1));
console.log(countWays2(12));


// Перевіряємо роботу cache
console.log('=== Перевірка роботи cache ===');

let hit = 0;
let miss = 0;

function countWays3(n, cache = []) {
    if (n < 0) {
        miss++;
        return 0;
    }
    if (!cache[n]) {
        miss++;
        if (n === 0) {
            cache[n] = 1;
        } else {
            // O(n)
            // O(n) memory
            cache[n] =
                countWays3(n - 1, cache) +
                countWays3(n - 2, cache) +
                countWays3(n - 3, cache);
        }
        return cache[n];
    } else {
        hit++;
        return cache[n];
    }
}

console.log(countWays3(12), "miss=",miss, "hit=",hit);
