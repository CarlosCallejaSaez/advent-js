function findFirstRepeated(gifts) {
    const auxiliar=[];

    for(let i=0; i<gifts.length; i++) {
        if(auxiliar[gifts[i]]!==undefined){
            return gifts[i];
        }
        else{
            auxiliar[i]=gifts[i];
        }
    }
        return -1


  }
  const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2)