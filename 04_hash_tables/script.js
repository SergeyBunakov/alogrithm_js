'use strict';
console.log('Хеш таблиці');

const map = {};

// map['key'] = 'value';
// console.log(map['key']);

console.log("=== В цьому прикладі виникає колізія ===");
class HashTableOne {
    store1 = new Array(10);
    hash(key) {
        let sum1 = 0;

        for (let i = 0; i < key.length; i++) {
            sum1 += key.charCodeAt(i);
        }
        return sum1;
    }
    // O(1)
    add(key, value) {
        this.store1[this.hash(key)] = value;
    }
    // O(1)
    get(key){
        return this.store1[this.hash(key)];
    }
}

console.log("=== тут працює як і очікували ===");
const dict1 = new HashTableOne();
dict1.add("foo", "1");
dict1.add("bar", "2");
console.log(dict1.get("foo"), dict1.get("bar"));

console.log("=== При передачі певних даних виникає колізія ===");
dict1.add("ab", "1");
dict1.add("ba", "2");
console.log(dict1.get("ab"), dict1.get("ba"));

console.log("=== Виправлення колізії ===");
class HashTableTwo {
    store2 = new Array(10);
    hash(key){
        let sum2 = 0;

        for (let i =0; i < key.length; i++) {
            sum2 += key.charCodeAt(i);
        }
        return sum2;
    }


    add(key, value) {
        this.store2[this.hash(key)] = this.store2[this.hash(key)] || []; 
        this.store2[this.hash(key)].push({key, value});
    }
    get(key) {
        return this.store2[this.hash(key)].find((item) => item.key === key).value;
    }
}

const dict2 = new HashTableTwo();
dict2.add("ab", "1");
dict2.add("ba", "2");
console.log(dict2.get("ab"), dict2.get("ba"));
