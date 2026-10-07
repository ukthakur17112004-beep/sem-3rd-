console.log("Start");

setImmediate(() => {
    console.log("setImmediate");
});

setTimeout(() => {
    console.log("setTimeout 0");
}, 0);

setTimeout(() => {
    console.log("10 ms timer");
}, 10);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");