var str1 = "Welcome to typescript";
var len1 = str1.length;
console.log(len1);
var str2 = str1.split(" ");
console.log(str2);
var str3 = str2[2].split("");
console.log(str3);
var marks = [45, 42, 46, 23, 34, 50];
var totalMarks = marks.reduce(function (mark, sum) { return sum + mark; }, 0);
console.log(totalMarks);
