const hashMapObject = [
  ['John', 90],
  ['Alice', 95],
  ['Bob', 87]
];

export default class hashMap {
  hash = [];

  constructor() {
    this.hash = hashMapObject;
  }

   set(id, value) {
      this.hash = [...this.hash, [id, value]];
  }

  get(id) {
    return this.hash.find(x => x[0] === id);
  }

  delete(id) {
    this.hash = this.hash.filter(x => x[0] !== id);
  }

  size() {
    return this.hash.length;
  }

  clear() {
    this.hash = [];
  }
}

const hash = new hashMap();

hash.set('Tanya', 100);
console.log(hash.size());
console.log(hash.get('Tanya'));
hash.delete('Alice');

console.log(hash.size());
console.log(hash);
