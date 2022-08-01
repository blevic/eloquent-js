class PGroup {
    constructor(elements) {
      this.elements = elements;
    }
  
    add(element) {
      if (this.has(element)) return this;
      return new PGroup(this.elements.concat([element]));
    }
  
    delete(element) {
        if (!this.has(element)) return this;
        return new PGroup(this.elements.filter(e => e !== element));
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

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
