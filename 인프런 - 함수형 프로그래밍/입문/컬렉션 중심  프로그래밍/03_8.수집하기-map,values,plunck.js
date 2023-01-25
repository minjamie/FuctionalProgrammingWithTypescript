/*컬렉셕 중심 프로그래밍 - 컬렉션, 배열이나 돌림직한 것들을 다루는 것을 중점으로 하는 기법

리스트와 배열 다룰 때 

1. 수집하기 - map, value, pluck 등
2. 거르기 - filter, reject, compact, without 등
3. 찾아내기 - find, some, every 등
4. 집기 - reduce, min, max, group_by, count_by

# 컬렉셕 중심 프로그래밍의 유형별 함수 만들기

- 수집하기 유형 대포 함수인 map을 이용하여 value만들기

#### value 
value 함수 키가 오브젝트로 되있는 경우 유용
키 밸류 쌍 중 밸류를 꺼내는 함수
*/

function _values(data){
  return _map(data, function(val){return val})
}

_values(users[0])
_keys(users[0])
//{ id: 1, name: 'ID', age: 36 }
//[ 1, 'ID', 36 ]
//[ 'id', 'name', 'age' ]



//#### identity 함수

function _identity(val){
  return val
}

const _valse = _map(_identity) //curryr에 넣은 map에 identity 넘기면 함수가 나옴

function _values(data){
  return _map(data, _identity)
}

_map(_identity)(users[0])



// #### flunck 함수

// - 배열 내부에 있는 객체의 키 값을 수집하는 함수
function _plunk(data,key){
  return _map(data, _get(key))
}

_plunk(users, 'age')
_plunk(users, 'name')
_plunk(users, 'id')
// [33, 22, 11, ...]

