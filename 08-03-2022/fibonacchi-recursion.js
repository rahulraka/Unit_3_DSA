function runProgram(input) {
    input=input.trim().split("\n")
   let n=+input[0]
   console.log(fib(n))
  
 }
 function fib(n){
     if(n==0) return 0
     else if(n==1) return 1
     else{
         return fib(n-1) + fib(n-2);
     }
 }
 if (process.env.USERNAME === "sd120") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0) ;
   });
 }