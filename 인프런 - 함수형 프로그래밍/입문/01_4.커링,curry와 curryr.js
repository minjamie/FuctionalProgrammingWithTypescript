// # 커링
// 함수와 인자를 다루는 기법으로 함수에 인자를 하나씩 적용해나가다가 필요한 인자가 모두 채워지면 본체를 실행하는 기법

// 자바스크립트 커링 지원 X 일급 함수가 지원, 평가시점 맘대로 다룰 수 있어 커링 기법 구현 가능

// - 본체함수인 함수를 값으로 들고 있다가 원하는 시점까지 미뤘다가 최종적으로 평가하는 기법

// _curry, _curryr

function _curry(fn){
  return function(a){
    return function(b){
      return fn (a,b);
    }
  }
}

let add = _curry(function (a,b){
  return a+b;
})

const add10 = add(10)

add10(5)

add(5)(3)
 
add(5,3)

// 인자 2개 들어오면 즉시 실행하도록 변경
function _curry(fn){
  return function(a,b){
    return arguments.length==2 ? fn(a,b) : function(b){
      return fn (a,b);
    }
  }
}

```
- 왼쪽부터 오른쪽으로 인자를 적용하는 것을 curry
역순으로 적용하는 것은 curryr
```js

function _curryr(fn){
  return function(a,b){
     return arguments.length===2 ? fn(a,b) : function(b){
       return fn(b,a)       
      }
    }
}
let sub = _curryr(function(a,b){
  return a-b
})

sub(10,5)
const sub10 = sub(10)

sub10(5) 

// ## _get
// - 오브젝트에 있는 값을 안전하게 참조하기 위한 함수


function _get(obj,key){
  return obj==null? undefined :obj[key]
}

const user1 =  users[10]
// user1.name // 에러 발생
_get(users[10],'name')                                                                                             // curryr로 적용한 get함수 인자를 뒤집어서 적용 가능                                                                       
const _get = _curryr(function(obj,key){
  return obj==null? undefined :obj[key]
})                                                                                                                 _get('name')(users1) 

const user1 =  users[0]
const user2 =  users[2]
const user3 =  users[3]

_get('name')(user1)
_get('name')(user2)
_get('name')(user3)

_map(
  _filter(users, function(user){ return user.age<30}),
   _get('name')
)
_map(
  _filter(users, function(user){ return user.age<30}),
   _get('age')
)

// 기존의 코드를 객체 커링알로 적용한 get함수로 대체 할 수 있음

