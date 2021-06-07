let arr = ["cat","cow","dog","horse","dog","donkey"];

arr.push("rabbit")
let set = new Set(arr)
console.log(set);
console.log(set.has("dog"));
console.log(set.size)
//console.log(set.keys());
console.log(set.values());
