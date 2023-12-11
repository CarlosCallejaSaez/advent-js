function manufacture(gifts, materials) {

    const canManufacture=[];
    for(const gift of gifts){
     let canMakeGift=true;
  
     for(const char of gift){
      if(!materials.includes(char)){
        canMakeGift=false;
        break;
      }
     }
  
     if(canMakeGift){
      canManufacture.push(gift)
     }
  
  
  
    }
  
  return canManufacture
  
  }