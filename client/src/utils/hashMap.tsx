const fruits = ['apple', 'pear', 'banana', 'grape', 'kiwi'];


export default function hashMapFunction() {
  const hashMap = new Map();

  for (let i = 0; i < fruits.length; i++) {
    hashMap.set(i, fruits[i]);
  }

  console.log('hashMap', hashMap);
}
