function runProgram(input) {
    let str=input
    let ind=0
    console.log(len(str,ind))
    
    }
    function len(str,ind){
          if(str[ind]==undefined) return 0
      else{
          return 1+len(str,ind+1)
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