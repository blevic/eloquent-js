class Group {
  constructor() {
    this.elements = [];
  }
  
  add(element) {
    if (!this.has(element)) this.elements.push(element);
  }
  
  delete(element) {
    this.elements = this.elements.filter(e => e !== element);
  }
  
  has(element) {
    return this.elements.includes(element);
  }

  get size() {
    return this.elements.length;
  }
  
  static from(iterableObject) {
    let newGroup = new Group();
    for (let element of iterableObject) {
      newGroup.add(element);
    }
    return newGroup;
  }

  // Look here:
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index == this.group.size) return {done: true};

    let element = this.group.elements[this.index];
    this.index++;

   return {value: element, done: false};
  }
}

/* If the [Symbol.iterator] is not declared in the class, you'd have to mak some after-the-fact prototype manipulation:

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

*/

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
