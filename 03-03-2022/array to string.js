function runProgram(input) {
    input=input.trim().split("\n")
    let n=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
            let bag=""
            for(let i=0;i<n;i++){
                if(arr[i]<0) bag+=0
                else bag+=arr[i]
            }
            console.log(bag)
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
