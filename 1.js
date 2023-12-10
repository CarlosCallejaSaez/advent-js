function findFirstRepeated(gifts) {
    const aux=[];
  
    for(let i=0;i<gifts.length;i++){
       
       if(aux.includes(gifts[i])) return gifts[i]
       else aux.push(gifts[i])
  
  
  
    }
  
    return -1
  }
     