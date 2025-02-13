var numbers = [];
for (var i = 0; i <= 25; i++) {
    numbers.push(i);
}
var evenumbers = numbers.filter(function (num1) { return num1 % 2 == 0; });
console.log(evenumbers);
