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
