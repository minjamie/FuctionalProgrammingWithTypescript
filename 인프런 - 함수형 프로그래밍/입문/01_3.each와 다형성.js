// ## each
// - 리스트 순회하는 함수로 for 문 돌면서 내부에서 하는 일 위임하여 중복 제거 가능

function _filter(list, predi) {
    let new_list = [] 
	// 제거 할 중복 부분 1 - 루프
    for (var i = 0; i < list.length; i++) {
    // 제거 할 중복 부분 2 - 해당 i  번째를 찾는 조건 부분
        if (predi(list[i])) {
            new_list.push(list[i])
        }
    }
    return new_list
}

// 제거 버젼
function _filter(list, predi) {
    let new_list = []; 
    _each(list, function(val){
      if (predi(val)) new_list.push(val)
    })
    return new_list;
}

function _map(list, mapper) {
    let new_list = []
    _each(list, function(val){
        new_list.push(mapper(val)) 
  })  
    return new_list
}

// 리스트 순회하는 함수 -for 문 돌면서 내부에서 하는 일 위임
function _each(list, lter){
  for(let i =0;i<list.length; i++) {
    lter(list[i])
  }
  return list
}

/*
>- map, each, filter는 이미 자바스크립트에 존재하는데 이는 함수가 아닌 메서드로서 존재하기에 해당하는 클래스에 준비되어있지 않은 메서드는 사용할 수 없다.
- 특히 위 메서드는 오직 array에만 적용되며 arraylike(=NodeList, 배열이 아닌 값이어도 길이가 있고 키 밸류 쌍의 객체이다)의 형태에서는 사용할 수 없다.

## 다형성
- 유연하고 실용적인 형태로 함수를 활용 가능
함수형 프로그래밍을 통해 데이터가 존재하지 않아도 사용할 수 있기에 더 높은 조합성을 만들 수 있다

## 외부 다형성
- array_like, arguments, document.querySelectorAll()

array_like면 다 돌릴 수 있도록 하는 건 map, each, filter와 같은 것이 담당
이후 수행하는 건 보조함수가 담당

## 내부 다형성
- predi, iter, mapper
우리가 흔히 아는 콜백 함수는 함수형 프로그래밍에선 두번째로 넘겨받는 함수가 어떤 역할을 하느냐에 따라 다양한 이름을 갖는 데
위에 사용한 것처럼 1. predicate 조건을 리턴하는 함수 2. iter 돌면서 반복적으로 사용하는 함수 3. mapper무언가를 매핑하는 함수로 나눠진다.


*/
