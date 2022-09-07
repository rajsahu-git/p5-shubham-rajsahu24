# Closure

A closure is combination of a function bundled together with references to its surrounding state (lexical environment). that means a closure gives as access to an outer function's scope from inner function.

function createIncrement() {
let count=0;
function increment() {
count++;
}
let message=`Count is${count}`;
function log() {
console.log(message);
}
return[increment,log];
}
const [increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?
