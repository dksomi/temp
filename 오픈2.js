let one = 1000;

function test() {
  console.log('test');
  setTimeout(test, one);
}
// setTimeout(test, one);
test();