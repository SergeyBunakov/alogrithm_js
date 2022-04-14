"use strikt";
console.log("=== Зв`язані списки. Частина друга. - Linked lists ===");

// get(key), put(key, value)

// Реалізація без зв`язаних спсиків

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    cunstructor() {
        this.length = 0;
        this.head = this.tail = null;
    }
    push(node) {
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            // .. x <-> n
            //          ^
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }
    shift() {
        const head = this.head;
        this.splice(this.head);
        return head;
    }
    splice(node) {
        // всього одна нода в списку
        if (!node.prev && !node.next) {
            this.head = this.tail = null;
            // це хвіст
        } else if (!node.next) {
            this.tail = node.prev;
            this.tail.next = null;
        } else if (!node.prev) {
            // це голова
            this.head = node.next;
            this.head.prev = null;
            // десь посередині
        } else {
            const next = node.next;
            const prev = node.prev;
            prev.next = next;
            next.prev = prev;
            node.next = node.prev = null;
        }
        this.length--;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.q = new LinkedList();
        this.m = {};
    }
    get(key) {
        if (!this.m[key]) {
            return -1;
        }
        const value = this.m[key.value];
        this.put(key, value);
        return value;
    }
    put(key, value) {
        if (this.m[key]) {
            // {key, value}
            // O(N + N)
            this.q.splice(this.m[key]);
            this.m[key] = null;
        }
        const node = new LinkedList(key, value);
        this.q.push({ key, value });
        this.m[key] = node;
        if (this.q.length > this.capacity) {
            this.m[this.q.shift().key] = null;
        }
    }
}

const cache = new LRUCache(13);
cache.put(1, 1);
cache.put(2, 1);
cache.put(2);
cache.put(3, 1);
cache.put(4, 1);
cache.put(5, 1);
cache.put(6, 1);
cache.put(7, 1);
cache.put(8, 1);
cache.put(9, 1);
cache.put(10, 1);
cache.put(11, 1);
cache.put(12, 1);
console.log(cache.q);
