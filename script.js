class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        let prevNode = null;
        while (currentNode.nextNode) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        if (prevNode) {
            prevNode.nextNode = null;
            this.tail = prevNode;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.size--;
        return currentNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            const newNode = new Node(value);
            let prevNode = null;
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            prevNode.nextNode = newNode;
            newNode.nextNode = currentNode;
            this.size++;
        }
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            const removedNode = this.head;
            this.head = this.head.nextNode;
            this.size--;
            if (this.size === 0) {
                this.tail = null;
            }
            return removedNode;
        }
        let prevNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        prevNode.nextNode = currentNode.nextNode;
        if (index === this.size - 1) {
            this.tail = prevNode;
        }
        this.size--;
        return currentNode;
    }

    toString() {
        let currentNode = this.head;
        let result = '';
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }
}


