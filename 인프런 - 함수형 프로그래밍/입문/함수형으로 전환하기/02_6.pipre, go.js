// # 1. reduce
// - 재귀적으로 특정동작을 연속적으로 실행해주는 결과를 만드는 함수
// - 축약하는 함수로 데이터에서 출발해 넘겨준 두번째 함수로 축약하여 새로운 결과를 만들 때 사용
// - array로 숫자 뽑기, 객체 하나 만들기 등 할때
// 재귀적으로 add를 연속적으로 실행해주는 결과를 만드는 함수
// 두번 째 함수 재귀적 반복하여 축약해주는 함수

function _reduce(list, iter, memo) {
  _each(list, function(val){
    memo = iter(memo, val)
  })
  return memo
} 


_reduce([1,2,3], add) 

// memo = add(0,1)
// memo = add(memo,2)
// memo = add(meme,3)

_reduce([1,2,3], add, 0) 
// 세 번째인자 생략 첫번 째 리스트의 첫번째 인자를 처음으로

// 배열의 slice 메서드 같와 같은 역할의 함수 
const slice = Array.prototype.slice
function _rest(list, num){
  return slice.call(list, num || 1 )
}


// reduce
function _reduce(list, iter, memo) {
  if(arguments.length===2){
    memo = list[0]
    list = _rest(list)
  }
  _each(list, function(val){
    memo = iter(memo, val)
  })
  return memo
} 

// # 2. pipe line
// - reduce 함수를 통해서 만들 있는 pipe 함수, 함수들을 인자로 받아서 연속적으로 실행 
// - pipe는 결국 reduce로 보다 추상화된 함수를 리턴하는 함수

function _pipe(){
  var fns = arguments
  return function(arg){
    return _reduce(fns, function(arg, fn){
      return fn(arg)
    }, arg)
  }
}

let f1 = _pipe(
  function(a){return a+1}, // 1+1
  function(a){return a*2}, // 1+2,
  function(a){return a*a} // 1+2
)
 
f1(1)
```


## go
- go는 pipe인데 첫 번째 인자를 받아 즉시실행되는 함수

```js
function _go(args){
  let fns = _rest(arguments);
  return _pipe.apply(null, funs)(arg)
}
//
_go(1,
  function(a){return a+1}, // 1+1
  function(a){return a*2}, // 1+2,
  function(a){return a*a} ,// 2*2,
console.log
)
// - 기존에 만들었던 map 함수를 다음과 같이 go로 대체 가능
// users에 _go 적용
_map(
  _filter(users, function(user){ return  user.age>=30}),
  _get('name')
)

_map(
  _filter(users, function(user){ return user.age<30}),
  function(user){return user.name}
)

_go(users, 
    function(users){
      return _filter(users, function(user){
        return user.age >= 30
      });
    },
    function(users){
      return _map(users, _get('name'))
    },
    console.log);

_go(users, 
    function(users){
      return _filter(users, function(user){
        return user.age < 30
      });
    },
    function(users){
      return _map(users, _get('name'))
    },
    console.log);
// - map, filter를 curryr을 적용하면 더 간결하게 다음과 같이 표현
_filter=_curryr(_filter)
_map=_curryr(_map)
_map(function(val){return val *2})([1,2,3]) // 평가 순서 변경

// curryr을 사용해 더 간결하게
_go(users, 
      _filter(function(user){
        return user.age >= 30
      }),
    _map(_get('name')),
console.log);

_go(users, 
      _filter(function(user){
        return user.age < 30
      }),
    _map(_get('age')),
console.log);
