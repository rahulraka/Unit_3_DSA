function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    let que=[]
    let stack=[]
    
    for(let i=0;i<tc;i++){
        
        let [query,x]=input[line++].trim().split(" ").map(Number)
        
        if(query==1) que.push(x)
        else if(query==2) stack.push(x)
        else if(query==3){
            if(que.length==0) console.log(-1)
            else console.log(que[0])
        }
        else if(query==4) {
            if(stack.length==0) console.log(-1)
            else console.log(stack[stack.length-1])
        }
        else if(query==5) stack.push(que.shift())
     //   else if(que.length==0 || stack.length==0) console.log(-1)
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
 