function partyPlanning(N,PamID,M,JimID){
   
    let obj1={}
    let obj2={}
    let arr1=[]
    let arr2=[]
    for(let i=0;i<N;i++){
        if(obj1[PamID[i]]==undefined) obj1[PamID[i]]=1
        else obj1[PamID[i]]=1
    }
    for(let key in obj1){
        arr1.push(key)
    }
    for(let i=0;i<M;i++){
        if(obj2[JimID[i]]==undefined) obj2[JimID[i]]=1
        else obj2[JimID[i]]=1
    }
    for(let key in obj2){
        arr2.push(key)
    }
    console.log(result(arr1,arr2))
   function result(A,B){
       let n=A.length
       let m=B.length
       if(n!=m) return "No"
       else{
           for(let i=0;i<n;i++){
               if(A[i]!=B[i]) return "No"
           }
       }
       return "Yes"
   }
    
   
}
