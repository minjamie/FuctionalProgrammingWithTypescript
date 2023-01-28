## Array에 대해
- 여러개의 값을 담을 수 있는 배열, 단 타입스크립에선 임의의 타입 값 배열 지정 안되며 Array 타입의 매개변수에 지정한 타입만 값으로 지정

#### Array와 List
>- 몇개인이 결정할 수 없는 비결정성은 공통이나 Array는 인덱스로 임의 접근 시 최적화되어있고 List는 순차적, 재귀적 구조를 지려 원소들에 대한 순차 처리에 최적화

#### 비결정성
>- 몇개의 값이 입력될지 출력될지 알 수 없고 값이 하나로 결정되지 않는 다는 의미에서 비결정적 

## for문으로 해결하기
>- 아이템 목록과 전체 수량 및 가격 계산하도록 for문 작성

```js
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

let totalPrice = 0;
let totalCnt = 0;

for(let i =0; i<cart.length;i++){
const name =	cart[i].name;
const price = cart[i].price;
const quantity = cart[i].quantity;
totalPrice += cart[i].price *cart[i].quantity;
 totalCnt += cart[i].quantity;
console.log(`이름: ${name}, 가격 : ${price}, 수량 ${quantity}`);

}
console.log(`전체수량: ${totalCnt} 전체 가격 ${totalPrice}`)
```
>- 아이템 목록 출력까진 코드내 관심사가 일치했으나 전체수량 및 가격을 계산하는 코드를 작성하면서 관심사가 분리
- 따라서 계산하는 부분 for문 분리하는 리팩토링 필요

```js

for(let i =0; i<cart.length;i++){
const name =	cart[i].name;
const price = cart[i].price;
const quantity = cart[i].quantity;
console.log(`이름: ${name}, 가격 : ${price}, 수량 ${quantity}`);
}

let totalCnt = 0;
for(let i =0; i<cart.length;i++){
totalPrice += cart[i].price *cart[i].quantity;
}

let totalPrice = 0;
for(let i =0; i<cart.length;i++){
 totalCnt += cart[i].quantity;
}
console.log(`전체수량: ${totalCnt} 전체 가격 ${totalPrice}`)
```
>- 관심사 별로 코드를 분리하긴했지만 중복되는 부분이 생겨버림
- 여기에 추가로 품절된 상품은 따로 이름을 표기하고 가격과 수량에도 제외하는 코드를 작성하려면 if문 추가

```js
for(let i =0; i<cart.length;i++){
 if(!cart[i].outOfStock){
const name =	cart[i].name;
const price = cart[i].price;
const quantity = cart[i].quantity;
console.log(`이름: ${name}, 가격 : ${price}, 수량 ${quantity}`);
 } else {
   const name =	cart[i].name+'{품절}';
const price = cart[i].price;
const quantity = cart[i].quantity;
   console.log(`이름: ${name}, 가격 : ${price}, 수량 ${quantity}`);

 }
}

let totalCnt = 0;
for(let i =0; i<cart.length;i++){
  if(!cart[i].outOfStock){
  totalCnt += cart[i].quantity;
  }
}

let totalPrice = 0; 
for(let i =0; i<cart.length;i++){
    if(!cart[i].outOfStock){
  totalPrice += cart[i].price * cart[i].quantity;
     }
  }
console.log(`전체수량: ${totalCnt} 전체 가격 ${totalPrice}`)
```
>- 분기처리 되는 코드가 마찬가지로 반복되며 요구사항 늘어날 때마다 대응해야하는 코드 많아지고 변경되면 동일한 코드를 다 수정해야하여 실수하기 쉬움
- 이렇게 명령적으로 작성한 코드를 함수형 프로그래밍에선 반복된 부분을 추상화함으로서 동일한 작업을 선언적 방식으로 작성할 수 있게 된다.

