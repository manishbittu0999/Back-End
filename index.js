function add(a, b){
    return a + b;
}

console.log(add(5,6));

console.log(process.argv);
var args = process.argv.slice(2);
console.log(args);