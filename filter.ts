let numbers:number[]=[];
for(let i:number=0;i<=25;i++){
    numbers.push(i);
}

let evenumbers:number[] = numbers.filter(num1=>num1%2==0);
console.log(evenumbers);