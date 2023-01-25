/*# 다형성 높이기
함수형 프로그래밍에서 예외적 데이터 들어오는 거에 대해 다형성을 높이는 것으로 해결

- _each에 null이 넣어도 에러 나지 않도록

*/
const _length = _get('length')

function _each(list, iter){
  for(let i =0, len = _length(list); i<len; i++) {
    iter(list[i])
  }
  return list
}

/* - 함수형 프로그래밍에선 예외적 데이터 들어와도 에러 나지 않고 흘려보내도록 한다

# keys 만들기 
- is_object인지 검사하여 Null 에러나지 않게
*/

function _is_object(obj){
  return typeof obj == 'object' && !!obj
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) :[]
}

Object.keys({name: 'i'})
Object.keys([1,2,3])
Object.keys(10)
_keys(null)


/*# each 외부 다형성 높이기

- 함수형 프로그래밍에선 해당하는 고차함수가 인자의 데이터 형이 무엇이냐에 따라 내부동작을 모두 지원하도록 외 부다형성을 높인다
- 가령 인자가 하나 들어올 땐 함수를 리턴한다 던지 등 
*/

function _each(list, iter){
  let keys = _keys(list)
  for(let i =0, len = keys.length; i<len; i++) {
    iter(list[keys[i]])
  }
  return list
}


// each 외부 다형성 높이기

_each({
  13: 'id',
  19: 'dd',
  29: 'td'
}, function(name){
  console.log(name)
})

