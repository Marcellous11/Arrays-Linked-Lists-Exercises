/** Node: node for a singly linked list. */

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	//** getNode(idx): gets node by idx number  */

	getNode(idx) {
		let current = this.head;
		let count = 0;
		while (current !== null && count != idx) {
			count++;
			current = current.next;
		}
		return current;
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val, this.head);
		this.head = newNode;
		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		return this.removeAt(this.length - 1);
	}

	/** shift(): return & remove first item. */

	shift() {
		return this.removeAt(0);
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx > this.length - 1 || idx < 0) {
			throw new Error('Number must be in between 0 and linkList length');
		}
		return this.getNode(idx).val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx > this.length - 1 || idx < 0) {
			throw new Error('Number must be in between 0 and linkList length');
		}
		let current = this.getNode(idx);
		current.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx > this.length || idx < 0) {
			throw new Error('Number must be in between 0 and linkList length');
		}
		if (idx === 0) return this.unshift(val);
		if (idx === this.length) return this.push(val);

		let previous = this.getNode(idx - 1);

		let newNode = new Node(val);
		newNode.next = previous.next;
		previous.next = newNode;

		this.length++;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx > this.length || idx < 0) {
			return 'Number not in index range';
		}

		// if remove head

		if (idx === 0) {
			let val = this.head.val;
			this.head = this.head.next;
			this.length--;
			if (this.length < 2) this.tail = this.head;
			return val;
		}

		let previous = this.getNode(idx - 1);

		//removing tail

		if (idx === this.length - 1) {
			let val = previous.next.val;
			previous.next = null;
			this.tail = previous;
			this.length--;
			return val;
		}

		let val = previous.next.val;
		previous.next = previous.next.next;
		this.length--;
		return val;
	}
}

module.exports = LinkedList;

//throw new Error('Number must be in between 0 and linkList length');
