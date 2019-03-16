function produceDrivingRange(range){
  return function(block1, block2){

    let distance = (block1[0]+block1[1]) - (block2[0]+block2[1])
    if (distance < 0) {distance = distance * -1}
    let rangeCheck = range - distance
    if (rangeCheck < 0) {
      let finalRange = rangeCheck * -1
      return `${finalRange} blocks out of range`
    } else {return `within range by ${rangeCheck}`}
  }
}

function produceTipCalculator(percent){
    return function(price){
      return price * percent
    }
}

function createDriver(){
  let driverId = 0
    return class {
      constructor(name){
        this.name = name
        this.id = ++driverId
      }
    }
  }
