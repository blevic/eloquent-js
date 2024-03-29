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

  static from(iterableObject) {
    let newGroup = new Group();
    for (let element of iterableObject) {
      newGroup.add(element);
    }
    return newGroup;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
