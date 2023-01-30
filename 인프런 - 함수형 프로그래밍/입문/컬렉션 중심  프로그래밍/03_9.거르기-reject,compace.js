// 거르기

//////// reject 함수
// 반대되는 값 가져다주는 함수

function _reject(data, predi){
  return _filter(data, function(val){
  return !predi(val)})
}

_filter(users, function(user){
  return user.age>30
})


_reject(users, function(user){
  return user.age>30
})

// negate 함수로 내부 대체

function _negate(func){
  return function(val){
    return !func(val)
  }
}

function _reject(data, predi){
  return _filter(data, _negate(predi))
}


//////// compact 함수
// truthy한 값만 남김


const _compact = _filter(_identity)

_compact([1, 2, 0, false, null, {}])


//some 
function _some(data, predi){
  predi = predi || _identity 
  return _find_index(data, predi || _identity) != -1;
}
// 하나라도 만족하는 값 나오면 트루 반환

_some([1,2,5,10,20], function(val){
  return val > 10
})

// every - 하나라도 거짓이면 펄스이면 리턴
function _every(data,predi){
  return _find_index(data,_negate(predi || _identity)) == -1
}

very([1,2,5,10,20], function(val){
  return val > 3
})

// true
_every([1,2,0,10])
// false
_some([null, false, 0])

_some(users, function(user){
      return user.age>20
      })