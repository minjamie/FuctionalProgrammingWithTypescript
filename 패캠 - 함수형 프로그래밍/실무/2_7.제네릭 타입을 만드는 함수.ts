// 숫자를 그대로 돌려주는 함수
const idNumber = (n: number) => {
  return n
}

// 문자열 그대로 돌려주는 함수
const idString = (n: number) => {
  return n
}

// boolean 값 그대로 돌려주는 함수
const idBoolean = (n: number) => {
  return n
}

// 어떤 타입의 값이라도 그대로 돌려주는 함수
const id = <T>(x: T) => {
  return x;
}

type T1 = Array<string>

// 제네릭을 이용하여 2개의 함수 합성하기

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

// isExpensive와 getPrice 매개변수를 컴포즈한 함수 만들기 - 타입은 괄호와 기호가 많아 복잡
const compose = <A, B, C>(g: (y :B)=> C, f: (s: A) => B) => (x:A) => {
  return g(f(x));
}
//(type parameter)<A, B, C>( (B) => C, (A) => B )=> (A) => C


const main = () => {
    const price = getPrice("토마토")
    return isExpensive(price)
}