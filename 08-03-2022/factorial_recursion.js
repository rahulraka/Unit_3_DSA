function runProgram(input) {
    input=input.trim().split("\n")
    let n=+input[0]
    console.log(fact(n))
    
    
   
  }
  function fact(n){
      if(n==0 || n==1)
      return 1
      else{
          return n*fact(n-1)
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