function runProgram(input) {
    input=input.trim().split(" ").map(Number)
    let x=+input[0]
    let n=+input[1]
    
    console.log(result(x,n).toFixed(4))
    
    
  }
  function result(x,n){
      if(n==0) return 1
      else if(x==1) return 1
      else{
          return (x**n/fact(n))+result(x,n-1)
      }
  }
  
  
  function fact(n){
      if(n==1) return 1
      else if(n==0) return 1
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