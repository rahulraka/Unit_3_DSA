function runProgram(input) {
    input=input.trim().split("\n")
    let n=+input[0]
   console.log(fact(n))
  }
  
      function fact(n){
          let i=1
          let ans=1
          while(i<=n){
              ans=ans*i
              i++
      }
      return ans
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