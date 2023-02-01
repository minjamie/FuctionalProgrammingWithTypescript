import { totalPrice } from './2_4.data와 function';

const map =<A, B> (array:Array<A>, f:(a:A)=>B): Array<B> => {
  const result: Array<B> = [];
  for (const value of array) {
    result.push(f(value))
  }  
  return result;
}

type MapType<A, B> = (xs: Array<A>, f: (x: A) => B) => Array<B>;

type MapType1 = MapType<number, number>

type Compose<A, B, C> = (g: (y: B) => C, f: (x: A) => B) => (a: A) => C;

type Compose1 = Compose<string, number, boolean>;
const cart = [
  {
    code: "tomato",
    outOfStock: false,
    name: "토마토",
    price: 7000,
    quantity: 2
  },
  {
    code: "orange",
    outOfStock: true,
    name: "오렌지",
    price: 15000,
    quantity: 3
  },
  {
    code: "apple",
    outOfStock: false,
    name: "사과",
    price: 10000,
    quantity: 1
  }
];

interface Item {
  name: string
  price: number;
  quantity: number;
  outOfStock:boolean
}

const stockItem = (item: Item) :string=> {
  const name =	item.name;
  const price = item.price;
  const quantity = item.quantity;
  return `이름: ${name}, 가격 : ${price}, 수량 ${quantity}` 
}

const outOfStockItem = (item: Item): string => {
   const name =	item.name;
  const price = item.price;
  const quantity = item.quantity;
  return `이름: ${name} 품절, 가격 : ${price}, 수량 ${quantity}` 
}

const item = (item: Item): string => {
  if (item.outOfStock) {
    return outOfStockItem(item)
  } else {
    return stockItem(item)
  }
}

const totalCal = (list: Array<Item>, getValue: (item: Item) => number) => {
  // 전체 목록 중 재고가 있는 상품만 getValue를 실행하고 그 값을 모두 더함

  list
  // 1, 재고가 있는 상품만 분류 - filter
  .filter(item => item.outOfStock ===false)
  // 2. 분류된 상품에 대해 getValue 실행 - map
  .map(getValue)
  // 3. getValue가 실행된 값 모두 더하기 - reduce
  .reduce((total,value)=> total +value, 0) 
  
  // let total = 0
  // for (let i = 0; i < list.length; i++) {
  //   if (!list[i].outOfStock) {
  //     total += getValue(list[i]);
  //   }
  // }
  // return total
}

const totalCnt = (list:Array<Item>): string => {
  let totalCnt = totalCal(list, (item)=>item.quantity);
  return `전체수량: ${totalCnt}`
}


const totalPrice = (list:Array<Item>):string => {
  let totalPrice =  totalCal(list, (item)=>item.price);
  return `전체수량: ${totalCnt}`
}

const list = (list: Array<Item>) => { 
// 목록에 있는 아이템 태그 변경
  return `
  ${list
  // 태그 목록을 하나 문자열로 연결
    .map(item)
  .reduce((tags,tag)=>tags+tag,"")
}`
}


const totalCal2 = (list: Array<Item>, getValue: (item: Item) => number) => {
  // 재고가 있는 상품만 getValue를 실행하기 위해 새로운 변수 result추가
  const result:Array<number> = []
  list.forEach(function (item) {
    if (!item.outOfStock) {
    result.push(getValue(item))
    }
  })
    
  return result.reduce((total,value)=> total + value)
}

