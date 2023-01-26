
/*
토마토 7000원, 오렌지 15000원 사관 10000원
*/

// 순수함수로 만들기


export let totalPrice = 0
totalPrice += 7000
totalPrice += 15000
totalPrice += 10000
totalPrice += 30000 //무슨값?

// 여러개 목록 관리 실수 및 재사용 떨어짐

function priceOfTomato(){
	return 7000
}

function priceOfOrange(){
	return 15000
}
function priceOfApple(){
	return 10000
}
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

const priceOfFruit= {
  tomato: 7000,
  orange: 15000,
  apple: 10000,
}

const isEven = {
  tomato:true,
  orange: true
}
  
const isEvenFn =(str:string)=> str.length % 2 ===0 
  
function list1(){
	return priceOfTomato() + priceOfOrange() + priceOfApple()
}

function list3(){
	return priceOfApple() * 100
}

function getTotal(){
return list3()
}

const main = () => {
    const price = getPrice("토마토")
    return isExpensive(price)
}