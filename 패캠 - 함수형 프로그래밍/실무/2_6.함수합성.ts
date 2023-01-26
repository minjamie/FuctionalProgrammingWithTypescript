function getPrice(name:string): number | undefined {
	if(name==="tomato"){
  	return 7000
  } else if(name ==="orange"){
  	return 150000
  } else if(name ==="apple"){
    return 10000
  }
} 

const isExpensive = ( price : number | undefined)=>{
  if(price === undefined){
    return false
    }
  return price > 10000;
  }

function isExpensivePrice(name: string): boolean {
  return isExpensive(getPrice(name))
}

const main = () => {
    const price = getPrice("토마토")
    return isExpensive(price)
}