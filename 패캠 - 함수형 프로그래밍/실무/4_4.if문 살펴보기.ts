export interface Item {
  readonly code: string;
  readonly outOfStock: boolean;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly discountPrice?: number;
}

export const cart: Array<Item> = [
  {
    code: "tomato",
    outOfStock: false,
    name: "토마토",
    price: 7000,
    quantity: 2,
    discountPrice: 1000
  },
  {
    code: "orange",
    outOfStock: true,
    name: "오렌지",
    price: 15000,
    quantity: 3,
    discountPrice: 2000
  },
  {
    code: "apple",
    outOfStock: false,
    name: "사과",
    price: 10000,
    quantity: 1
  }
];

const totalCal = (list: Array<Item>, getValue: (item: Item) => number) => {
  // 전체 목록 중 재고가 있는 상품만 getValue를 실행하고 그 값을 모두 더함

  list
  // 1, 재고가 있는 상품만 분류 - filter
  .filter(item => item.outOfStock ===false)
  // 2. 분류된 상품에 대해 getValue 실행 - map
  .map(getValue)
  // 3. getValue가 실행된 값 모두 더하기 - reduce
  .reduce((total,value)=> total +value, 0) 
}

const stockItem = (item: Item): string => {
  let saleText = "";
  let discountPrice = 0;
  if (item.discountPrice !== undefined) {
    saleText = `${item.discountPrice}원 할인`
    discountPrice = item.discountPrice
  }
  const name =	item.name;
  const price = item.price;
  const quantity = item.quantity;
  return `이름: ${name}, 가격 : ${price - discountPrice} ${saleText}, 수량 ${quantity}` 
}



const totalPrice = (list:Array<Item>):string => {
  const totalPrice = totalCal(
    list,
    (item) => item.price * item.quantity
  );
  const totalDiscountPrice = totalCal(list, (item) => {
    let discountPrice = 0;
    if (item.discountPrice !== undefined) {
      discountPrice = item.discountPrice;
    }
    return discountPrice * item.quantity;z
  });

  return `전체가격: ${totalPrice -totalDiscountPrice} 총 ${totalDiscountPrice}`
}


