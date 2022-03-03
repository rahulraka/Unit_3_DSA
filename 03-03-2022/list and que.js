function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    let que=[]
    for(let i=0;i<tc;i++){
        let [query,x]=input[line++].trim().split(" ")
        if(query=="E") que.push(+x)
        else if(query=="D"){
            if(que.length==0) console.log("Empty")
            else console.log(que.shift())
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
 