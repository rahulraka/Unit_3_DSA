function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(i=0;i<tc;i++){
        let n=+input[line++]
        let arr=input[line++].trim().split(" ").map(Number)
        console.log(sum(n,arr))
    }
   
  }
  function sum(n,arr){
      if(n<=0) return 0
      else{
        return (sum(n-1,arr) + arr[n - 1]);
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