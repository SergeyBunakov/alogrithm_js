"use strict";

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr1);

// === метод простого перебора (лінійний пошук) ===
function searchElementOne(arr, el) {
    // O(n)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return i;
        }
    }
    return -1;
}
const res1 = searchElementOne(arr1, 5);

console.log(`result res1: ${res1}`);

// === метод бінарного пошуку (тобто на кожному шазі зменшуємо пошук у два рази) ===
function searchElementTwo(arr, el) {
    let left = -1;
    let right = arr.length;

    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === el) {
            return mid;
        }
        if (arr[mid] > el) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return -1;
}

const res2 = searchElementTwo(arr1, 8);

console.log(`result res2: ${res2}`);

// ======================================================
const arr2 = [8, 7, 9, 1, 2, 2, 7, 2, 3, 3, 3, 4, 5, 55, 8, 10, 12];

arr2.sort((a, b) => a - b);
console.log(arr2);

function binarySearch(arr, el) {
    let left = -1;
    let right = arr.length;

    // O(log N)
    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2);

        if ((arr[mid] === el)) {
            return mid;
        }
        if (arr[mid] > el) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return -1;
}

function countFreg(arr, el) {
    const posElem = binarySearch(arr, el);

    if (posElem === -1) {
        return 0;
    }

    let i = posElem;
    while (arr[i] === el) {
        i--;
    }

    let j = posElem;
    while (arr[j] === el) {
        j++;
    }

    return j - i - 1;
}

const res3 = countFreg(arr2, 3);
console.log(`result res3: ${countFreg(arr2, 3)}`);

// ======================================================
