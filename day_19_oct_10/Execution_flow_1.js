console.log('Global Code starts here...')
function f3() {
    console.log("f3 startes here")
    console.log("f3 ends here")
}
function f2() {
    console.log("f2 startes here")
    f3();
    console.log("f2 ends here")
}
function f1() {
    console.log("f1 startes here")
    f2();
    console.log("f1 ends here")
}
f1();
console.log('Global Code ends here...');