// 회원목록, map, filter

var users = [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'BJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 7, name: 'JI', age: 31 },
  { id: 8, name: 'MP', age: 23 }
];

// 명령형 코드

let temp_users = []
  for(var i = 0; i< users.length; i++){
  if (users[i].age >= 30){
     temp_users.push(users[i]) 
  }
}
temp_users

let names = []
for(let i =0;i<temp_users.length;i++){
  if (temp_users[i].age >= 30){
     names.push(users[i].name) 
  }
}
names

temp_users= []
for(var i = 0; i< users.length; i++){
  if (users[i].age < 30){
     temp_users.push(users[i]) 
  }
}
temp_users

let ages = []

for(let i =0;i<temp_users.length;i++){
  if (temp_users[i].age < 30){
     ages.push(temp_users[i].age) 
  }
}
ages


// 함수형 프로그래밍을 통해 중복 줄이기

// _filter, map으로 리팩토링
// 필터, 적용(응용형)형 함수, 함수를 인자로 받아 원하는 시점에 평가를하여 함수 안에서 원하는 특정 인자를 적용해가며 로직을 완성
// 필터, 고차함수, 함수를 인자로 받거나 함수를 리턴하거나 함수안에서 인자로 받은 함수를 실행하는 함수
function _filter(list, predi) {
    let new_list = [] // 원래있는 값 변경하지않고 변형된 새로운 값 리턴하는 식으로 값 변형
    for (var i = 0; i < list.length; i++) {
        // 중복 제거, 추상화할 시 함수를 사용 
        if (predi(list[i])) {
            // 이 부분을 어떤 함수일 때 필터링하도록 수정
            new_list.push(list[i])
        }
    }
    return new_list
}
// 어떤 조건에 필터를 할 것인지 외부 함수에게 위임
_filter(users, function(user){ return user.age>=30})

_filter(users, function(user){ return user.age<30})
// 다용성 높고 재사용성 좋은 함수로 탄생
_filter([1,2,3,4], function(num){ return num % 2})

_filter([1,2,3,4], function(num){ return !(num % 2)})


// 함수형 프로그래밍 특징은 데이터가 어떻게 생겼는지 예측 불가 - 관심사를 분리
// 대입문을 많이 사용하지 않는  - 간결해짐 
// 대입문을 줄이면 함수를 통과해나가면서 한번에 값을 만들어냄
function _map(list, mapper) {
    let new_list = []
    for(let i =0;i<list.length;i++){
        new_list.push(mapper(list[i])) 
    }
    return new_list
}

const over_30 = _filter(users, function(user){ return user.age>=30})

const names =_map(over_30, function (user) {
    return user.name
})

names

var under_30 = _filter(users, function(user) { return user.age < 30; });


const ages =_map(under_30, function (user) {
    return user.name
})

ages

_map([1,2,3], function(num){return num * 2})


_map(
  _filter(users, function(user){ return user.age>=30}),
  function(user){return user.age}
)

_map(
  _filter(users, function(user){ return user.age<30}),
  function(user){return user.name}
)

// _map과 filter내부 루프를 도는 부분 중복 발생하여 제거할 예정