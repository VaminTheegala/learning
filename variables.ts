let str1:string="Welcome to typescript";
const len1 : number = str1.length;
console.log(len1);

let str2:string[] = str1.split(" ");
console.log(str2);
let str3:string[] = str2[2].split("");
console.log(str3);

let marks:number[]=[45,42,46,23,34,50];
let totalMarks:number = marks.reduce((mark,sum)=>sum+mark,0);
console.log(totalMarks);