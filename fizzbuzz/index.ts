
let i = 0;
while((i++) < 100) {
    console.log(!(i % 15) ? 'FizzBuzz' : !(i % 3) ? 'Fizz' : !(i % 5) ? 'Buzz' : i);
}
