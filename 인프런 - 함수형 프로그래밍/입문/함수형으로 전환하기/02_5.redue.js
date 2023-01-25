// # 1. reduce
// - 재귀적으로 특정동작을 연속적으로 실행해주는 결과를 만드는 함수
// - 축약하는 함수로 데이터에서 출발해 넘겨준 두번째 함수로 축약하여 새로운 결과를 만들 때 사용
// - array로 숫자 뽑기, 객체 하나 만들기 등 할때
// 재귀적으로 add를 연속적으로 실행해주는 결과를 만드는 함수
// 두번 째 함수 재귀적 반복하여 축약해주는 함수
function _each(list, iter){
  for(let i =0;i<list.length; i++) {
    iter(list[i])
  }
  return list

function _curry(fn){
  return function(a,b){
    return arguments.length==2 ? fn(a,b) : function(b){
      return fn (a,b);
    }
  }
}

let add = _curry(function (a,b){
  return a+b;
})

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

```


```js
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