function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    let front=0
    let que=[]
    let rear=que.length-1
    for(i=0;i<tc;i++){
    let ans=[]
        let [grade,n]=input[line++].trim().split(" ")
        // console.log(grade,+n)
        if(grade=="E"){
            que.push(n)
            ans.push(que.length)
            console.log(...ans)
        }
        else if(grade=="D"){
            if(que.length==0){
            ans.push(-1)
            ans.push(que.length)
            console.log(...ans) 
            }
            else{
            ans.push(que.shift())
            ans.push(que.length)
            console.log(...ans)
            }
           
        }
        
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
