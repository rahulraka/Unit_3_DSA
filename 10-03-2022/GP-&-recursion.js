function runProgram(input) {
    input=input.trim().split(" ").map(Number)
    let n=input[0]
    let r=input[1]
    let i=1;
    console.log(sum(n,r).toFixed(4))
    
    
    
   
  }
  
  function sum(n,r){
      if(n==0) return 1
      else if(r==0) return 1
      else{
          let ans=1/r**n + sum(n-1,r)
      return ans
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